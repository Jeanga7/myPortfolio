import graphData from '@/lib/data/graph.json';

export interface GraphNode {
    id: string;
    title: string;
    category: string;
    level: number;
    size: number;
    description: string;
    parentId?: string;
    color?: string;
    tags?: string[];
    github?: string;
    link?: string;
    fullContent?: string[];
}

export interface PositionedGraphNode extends GraphNode {
    pos: [number, number, number];
}

export const nodes = graphData.nodes as GraphNode[];

export function getNodeChildren(nodeId: string) {
    return nodes.filter((node) => node.parentId === nodeId);
}

export function getNodeById(nodeId: string | null) {
    if (!nodeId) {
        return null;
    }
    return nodes.find((node) => node.id === nodeId) ?? null;
}

export function getDeterministicOffset(seed: string) {
    let hash = 0;
    for (let index = 0; index < seed.length; index += 1) {
        hash = (hash * 31 + seed.charCodeAt(index)) | 0;
    }
    return ((Math.abs(hash) % 1000) / 1000 - 0.5) * 1.5;
}

export function getGraphLayout() {
    const nodesMap: Record<string, PositionedGraphNode> = {};
    const orbitNodes = nodes.filter((node) => node.level === 2);

    nodes.forEach((node) => {
        if (node.level === 1) {
            nodesMap[node.id] = { ...node, pos: [0, 0, 0] };
        } else if (node.level === 2) {
            const nodeIdx = orbitNodes.indexOf(node);
            const angle = (nodeIdx / orbitNodes.length) * Math.PI * 2;
            const radius = 5;

            nodesMap[node.id] = {
                ...node,
                pos: [Math.cos(angle) * radius, 0, Math.sin(angle) * radius],
            };
        }
    });

    nodes.forEach((node) => {
        if (node.level !== 3 || !node.parentId) {
            return;
        }

        const parent = nodesMap[node.parentId];
        if (!parent) {
            return;
        }

        const siblingDetails = nodes.filter((sibling) => sibling.parentId === node.parentId);
        const nodeIdx = siblingDetails.indexOf(node);
        const angle = (nodeIdx / siblingDetails.length) * Math.PI * 2;
        const radius = 2;

        nodesMap[node.id] = {
            ...node,
            pos: [
                parent.pos[0] + Math.cos(angle) * radius,
                getDeterministicOffset(node.id),
                parent.pos[2] + Math.sin(angle) * radius,
            ],
        };
    });

    return Object.values(nodesMap);
}
