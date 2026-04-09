'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

interface NodeProps {
    position: [number, number, number];
    label: string;
    category: string;
    size: number;
    onSelect?: () => void;
    isFocused?: boolean;
}

const DESIGN_TOKENS = {
    colors: {
        core: '#FFFFFF',
        engineer: '#22D3EE',
        builder: '#F59E0B',
        strategist: '#A855F7',
        community: '#10B981',
    },
};

export default function Node({ position, label, category, size, onSelect, isFocused }: NodeProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const shellRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    const baseColor = DESIGN_TOKENS.colors[category as keyof typeof DESIGN_TOKENS.colors] || '#94A3B8';

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (meshRef.current) {
            meshRef.current.position.y = Math.sin(t * 1.5 + position[0]) * 0.05;
        }
        if (shellRef.current) {
            shellRef.current.rotation.y += 0.01;
            shellRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
        }
    });

    const scale = size * 0.25;

    return (
        <group position={position} onClick={(e) => { e.stopPropagation(); onSelect?.(); }}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere ref={meshRef} args={[scale * 0.4, 32, 32]}>
                    <meshStandardMaterial
                        color={baseColor}
                        emissive={baseColor}
                        emissiveIntensity={hovered || isFocused ? 5 : 2}
                    />
                </Sphere>

                <Sphere ref={shellRef} args={[scale, 32, 32]}>
                    <meshPhysicalMaterial
                        transparent
                        opacity={0.15}
                        color={baseColor}
                        metalness={0.9}
                        roughness={0.1}
                        clearcoat={1}
                        wireframe={hovered}
                    />
                </Sphere>
            </Float>

            <Text
                position={[0, scale + 0.4, 0]}
                fontSize={0.18}
                color="white"
                maxWidth={2}
                textAlign="center"
                anchorX="center"
                anchorY="middle"
                visible={hovered || isFocused || size > 2}
            >
                {label.toUpperCase()}
            </Text>

            {hovered && (
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
                    <ringGeometry args={[scale * 1.2, scale * 1.3, 32]} />
                    <meshBasicMaterial color={baseColor} transparent opacity={0.5} side={THREE.DoubleSide} />
                </mesh>
            )}

            <mesh
                visible={false}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <sphereGeometry args={[scale * 2]} />
            </mesh>
        </group>
    );
}
