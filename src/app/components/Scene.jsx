"use client";

import { Environment , Text } from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
import letter3D from "./Letter3D";
import { useMemo } from "react";

export default function Scene(){
    const sceneContent = useMemo(()=>{
        return(
            <Canvas style={{background:"transparent"  , position:"absolute", zIndex:10 , pointerEvents:"none"}}    >
            <Environment preset="night"  environmentIntensity={20}/>
            <pointLight intensity={10} color={0xe7e9ea} position={[3,2.0]}/>
            <letter3D /></Canvas>)}
            , [])
        
    
    return sceneContent    }