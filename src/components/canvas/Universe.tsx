'use client';

import { useMemo } from 'react';
import Node from './Node';
import Connection from './Connection';
import { getNodeChildren, getGraphLayout, type PositionedGraphNode } from '@/lib/graph';
import { useStore } from '@/lib/store';

interface UniverseProps {
    selectedNodeId: string | null;
    onNodeSelect: (node: PositionedGraphNode) => void;
}

interface LinkData {
    id: string;
    start: [number, number, number];
    end: [number, number, number];
    color: string;
}

export default function Universe({ selectedNodeId, onNodeSelect }: UniverseProps) {
    const activeOrbit = useStore((state) => state.activeOrbit);
    const setActiveOrbit = useStore((state) => state.setActiveOrbit);
    const cameraStatus = useStore((state) => state.cameraStatus);

    const processedNodes = useMemo(() => getGraphLayout(), []);

    const links = useMemo(() => {
        const lines: LinkData[] = [];
        const core = processedNodes.find((node: PositionedGraphNode) => node.level === 1);

        if (!core) {
            return lines;
        }

        processedNodes.forEach((node: PositionedGraphNode) => {
            if (node.parentId === core.id) {
                lines.push({
                    id: `l-${node.id}`,
                    start: core.pos,
                    end: node.pos,
                    color: node.color ?? '#334155',
                });
                return;
            }

            if (node.parentId && node.parentId === activeOrbit) {
                const parent = processedNodes.find((candidate: PositionedGraphNode) => candidate.id === node.parentId);
                if (parent) {
                    lines.push({
                        id: `l-${node.id}`,
                        start: parent.pos,
                        end: node.pos,
                        color: node.color ?? '#334155',
                    });
                }
            }
        });

        return lines;
    }, [processedNodes, activeOrbit]);

    return (
        <group>
            {links.map((link) => (
                <Connection key={link.id} start={link.start} end={link.end} color={link.color} />
            ))}

            {processedNodes.map((node: PositionedGraphNode) => {
                const isVisible = node.level < 3 || node.parentId === activeOrbit;
                if (!isVisible) {
                    return null;
                }

                const handleClick = () => {
                    if (cameraStatus === 'flying') {
                        return;
                    }

                    onNodeSelect(node);
                };

                return (
                    <Node
                        key={node.id}
                        position={node.pos}
                        data={node}
                        isActive={
                            selectedNodeId === node.id ||
                            activeOrbit === node.id ||
                            (node.level === 1 && !activeOrbit)
                        }
                        onClick={handleClick}
                    />
                );
            })}
        </group>
    );
}
