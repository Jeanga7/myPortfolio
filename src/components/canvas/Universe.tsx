'use client';

import { useMemo } from 'react';
import Node from './Node';
import Connection from './Connection';
import graphData from '@/lib/data/graph.json';

interface UniverseProps {
    focusedId: string | null;
    onNodeSelect: (id: string, pos: [number, number, number]) => void;
}

export default function Universe({ focusedId, onNodeSelect }: UniverseProps) {
    const processedNodes = useMemo(() => {
        return graphData.nodes.map((node, index) => {
            if (node.id === 'jg') {
                return { ...node, pos: [0, 0, 0] as [number, number, number] };
            }

            // Shell-based positioning
            const angle = (index / (graphData.nodes.length - 1)) * Math.PI * 2;
            const radius = node.category === 'core' ? 3 : 5 + Math.random();
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = (Math.random() - 0.5) * 2;

            return {
                ...node,
                pos: [x, y, z] as [number, number, number]
            };
        });
    }, []);

    const links = useMemo(() => {
        const lines = [];
        const coreNode = processedNodes.find(n => n.id === 'jg');
        if (!coreNode) return [];

        for (const node of processedNodes) {
            if (node.id === 'jg') continue;
            lines.push({
                id: `link-${node.id}`,
                start: coreNode.pos,
                end: node.pos,
                color: node.category === 'engineer' ? '#22D3EE' : '#334155'
            });
        }
        return lines;
    }, [processedNodes]);

    return (
        <group>
            {/* Connections Layer */}
            {links.map(link => (
                <Connection key={link.id} start={link.start} end={link.end} color={link.color} />
            ))}

            {/* Nodes Layer */}
            {processedNodes.map((node) => (
                <Node
                    key={node.id}
                    position={node.pos}
                    label={node.title}
                    category={node.category}
                    size={node.size}
                    isFocused={focusedId === node.id}
                    onSelect={() => onNodeSelect(node.id, node.pos)}
                />
            ))}
        </group>
    );
}
