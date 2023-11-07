import React, { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const ModelBackdrop = ({ backdropcolor }) => {
  return (
    <AccumulativeShadows
      color={backdropcolor}
      position={[0, 0, -0.5]}
      temporal
      frames={60}
      alphaTest={0.55}
      scale={30}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />

      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default ModelBackdrop;
