import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const ViewCamera = ({ children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );

    easing.damp3(state.camera.position, [-0.9, 0, 1]);
  });

  return <group ref={group}>{children}</group>;
};

export default ViewCamera;
