"use client";

import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

import CardGrid from '@/components/CardGrid/CardGrid';
import DetailProduct from '@/components/DetailProduct/DetailProduct';
import Input from '@/components/Input/Input';
import Select from '@/components/Select/Select';
import useDetailProduct from '@/hooks/useDetailProduct';

export default function Home() {
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetcher({
  //       action: "get_ids",
  //       params: { offset: 0, limit: 10 },
  //     });

  //     const item = await fetcher({
  //       action: "get_items",
  //       params: {
  //         ids: ["1789ecf3-f81c-4f49-ada2-83804dcc74b0"],
  //       },
  //     });

  //     console.log(data);
  //     console.log(item);
  //   };

  //   getData();
  // }, []);

  const productDetail = useDetailProduct();

  return (
    <div>
      <div className="flex justify-center">
        {productDetail.isOpen && <DetailProduct />}
        <Select
          label="Сортировка"
          options={["Price", "1Price", "2Price", "3Price"]}
        />
        <Input placeholder="Поиск" icon={HiOutlineMagnifyingGlass} />
      </div>
      <div className="flex justify-center w-full px-16 pt-16">
        <CardGrid />
      </div>
    </div>
  );
}
