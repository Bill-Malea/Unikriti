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
    <div style={{ position: "relative", width: "350", height: "300px" }}>
      <Canvas camera={{ fov: 30 }} gl={{ preserveDrawingBuffer: true }}>
        <ModelBackdrop backdropcolor={backdropcolor} />
        <OrbitControls autoRotate enableZoom={false} />
        <ambientLight intensity={0.5} />
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
