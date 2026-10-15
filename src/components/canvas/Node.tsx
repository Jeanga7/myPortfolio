'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import type { GraphNode } from '@/lib/graph';

interface NodeProps {
    position: [number, number, number];
    data: GraphNode;
    onClick: () => void;
    isActive: boolean;
}

export default function Node({ position, data, onClick, isActive }: NodeProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    const baseColor = data.color || '#94A3B8';
    const scale = data.size * 0.25;

    const emissiveRef = useRef(1);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (meshRef.current) {
            // Subtle floating animation
            meshRef.current.position.y = Math.sin(t * 1.5 + position[0]) * 0.05;

            // Pulsing emissive intensity
            const pulse = (Math.sin(t * 2 + position[0]) * 0.5 + 0.5) * (isActive ? 1.5 : 0.5);
            const baseIntensity = isActive ? 2 : (hovered ? 1 : 0.3);
            emissiveRef.current = baseIntensity + pulse;
        }
    });

    return (
        <group position={position} onClick={(e) => { e.stopPropagation(); onClick(); }}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere
                    ref={meshRef}
                    args={[scale, 64, 64]}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    <meshPhysicalMaterial
                        color="#05070A"
                        emissive={baseColor}
                        emissiveIntensity={emissiveRef.current}
                        metalness={0.9}
                        roughness={0.1}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </Sphere>
            </Float>

            {/* Dynamic Label using HTML for better stability and styling */}
            <Html
                position={[0, scale + 0.4, 0]}
                center
                distanceFactor={10}
                className="pointer-events-none select-none"
            >
                <div
                    className={`px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest transition-all duration-300 whitespace-nowrap
                        ${isActive || hovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90'}`}
                    style={{
                        backgroundColor: 'rgba(5, 7, 10, 0.8)',
                        borderColor: baseColor,
                        color: 'white',
                        boxShadow: isActive || hovered ? `0 0 15px ${baseColor}` : 'none',
                        textShadow: `0 0 5px ${baseColor}`,
                    }}
                >
                    {data.title.toUpperCase()}
                </div>
            </Html>
        </group>
    );
}
