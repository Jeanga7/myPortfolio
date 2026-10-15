import { create } from 'zustand';
import type { GraphNode } from '@/lib/graph';

type CameraStatus = 'idle' | 'flying';

interface AppState {
    activeOrbit: string | null;
    setActiveOrbit: (id: string | null) => void;
    cameraStatus: CameraStatus;
    setCameraStatus: (status: CameraStatus) => void;
    selectedNodeData: GraphNode | null;
    setSelectedNodeData: (data: GraphNode | null) => void;
    isPanelOpen: boolean;
    setIsPanelOpen: (open: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
    activeOrbit: null,
    setActiveOrbit: (id) => set({ activeOrbit: id }),
    cameraStatus: 'idle',
    setCameraStatus: (status) => set({ cameraStatus: status }),
    selectedNodeData: null,
    setSelectedNodeData: (data) => set({ selectedNodeData: data }),
    isPanelOpen: false,
    setIsPanelOpen: (open) => set({ isPanelOpen: open }),
}));
