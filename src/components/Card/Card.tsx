"use client";

import { CiShoppingCart } from 'react-icons/ci';

interface CardProps {
  id: string;
  title: string;
  price: number;
  brand?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ id, title, price, brand, onClick }) => {
  return (
    <div
      className="flex flex-col px-2 py-2 w-[320px] h-[420px] border rounded-xl cursor-pointer shadow-lg transition-all scale-100"
      onClick={onClick}
    >
      {/* CARD IMAGE */}
      <div className="w w-full h-[302px] bg-slate-400 rounded-xl"></div>
      {/* PRODUCT DESCRIPTION */}
      <div className="flex flex-col pl-1 mb-1">
        {/* PRODUCT TITLE */}
        <div className="mt-3 text-lg">
          {title.length > 40 ? title.slice(0, 40) + "..." : title}
        </div>
        <div className="flex justify-between items-center mt-2">
          {/* PRODUCT PRICE */}
          <div className="font-medium text-2xl text-red-500">{price}$</div>
          {/* ADD TO CART BUTTON */}
          <button>
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
