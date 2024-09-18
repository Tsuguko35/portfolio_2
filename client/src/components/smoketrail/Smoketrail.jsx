import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Smoketrail = () => {
  const pointsRef = useRef();
  const [mousePosition, setMousePosition] = useState(new THREE.Vector3());
  const particles = useRef([]);

  // Handle mouse move event
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition(
        new THREE.Vector3(
          (e.clientX / window.innerWidth) * 2 - 1,
          -(e.clientY / window.innerHeight) * 2 + 1,
          0
        )
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation loop
  useFrame(() => {
    if (pointsRef.current) {
      particles.current.push(mousePosition.clone());

      // Limit the number of particles
      if (particles.current.length > 100) particles.current.shift();

      const positions = pointsRef.current.geometry.attributes.position.array;

      particles.current.forEach((particle, i) => {
        positions[i * 3] = particle.x;
        positions[i * 3 + 1] = particle.y;
        positions[i * 3 + 2] = particle.z;

        // Slowly move particles up like smoke and fade them
        particle.y += 0.02;
        particle.z -= 0.02;
      });

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(300)}
          count={100}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="white" transparent opacity={0.6} />
    </points>
  );
};

export default Smoketrail;
