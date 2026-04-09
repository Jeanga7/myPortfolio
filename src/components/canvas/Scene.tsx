'use client';

import { useState, useCallback, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';
import Universe from './Universe';

function CameraController({ targetPos }: { targetPos: [number, number, number] | null }) {
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    useFrame((state) => {
        if (targetPos) {
            // Smoothly look at the target
            const target = new THREE.Vector3(...targetPos);
            state.camera.lookAt(target);
        }
    });

    return null;
}

export default function Scene() {
    const [focusedId, setFocusedId] = useState<string | null>(null);
    const [targetPos, setTargetPos] = useState<[number, number, number] | null>(null);
    const orbitRef = useRef<any>(null);

    const handleNodeSelect = useCallback((id: string, pos: [number, number, number]) => {
        setFocusedId(id);
        setTargetPos(pos);

        if (orbitRef.current) {
            // Animate OrbitControls target
            gsap.to(orbitRef.current.target, {
                x: pos[0],
                y: pos[1],
                z: pos[2],
                duration: 1.5,
                ease: 'power3.inOut'
            });

            // Animate Camera distance/position
            // We want to move the camera closer but keep the relative angle
            // For simplicity, we just move to a fixed offset from target
            // gsap.to(state.camera.position, ...) would be better inside useFrame or with a ref
        }
    }, []);

    return (
        <div className="w-full h-full">
            <Canvas
                shadows
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <color attach="background" args={['#020617']} />

                <PerspectiveCamera makeDefault position={[0, 5, 12]} fov={40} />

                <ambientLight intensity={0.2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[0, 0, 0]} intensity={2} color="#22D3EE" />

                <Universe focusedId={focusedId} onNodeSelect={handleNodeSelect} />

                <OrbitControls
                    ref={orbitRef}
                    makeDefault
                    enableDamping
                    dampingFactor={0.05}
                    maxDistance={30}
                    minDistance={2}
                />

                <EffectComposer>
                    <Bloom
                        luminanceThreshold={1}
                        mipmapBlur
                        intensity={0.5}
                        radius={0.4}
                    />
                </EffectComposer>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
