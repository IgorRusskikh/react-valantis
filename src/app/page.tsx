"use client";

import CardGrid from '@/components/CardGrid/CardGrid';
import OptionsPanel from '@/components/OptionsPanel/OptionsPanel';

export default function Home() {
  return (
    <div>
      <div>
        <OptionsPanel />
      </div>
      <div className="flex justify-center w-full px-16 pt-10">
        <CardGrid />
      </div>
    </div>
  );
}
