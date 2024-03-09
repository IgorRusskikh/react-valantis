"use client";

import Image from 'next/image';
import { CiShoppingCart } from 'react-icons/ci';

import { ProductCard } from '@/types/customTypes';

const Card: React.FC<ProductCard> = ({ id, title, price, brand, onClick }) => {
  return (
    <div className="flex flex-col px-2 py-2 w-[320px] h-[450px] border rounded-xl select-none shadow-lg">
      {/* CARD IMAGE */}
      <div
        className="w-full h-full rounded-xl overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <Image
          priority={true}
          src="/sergi.jpg"
          width={302}
          height={302}
          alt=""
          loading="eager"
        />
      </div>
      {/* PRODUCT DESCRIPTION */}
      <div className="flex flex-col pl-1 mb-1">
        {/* PRODUCT TITLE */}
        <div
          className="mt-3 text-lg transition-all duration-300 hover:text-red-500 cursor-pointer"
          onClick={onClick}
        >
          {title && title.length > 40 ? title.slice(0, 40) + "..." : title}
        </div>
        <div className="flex justify-between items-center mt-2">
          {/* PRODUCT PRICE */}
          <div className="font-medium text-2xl text-red-500">{price}$</div>
          {/* ADD TO CART BUTTON */}
          <button
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <div className="flex justify-center items-center px-2 py-2 bg-red-500 text-white rounded-lg text-lg max-h-[44px] h-max-[44px] transition-all duration-300 hover:bg-white hover:text-red-500 border border-red-500">
              В корзину
              <span className="ml-2">
                <CiShoppingCart size={25} />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
