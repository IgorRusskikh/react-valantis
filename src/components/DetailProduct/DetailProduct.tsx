import { CiShoppingCart } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

import useDetailProduct from '@/hooks/useDetailProduct';

const DetailProduct = () => {
  const detailProductModal = useDetailProduct();

  return (
    <div className="fixed flex justify-center w-full h-full bg-slate-100 z-50">
      <div
        className="absolute top-5 right-5 cursor-pointer"
        onClick={detailProductModal.onClose}
      >
        <IoMdClose size={48} />
      </div>
      <div className="flex justify-between w-full px-80 py-12">
        <div className="w-fit mr-16">
          <div className="w-[500px] h-[500px] bg-slate-300 animate-pulse border rounded-xl"></div>
        </div>
        <div className="w-full flex flex-col bg-white rounded-xl px-5 py-5">
          <h1 className="text-4xl text-red-500">
            Золотое кольцо с бриллиантами
          </h1>
          <div className="flex flex-col mt-16 px-3 select-none">
            <div className="flex justify-between">
              <h2 className="text-3xl">
                Цена: <span className="text-red-500 ml-2">16500.56$</span>
              </h2>
              <div className="flex justify-center items-center bg-red-500 rounded-xl px-10 py-4 text-xl text-white cursor-pointer w-fit">
                Добавить в корзину{" "}
                <span>
                  <CiShoppingCart size={25} className="ml-2" />
                </span>
              </div>
            </div>
            <div className="mt-10">
              <div>
                <h2 className="text-2xl">
                  Бренд:
                  <span className="text-red-500 cursor-pointer ml-2s">
                    Nike
                  </span>
                </h2>
              </div>
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
