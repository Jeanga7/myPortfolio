'use client';

import { useState } from 'react';

export default function Terminal() {
    const [input, setInput] = useState('');

    return (
        <div className="fixed bottom-8 left-8 z-20 pointer-events-auto">
            <div className="bg-black/80 border border-blue-500/50 p-4 rounded-lg w-80 font-mono shadow-xl">
                <div className="flex items-center gap-2 mb-2 text-xs text-blue-400">
                    <span className="animate-pulse">●</span> SEARCH_NODE_
                </div>
                <div className="flex gap-2">
                    <span className="text-blue-500">{'>'}</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="bg-transparent border-none outline-none text-white w-full"
                        placeholder="Type 'Rust', 'WebGL'..."
                    />
                </div>
            </div>
        </div>
    );
}
