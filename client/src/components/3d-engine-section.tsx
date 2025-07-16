import { useEffect, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import ExternalModel from './3d-engine-model';
import { NewsCarousel } from './news-carousel';
import { ProjectsCarousel } from './projects-carousel';
import { useMobile } from '@/hooks/use-mobile';

interface Engine3DSectionProps {
  className?: string;
}

export function Engine3DSection({ className = "" }: Engine3DSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { isMobile, isTablet, isLowPerformance, deviceType } = useMobile();

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Responsive camera and performance settings
  const cameraSettings = useMemo(() => {
    if (isMobile) {
      return {
        position: [0, 1.2, 1.8] as [number, number, number],
        fov: 60,
        near: 0.1,
        far: 1000
      };
    } else if (isTablet) {
      return {
        position: [0, 1.4, 2.0] as [number, number, number],
        fov: 55,
        near: 0.1,
        far: 1000
      };
    } else {
      return {
        position: [0, 1.5, 2.2] as [number, number, number],
        fov: 50,
        near: 0.1,
        far: 1000
      };
    }
  }, [isMobile, isTablet]);

  // Performance optimizations based on device
  const performanceSettings = useMemo(() => {
    if (isMobile || isLowPerformance) {
      return {
        shadows: false,
        dpr: [1, 2] as [number, number],
        gl: { antialias: false, powerPreference: 'high-performance' as const }
      };
    } else if (isTablet) {
      return {
        shadows: true,
        dpr: [1, 2] as [number, number],
        gl: { antialias: true, powerPreference: 'high-performance' as const }
      };
    } else {
      return {
        shadows: true,
        dpr: [1, 2] as [number, number],
        gl: { antialias: true, powerPreference: 'high-performance' as const }
      };
    }
  }, [isMobile, isTablet, isLowPerformance]);

  return (
    <section className={`relative w-full h-screen overflow-hidden three-canvas-container bg-gradient-professional ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/20 via-primary-blue/10 to-secondary-gold/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(214, 158, 46, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(66, 153, 225, 0.1) 0%, transparent 50%)`,
          backgroundSize: '100% 100%'
        }}></div>
      </div>

      <Canvas 
        shadows={performanceSettings.shadows}
        dpr={performanceSettings.dpr}
        gl={performanceSettings.gl}
        camera={cameraSettings}
        style={{ zIndex: 1 }}
        performance={{ min: 0.5 }}
      >
        {/* Adaptive performance features */}
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        
        {/* Lighting optimized for different devices */}
        <ambientLight intensity={isMobile ? 0.8 : 0.7} />
        <directionalLight 
          position={[5, 10, 7]} 
          intensity={isMobile ? 1.0 : 1.2} 
          castShadow={performanceSettings.shadows}
          shadow-mapSize={isMobile ? 512 : 1024}
          color="#4299e1" // Primary light blue
        />
        
        {/* Additional fill light for better visibility */}
        <directionalLight 
          position={[-5, 5, -5]} 
          intensity={0.3} 
          color="#d69e2e" // Secondary gold
        />
        
        {/* Responsive camera */}
        <PerspectiveCamera 
          makeDefault 
          position={cameraSettings.position} 
          fov={cameraSettings.fov}
          near={cameraSettings.near}
          far={cameraSettings.far}
        />
        
        {/* Environment optimized for performance */}
        <Environment 
          preset={isMobile ? "apartment" : "city"} 
          background={false}
        />
        
        {/* 3D Model with responsive settings */}
        <ExternalModel 
          modelPath="/models/scene.gltf" 
          scale={isMobile ? 2.5 : isTablet ? 2.8 : 3} 
          autoRotate={!isMobile}
          rotationSpeed={isMobile ? 0.003 : 0.005}
        />
        
        {/* Responsive controls */}
        <OrbitControls 
          enablePan={!isMobile}
          enableZoom={true}
          enableRotate={true}
          maxDistance={isMobile ? 3 : 5}
          minDistance={isMobile ? 1.5 : 2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
          dampingFactor={0.05}
          enableDamping={true}
        />
      </Canvas>
      
      {/* Carousels positioned above the 3D canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="pointer-events-auto animate-slide-in-left">
          <NewsCarousel />
        </div>
        <div className="pointer-events-auto animate-slide-in-right">
          <ProjectsCarousel />
        </div>
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary-navy/20 via-transparent to-transparent"></div>
    </section>
  );
} 