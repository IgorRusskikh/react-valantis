import { CiShoppingCart } from 'react-icons/ci';

const Loading = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <div key={item}>
          <div className="flex flex-col px-2 py-2 w-[320px] h-[420px] border rounded-xl shadow-lg">
            <div className="w-full h-[302px] bg-slate-400 rounded-xl animate-pulse"></div>
            <div className="flex flex-col pl-1 mb-1">
              <div className="mt-3 w-full h-7 bg-red-400 rounded-md animate-pulse"></div>
              <div className="flex justify-between items-center mt-2">
                <div className="text-2xl bg-red-400 w-[100px] h-7 rounded-md animate-pulse"></div>
                <button disabled>
                  <div className="flex justify-center items-center px-2 py-2 bg-slate-400 text-white rounded-xl text-lg max-h-[44px] h-max-[44px] border border-slate-400 animate-pulse">
                    В корзину
                    <span className="ml-2">
                      <CiShoppingCart size={25} />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Loading;
