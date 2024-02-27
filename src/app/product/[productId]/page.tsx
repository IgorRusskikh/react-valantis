"use client";

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

interface DetailProduct {
  id: string;
  title: string;
  price: number;
  brand?: string;
  onClose: () => void;
}

const DetailProduct: React.FC<DetailProduct> = ({
  id,
  title,
  price,
  brand,
}) => {
  const router = useRouter();

  const onClose = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="flex justify-center w-full h-[100vh] bg-slate-100 z-50">
      {/* CLOSE MODAL WINDOW BUTTON */}
      <div className="absolute top-5 right-5 cursor-pointer" onClick={onClose}>
        <IoMdClose size={48} />
      </div>
      {/* PRODUCT DATA BLOCK */}
      <div className="flex justify-between w-full px-80 py-12 h-fit min-h-[500px]">
        <div className="w-fit mr-16">
          <div className="w-[500px] h-[500px] bg-slate-300 animate-pulse border rounded-xl"></div>
        </div>
        <div className="w-full flex flex-col bg-white rounded-xl px-5 py-5">
          <h1 className="text-4xl text-red-500">{title}</h1>
          <div className="flex flex-col mt-16 px-3 select-none">
            {/* PRICE AND ADD TO CART */}
            <div className="flex justify-between items-center">
              <h2 className="text-3xl">
                Цена: <span className="text-red-500 ml-2">{price}$</span>
              </h2>
              <div className="flex justify-center items-center bg-red-500 rounded-xl px-10 py-4 text-xl text-white cursor-pointer w-fit">
                Добавить в корзину{" "}
                <span>
                  <CiShoppingCart size={25} className="ml-2" />
                </span>
              </div>
            </div>
            <div className="mt-10">
              {/* PRODUCT BRAND */}
              {brand && (
                <div>
                  <h2 className="text-2xl">
                    Бренд:
                    <span className="text-red-500 cursor-pointer ml-2">
                      Nike
                    </span>
                  </h2>
                </div>
              )}
              {/* PRODUCT DESCRIPTION */}
              <div className="mt-5">
                <h2 className="text-2xl">Описание:</h2>
                <p className="text-gray-700">
                  Золотое кольцо с бриллиантами — это кольцо, которое
                  представляет собой красивый, красивый и красивый кольцо.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
