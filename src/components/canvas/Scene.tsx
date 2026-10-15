'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls, Environment, Lightformer, PerspectiveCamera } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import Universe from './Universe';
import InfoPanel from '@/components/ui/InfoPanel';
import { getNodeChildren, getGraphLayout, type PositionedGraphNode } from '@/lib/graph';
import { useStore } from '@/lib/store';

const DEFAULT_CAMERA_POSITION: [number, number, number] = [0, 2, 10];
const DEFAULT_CAMERA_TARGET: [number, number, number] = [0, 0, 0];

export default function Scene() {
    const activeOrbit = useStore((state) => state.activeOrbit);
    const setActiveOrbit = useStore((state) => state.setActiveOrbit);
    const setCameraStatus = useStore((state) => state.setCameraStatus);
    const setSelectedNodeData = useStore((state) => state.setSelectedNodeData);
    const setIsPanelOpen = useStore((state) => state.setIsPanelOpen);
    const selectedNodeData = useStore((state) => state.selectedNodeData);

    const cameraControlsRef = useRef<CameraControls>(null);
    const positionedNodes = useMemo(() => getGraphLayout(), []);

    const handleNodeSelect = useCallback((node: PositionedGraphNode) => {
        // Task 3: Handle node clicks to open the InfoPanel for detail nodes
        if (node.level === 3) {
            setSelectedNodeData(node);
            setIsPanelOpen(true);
            if (node.parentId && node.parentId !== activeOrbit) {
                setActiveOrbit(node.parentId);
            }
            return;
        }

        // Handle level 2 nodes that might be terminal
        if (node.level === 2 && getNodeChildren(node.id).length === 0) {
            setSelectedNodeData({
                ...node,
                description: `${node.description} (Cette section sera bientôt complétée avec plus de détails).`,
            });
            setIsPanelOpen(true);
        } else {
            // Otherwise, close panel if shifting between main orbits
            setIsPanelOpen(false);
            setSelectedNodeData(null);
        }
    }, [activeOrbit, setActiveOrbit, setSelectedNodeData, setIsPanelOpen]);

    const handleBackgroundClick = useCallback(() => {
        setIsPanelOpen(false);
        setActiveOrbit(null);
    }, [setActiveOrbit, setIsPanelOpen]);

    useEffect(() => {
        const controls = cameraControlsRef.current;
        if (!controls) return;

        let cancelled = false;
        const targetNode = positionedNodes.find((n: PositionedGraphNode) => n.id === activeOrbit) ?? null;

        const moveCamera = async () => {
            setCameraStatus('flying');
            if (targetNode) {
                await controls.setLookAt(
                    targetNode.pos[0], targetNode.pos[1] + 2, targetNode.pos[2] + 5,
                    targetNode.pos[0], targetNode.pos[1], targetNode.pos[2],
                    true
                );
            } else {
                await controls.setLookAt(
                    DEFAULT_CAMERA_POSITION[0], DEFAULT_CAMERA_POSITION[1], DEFAULT_CAMERA_POSITION[2],
                    DEFAULT_CAMERA_TARGET[0], DEFAULT_CAMERA_TARGET[1], DEFAULT_CAMERA_TARGET[2],
                    true
                );
            }
            if (!cancelled) setCameraStatus('idle');
        };

        void moveCamera();
        return () => { cancelled = true; };
    }, [activeOrbit, positionedNodes, setCameraStatus]);

    return (
        <div className="w-full h-full relative">
            <Canvas
                shadows
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                onPointerMissed={handleBackgroundClick}
            >
                <color attach="background" args={['#05070A']} />

                <PerspectiveCamera makeDefault position={DEFAULT_CAMERA_POSITION} fov={40} />
                <CameraControls ref={cameraControlsRef} makeDefault smoothTime={0.2} />

                <ambientLight intensity={0.2} />
                <pointLight position={[0, 0, 0]} intensity={1} color="#FF007F" />

                <Universe
                    selectedNodeId={selectedNodeData?.id ?? null}
                    onNodeSelect={handleNodeSelect}
                />

                <EffectComposer>
                    <Bloom luminanceThreshold={1} mipmapBlur intensity={0.4} radius={0.4} />
                </EffectComposer>

                <Environment resolution={256}>
                    <group rotation={[-Math.PI / 4, 1, 0]}>
                        <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                        <Lightformer form="ring" intensity={2} rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[10, 10, 1]} />
                        <Lightformer form="rect" intensity={2} rotation-y={Math.PI / 2} position={[10, 10, 10]} scale={[20, 20, 1]} />
                    </group>
                </Environment>
            </Canvas>

            {/* Task 4: CSS Vignette and Dynamic HUD */}
            <div className="vignette" />
            <InfoPanel />
        </div>
    );
}
