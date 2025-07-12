import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
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
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const loadedModel = gltf.scene;
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(loadedModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = scale / maxDim;
        loadedModel.scale.setScalar(scaleFactor);
        loadedModel.position.sub(center.multiplyScalar(scaleFactor));
        loadedModel.position.y += 0.5; // Lift the model slightly upward
        // Rotate so nose points toward user (adjust axis if needed)
        loadedModel.rotation.y = 0; // 0 means facing forward; adjust if needed
        // Mirror the model along the Z axis
        loadedModel.scale.z *= -1;
        // Tilt the model slightly upward
        loadedModel.rotation.x = -0.2;
        setModel(loadedModel);
        setIsLoading(false);
      },
      undefined,
      (error: any) => {
        setError(error.message || 'Failed to load model');
        setIsLoading(false);
      }
    );
  }, [modelPath, scale]);

  useFrame(() => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  if (isLoading) {
    return (
      <group ref={groupRef} position={position}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#666666" />
        </mesh>
      </group>
    );
  }

  if (error || !model) {
    return (
      <group ref={groupRef} position={position}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#c53030" />
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