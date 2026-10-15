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

interface LineHandle {
    material?: THREE.Material & {
        opacity?: number;
    };
}

export default function Connection({ start, end, color = '#334155' }: ConnectionProps) {
    const lineRef = useRef<any>(null);
    const dashRef = useRef(0);

    useFrame((state, delta) => {
        if (lineRef.current?.material) {
            // Neural pulse animation: scrolling dashes
            dashRef.current -= delta * 0.5;
            lineRef.current.material.dashOffset = dashRef.current;

            // Subtle overall opacity pulse
            const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.9;
            lineRef.current.material.opacity = 0.4 * pulse;
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
            lineWidth={0.8}
            transparent
            opacity={0.4}
            dashed
            dashScale={5}
            dashSize={0.2}
            gapSize={0.1}
        />
    );
}
