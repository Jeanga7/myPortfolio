'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

interface ConnectionProps {
    start: [number, number, number];
    end: [number, number, number];
    color?: string;
}

export default function Connection({ start, end, color = '#334155' }: ConnectionProps) {
    const lineRef = useRef<any>(null);

    useFrame((state) => {
        if (lineRef.current) {
            // Subtle pulsing effect on opacity or dash offset
            const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.2 + 0.8;
            lineRef.current.material.opacity = 0.3 * pulse;
        }
    });

    const points = useMemo(() => [
        new THREE.Vector3(...start),
        new THREE.Vector3(...end)
    ], [start, end]);

    return (
        <Line
            ref={lineRef}
            points={points}
            color={color}
            lineWidth={0.5}
            transparent
            opacity={0.3}
        />
    );
}
