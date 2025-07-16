import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

interface ExternalModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  autoRotate?: boolean;
  rotationSpeed?: number;
}

const ExternalModel: React.FC<ExternalModelProps> = ({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  autoRotate = true,
  rotationSpeed = 0.005,
}) => {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const groupRef = useRef<THREE.Group>(null);
  const { gl } = useThree();

  // Detect device performance
  useEffect(() => {
    const checkPerformance = () => {
      const canvas = gl.domElement;
      const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext;
      
      if (context) {
        const debugInfo = context.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          const renderer = context.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          const isMobileGPU = /mali|adreno|powervr|intel hd|radeon hd/i.test(renderer.toLowerCase());
          setIsLowPerformance(isMobileGPU || window.innerWidth < 768);
        }
      }
    };

    checkPerformance();
  }, [gl]);

  // Optimized model loading
  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      modelPath,
      (gltf) => {
        const loadedModel = gltf.scene;
        
        // Optimize materials for performance
        loadedModel.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // Optimize geometry
            if (child.geometry) {
              child.geometry.computeBoundingBox();
              child.geometry.computeBoundingSphere();
            }
            
            // Optimize materials
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(mat => optimizeMaterial(mat, isLowPerformance));
              } else {
                optimizeMaterial(child.material, isLowPerformance);
              }
            }
          }
        });

        // Center and scale the model
        const box = new THREE.Box3().setFromObject(loadedModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = scale / maxDim;
        
        loadedModel.scale.setScalar(scaleFactor);
        loadedModel.position.sub(center.multiplyScalar(scaleFactor));
        loadedModel.position.y += 0.5;
        loadedModel.rotation.y = 0;
        loadedModel.scale.z *= -1;
        loadedModel.rotation.x = -0.2;
        
        setModel(loadedModel);
        setIsLoading(false);
      },
      undefined,
      (error: any) => {
        console.error('Model loading error:', error);
        setError(error.message || 'Failed to load model');
        setIsLoading(false);
      }
    );
  }, [modelPath, scale, isLowPerformance]);

  // Material optimization function
  const optimizeMaterial = (material: THREE.Material, lowPerformance: boolean) => {
    if (material instanceof THREE.MeshStandardMaterial) {
      // Reduce texture quality for low-performance devices
      if (lowPerformance) {
        material.roughness = 0.8;
        material.metalness = 0.2;
        material.envMapIntensity = 0.5;
      }
      
      // Optimize for mobile
      if (window.innerWidth < 768) {
        material.roughness = 0.7;
        material.metalness = 0.3;
      }
    }
  };

  // Optimized frame updates
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      // Reduce rotation speed on mobile for better performance
      const speed = window.innerWidth < 768 ? rotationSpeed * 0.5 : rotationSpeed;
      groupRef.current.rotation.y += speed;
    }
  });

  // Loading placeholder with responsive design
  if (isLoading) {
    return (
      <group ref={groupRef} position={position}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#666666" />
        </mesh>
        {/* Loading indicator */}
        <mesh position={[0, 2, 0]}>
          <sphereGeometry args={[0.1, 8, 6]} />
          <meshStandardMaterial color="#4a90e2" />
        </mesh>
      </group>
    );
  }

  // Error placeholder
  if (error || !model) {
    return (
      <group ref={groupRef} position={position}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#c53030" />
        </mesh>
        {/* Error indicator */}
        <mesh position={[0, 2, 0]}>
          <sphereGeometry args={[0.1, 8, 6]} />
          <meshStandardMaterial color="#e53e3e" />
        </mesh>
      </group>
    );
  }

  return (
    <group ref={groupRef} position={position}>
      <primitive object={model} />
    </group>
  );
};

export default ExternalModel; 