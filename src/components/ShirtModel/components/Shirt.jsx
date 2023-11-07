import React from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
const Shirt = ({ color }) => {
  const { nodes, materials } = useGLTF("/shirt3d.glb");

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, "#000000", 0.25, delta)
  );

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughnes={1}
        dispose={null}
      >
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};

export default Shirt;
