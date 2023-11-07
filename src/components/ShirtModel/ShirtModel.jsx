import React, { useState, useRef } from "react";
import ModelBackdrop from "./components/ModelBackdrop";
import { Environment, Center, Html, OrbitControls } from "@react-three/drei";
import ViewCamera from "./components/ViewCamera";
import { Canvas, useFrame } from "@react-three/fiber";
import Shirt from "./components/Shirt";

const ShirtModel = ({ shirtColor, backdropcolor }) => {
  const ShirtRotator = () => {
    const shirtRef = useRef();

    useFrame(() => {
      if (shirtRef.current) {
        shirtRef.current.rotation.y += 0.005;
      }
    });

    return null;
  };
  return (
    <div style={{ position: "relative", width: "350", height: "500px" }}>
      <Canvas
        camera={{ fov: 35 }}
        gl={{ preserveDrawingBuffer: true }}
        className={backdropcolor}
      >
        <ModelBackdrop backdropcolor={backdropcolor} />
        <OrbitControls
          minAzimuthAngle={-Math.PI / 10}
          maxAzimuthAngle={-Math.PI / 10}
          minPolarAngle={Math.PI / 10}
          maxPolarAngle={Math.PI - Math.PI / 10}
        />
        <ambientLight intensity={0.7} />
        <Environment preset="sunset" />
        <ViewCamera>
          <Center>
            <ShirtRotator />
            <Shirt color={shirtColor} />
          </Center>
        </ViewCamera>
      </Canvas>
    </div>
  );
};

export default ShirtModel;
