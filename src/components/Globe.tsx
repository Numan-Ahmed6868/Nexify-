import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "motion/react";

export default function Globe({ scrollYProgress }: { scrollYProgress: any }) {
  const globeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Slow rotation
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  // Parallax effects based on scroll
  // We'll use the scrollYProgress to tilt and zoom
  // Since we are inside a Canvas, we can't directly use motion.div style on Three objects easily without some mapping
  // But we can use useFrame to read the value if we pass it as a motion value
  
  useFrame(() => {
    if (groupRef.current) {
      const scroll = scrollYProgress.get();
      // Tilt
      groupRef.current.rotation.x = scroll * 0.5;
      // Zoom (scale)
      const scale = 1 + scroll * 0.2;
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={globeRef} args={[1, 64, 64]}>
          <meshStandardMaterial
            color="#00f2ff"
            wireframe
            transparent
            opacity={0.3}
            emissive="#00f2ff"
            emissiveIntensity={0.5}
          />
        </Sphere>
        
        {/* Inner solid sphere for depth */}
        <Sphere args={[0.98, 32, 32]}>
          <meshStandardMaterial
            color="#0a0a0a"
            transparent
            opacity={0.8}
          />
        </Sphere>

        {/* Glow effect using a slightly larger sphere with additive blending */}
        <Sphere args={[1.1, 32, 32]}>
          <meshBasicMaterial
            color="#00f2ff"
            transparent
            opacity={0.05}
            blending={THREE.AdditiveBlending}
          />
        </Sphere>
      </Float>

      {/* Atmospheric particles around the globe */}
      {[...Array(50)].map((_, i) => (
        <Particle key={i} />
      ))}
    </group>
  );
}

function Particle() {
  const ref = useRef<THREE.Mesh>(null);
  const [position, speed, size] = useMemo(() => {
    const pos = new THREE.Vector3(
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4
    );
    return [pos, Math.random() * 0.01, Math.random() * 0.02];
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y += speed;
      if (ref.current.position.y > 2) ref.current.position.y = -2;
      ref.current.rotation.x += 0.01;
      ref.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial color="#00f2ff" transparent opacity={0.4} />
    </mesh>
  );
}
