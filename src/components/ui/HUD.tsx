'use client';

import { getNodeById } from '@/lib/graph';
import { useStore } from '@/lib/store';

const categoryGlow: Record<string, string> = {
    core: '#FF007F',
    orbit: '#00F2FF',
    detail: '#FFB000',
};

export default function HUD() {
    const activeOrbit = useStore((state) => state.activeOrbit);
    const setActiveOrbit = useStore((state) => state.setActiveOrbit);

    const activeNode = getNodeById(activeOrbit);
    const glowColor = activeNode ? activeNode.color ?? categoryGlow[activeNode.category] ?? '#00F2FF' : '#00F2FF';

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-8">
            <div className="flex items-start justify-between gap-6">
                <button
                    type="button"
                    onClick={() => setActiveOrbit(null)}
                    className="pointer-events-auto cursor-pointer rounded-full border border-white/10 bg-white/5 px-5 py-3 font-nunito text-sm font-bold tracking-[0.35em] text-slate-100 backdrop-blur-xl transition hover:bg-white/10"
                >
                    JEAN-GABRIEL
                </button>

                <div className="flex-1 flex justify-center">
                    {activeNode ? (
                        <div
                            className="rounded-full border border-white/10 bg-black/25 px-5 py-3 text-center text-xs uppercase tracking-[0.35em] text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
                            style={{
                                boxShadow: `0 0 24px ${glowColor}35, inset 0 1px 0 rgba(255,255,255,0.08)`,
                                textShadow: `0 0 10px ${glowColor}99`,
                            }}
                        >
                            {`SYSTEME : ${activeNode.title}`}
                        </div>
                    ) : null}
                </div>

                <div className="pointer-events-auto flex gap-3">
                    <button
                        type="button"
                        className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-xl transition hover:bg-white/10"
                    >
                        CV
                    </button>
                    <button
                        type="button"
                        className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-xl transition hover:bg-white/10"
                    >
                        CONTACT
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                {activeOrbit ? (
                    <button
                        type="button"
                        onClick={() => setActiveOrbit(null)}
                        className="pointer-events-auto inline-flex items-center gap-3 rounded-full border border-[#00F2FF]/60 bg-black/25 px-5 py-3 text-sm uppercase tracking-[0.25em] text-cyan-400 backdrop-blur-xl transition hover:bg-[#00F2FF]/10"
                    >
                        <span aria-hidden="true">↶</span>
                        <span>Retour au coeur</span>
                    </button>
                ) : null}
            </div>
        </div>
    );
}
