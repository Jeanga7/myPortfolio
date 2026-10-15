'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';

// Inline SVGs to avoid lucide-react resolution issues
const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
);

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20" /><path d="M2 12h20" /></svg>
);

export default function InfoPanel() {
    const isPanelOpen = useStore((state) => state.isPanelOpen);
    const selectedNodeData = useStore((state) => state.selectedNodeData);
    const setIsPanelOpen = useStore((state) => state.setIsPanelOpen);
    const setActiveOrbit = useStore((state) => state.setActiveOrbit);

    const handleClose = () => {
        setIsPanelOpen(false);
        setActiveOrbit(null);
    };

    const baseColor = selectedNodeData?.color || '#00F2FF';

    return (
        <AnimatePresence>
            {isPanelOpen && selectedNodeData && (
                <motion.aside
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed right-0 top-0 h-full w-full max-w-lg z-[100] backdrop-blur-xl bg-black/40 border-l border-white/10 text-white shadow-2xl flex flex-col"
                >
                    {/* Header */}
                    <div className="p-10 pb-6 flex justify-between items-start">
                        <div className="space-y-3">
                            <h2 className="text-5xl font-extrabold font-nunito tracking-tighter uppercase leading-none" style={{ color: baseColor, textShadow: `0 0 30px ${baseColor}44` }}>
                                {selectedNodeData.title}
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {selectedNodeData.tags && selectedNodeData.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-[10px] font-black border border-white/10 uppercase tracking-[0.2em] bg-white/5"
                                        style={{ borderColor: `${baseColor}66`, color: baseColor, boxShadow: `0 0 15px ${baseColor}33` }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={handleClose}
                            className="p-3 rounded-full hover:bg-white/10 transition-all group border border-transparent hover:border-white/20 shadow-lg"
                        >
                            <div className="text-white/40 group-hover:text-white transition-colors">
                                <XIcon />
                            </div>
                        </button>
                    </div>

                    {/* Content Scroll Area */}
                    <div className="flex-1 overflow-y-auto px-10 py-6 space-y-10 font-lato text-white/70 leading-relaxed scrollbar-hide">
                        <section className="space-y-4">
                            <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-black">Architecture & Concept</h3>
                            <p className="text-xl font-light leading-relaxed">
                                {selectedNodeData.description || "Exploration en cours. Les détails de cette compétence/projet seront bientôt dévoilés dans l'éther."}
                            </p>
                        </section>

                        {selectedNodeData.fullContent && (
                            <section className="space-y-6">
                                <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-black">Points Forts</h3>
                                <ul className="space-y-5">
                                    {selectedNodeData.fullContent.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-4 group">
                                            <div className="mt-2 w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] shrink-0" style={{ backgroundColor: baseColor, color: baseColor }} />
                                            <span className="text-lg group-hover:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    {/* Footer Actions */}
                    <div className="p-10 pt-6 border-t border-white/5 flex gap-5 mt-auto bg-black/20">
                        {selectedNodeData.github && (
                            <a
                                href={selectedNodeData.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 transition-all border border-white/10 relative overflow-hidden group shadow-xl"
                            >
                                <GlobeIcon />
                                Codebase
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            </a>
                        )}
                        {selectedNodeData.link && (
                            <a
                                href={selectedNodeData.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-3 bg-white text-black hover:scale-[1.03] active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                            >
                                <ExternalLinkIcon />
                                Live View
                            </a>
                        )}
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    );
}
