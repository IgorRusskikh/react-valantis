"use client";

import CardGrid from '@/components/CardGrid/CardGrid';
import Select from '@/components/Select/Select';

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

  return (
    <div>
      <div className="flex justify-center mt-10">
        <Select label="Filter" options={["Price", "Price", "Price", "Price"]} />
      </div>
      <div className="flex justify-center w-full px-16 pt-16">
        <CardGrid />
      </div>
    </div>
  );
}
