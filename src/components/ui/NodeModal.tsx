'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function NodeModal({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: any }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm pointer-events-auto">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-gray-900 border border-blue-500/50 p-8 rounded-2xl w-full max-w-2xl text-white shadow-2xl"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-3xl font-bold text-blue-400">{data?.title || 'Node Detail'}</h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
                        </div>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed">
                                {data?.description || 'Détails du nœud en cours de chargement...'}
                            </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-800 flex justify-end">
                            <button className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition font-bold">Explorer le projet</button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
