import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import ExternalModel from './3d-engine-model';
import { NewsCarousel } from './news-carousel';
import { ProjectsCarousel } from './projects-carousel';

interface Engine3DSectionProps {
  className?: string;
}

export function Engine3DSection({ className = "" }: Engine3DSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative w-full h-screen overflow-hidden ${className}`}>
      <Canvas shadows camera={{ position: [0, 1.5, 2.2], fov: 50 }} style={{ zIndex: 1 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
        <PerspectiveCamera makeDefault position={[0, 1.5, 2.2]} fov={50} />
        <Environment preset="city" />
        <ExternalModel modelPath="/models/scene.gltf" scale={3} autoRotate={false} />
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
      
      {/* Carousels positioned above the 3D canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="pointer-events-auto">
          <NewsCarousel />
        </div>
        <div className="pointer-events-auto">
          <ProjectsCarousel />
        </div>
      </div>
      

    </section>
  );
} 