'use client';

import dynamic from 'next/dynamic';
import HUD from '@/components/ui/HUD';

const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center bg-slate-900 text-slate-400 font-mono">
      <div className="animate-pulse">INITIALIZING_SPACE_STATION...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative w-screen h-screen bg-[#05070A] overflow-hidden">
      <Scene />
      <HUD />
    </main>
  );
}
