"use client";

import CardGrid from '@/components/Layout/CardGrid/CardGrid';
import OptionsPanel from '@/components/Layout/OptionsPanel/OptionsPanel';
import useDetailProduct from '@/hooks/useDetailProduct';

import DetailProduct from './product/[productId]/page';

export default function Home() {
  const detailRroduct = useDetailProduct();

  return (
    <div>
      <div
        className={`
          transition-all 
          duration-200 
          ease-in-out 
          ${
            detailRroduct.state.isOpen
              ? "visible opacity-100 z-100"
              : "invisible opacity-0"
          }
        `}
      >
        <DetailProduct data={detailRroduct.state.data} />
      </div>
      <div>
        <OptionsPanel />
      </div>
      <div className="flex flex-col justify-center items-center w-full px-16 pt-10 overflow-y-hidden">
        <CardGrid />
      </div>
    </div>
  );
}
