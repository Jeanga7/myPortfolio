'use client';

import { motion } from 'framer-motion';

export default function HUD() {
    return (
        <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-between p-8 text-white font-mono">
            <div className="flex justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-black/50 p-4 border border-blue-500/30 rounded"
                >
                    <div className="text-sm text-blue-400">SYSTEM.STATUS</div>
                    <div className="text-xl">ONLINE</div>
                </motion.div>

                <div className="flex gap-4 pointer-events-auto">
                    <button className="px-4 py-2 bg-blue-600/20 border border-blue-500 rounded hover:bg-blue-600/40 transition">CV</button>
                    <button className="px-4 py-2 bg-blue-600/20 border border-blue-500 rounded hover:bg-blue-600/40 transition">CONTACT</button>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '45%' }}
                        className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
                    />
                </div>
            </div>
        </div>
    );
}
