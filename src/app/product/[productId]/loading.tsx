import { CiShoppingCart } from 'react-icons/ci';

const Loading = () => {
  return (
    <div className="flex justify-between w-full px-80 py-12 h-fit min-h-[500px]">
      <div className="w-fit mr-16">
        <div className="w-[500px] h-[500px] bg-slate-300 animate-pulse border rounded-xl"></div>
      </div>
      <div className="w-full flex flex-col bg-white rounded-xl px-5 py-5">
        <h1 className="bg-red-500 w-3/4 py-4 rounded-xl animate-pulse"></h1>
        <div className="flex flex-col mt-16 px-3 select-none">
          {/* PRICE AND ADD TO CART */}
          <div className="flex justify-between items-center">
            <div className="flex">
              <h2 className="text-3xl">Цена: </h2>
              <h2 className="bg-red-500 ml-2 w-[150px] py-2 rounded-xl animate-pulse"></h2>
            </div>
            <div className="flex justify-center items-center bg-slate-400 rounded-xl px-10 py-4 text-xl w-fit">
              Добавить в корзину{" "}
              <span>
                <CiShoppingCart size={25} className="ml-2" />
              </span>
            </div>
          </div>
          <div className="mt-10">
            {/* PRODUCT DESCRIPTION */}
            <div className="mt-5">
              <h2 className="text-2xl">Описание:</h2>
              <div className="flex flex-col gap-3">
                {[500, 300, 400, 150, 250].map((width, index) => (
                  <div
                    key={width}
                    className={`w-[${width}px] py-3 bg-slate-400 rounded-md animate-pulse`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
