import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color="#C9A76C"
          transparent
          opacity={0.15}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function CrystalOrb() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 5]} intensity={0.6} />
        <pointLight position={[-2, -2, -5]} intensity={0.3} color="#C9A76C" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}