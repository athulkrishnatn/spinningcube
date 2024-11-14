// Sphere.js
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Sphere = () => {
  const sphereRef = useRef();
  const [yPos, setYPos] = useState(1);
  const [yVelocity, setYVelocity] = useState(0);
  const gravity = -0.05;
  const bounceFactor = 0.8;

  useFrame(() => {
    const newY = yPos + yVelocity;
    let newVelocity = yVelocity + gravity;

    if (newY <= 0) {
      setYPos(0);
      newVelocity = -newVelocity * bounceFactor;
    } else {
      setYPos(newY);
    }

    setYVelocity(newVelocity);
  });

  return (
    <mesh ref={sphereRef} position={[0, yPos, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="yellow" metalness={0.2} roughness={0.5} />
    </mesh>
  );
};

export default Sphere;
