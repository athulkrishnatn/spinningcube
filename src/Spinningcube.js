// Cube.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Cube = () => {
  const cubeRef = useRef();

  // Rotate the cube every frame
  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const SpinningCube = () => {
  return (
    <Canvas>
      <ambientLight intensity={3} />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
};

export default SpinningCube;
