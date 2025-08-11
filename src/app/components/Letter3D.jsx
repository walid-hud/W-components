"use client";
import outfitFont from "../../../public/fonts/Outfit SemiBold_Regular.json"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { extend, useFrame, useThree } from "@react-three/fiber"
import { MeshTransmissionMaterial } from "@react-three/drei"
import { useRef, useEffect, useState } from "react";
import { Vector3 } from "three";

extend({ TextGeometry });
const font = new FontLoader().parse(outfitFont);

const materialSettings = {
  thickness: 0.5, roughness: 0, transmission: 1, ior: 0.6, backside: true, transparent: true,
  opacity: 0.8, clearcoat: 0.6, clearcoatRoughness: 0.5, chromaticAberration: 1, anisotropicBlur: 0.4, distortion: 0.5
};

const deviceSwitch = (width) => {
  if (width < 480) return [1, -2.8, -0.4];
  if (width < 768) return [1, -1.8, 0];
  return [4, 2, 0];
};

export default function Letter3D({text, isAnimated , }) {
  const letterRef = useRef();
  const { camera , gl  } = useThree();
  const [position, setPosition] = useState(deviceSwitch(typeof window !== "undefined" ? window.innerWidth : 1024));
  const angle = 0.01;

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setPosition(deviceSwitch(window.innerWidth));
      gl.setPixelRatio(window.devicePixelRatio)
      letterRef.current.geometry.center();  
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Center geometry and set camera lookAt once
  useEffect(() => {
    if (letterRef.current) {
      letterRef.current.geometry.center();
      camera.lookAt(new Vector3(1, -0.5, 0));
    }
  }, [camera]);

  useFrame(() => {
    if (letterRef.current && isAnimated) {
      letterRef.current.rotation.y += angle;
      letterRef.current.geometry.center();  

    }
  });

  return (
    <mesh position={position} ref={letterRef}>
      <MeshTransmissionMaterial {...materialSettings} />
      <textGeometry args={[text, { font, depth: 0.5, size: 2, height: 1 }]} />
    </mesh>
  );
}