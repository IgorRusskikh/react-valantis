"use client";

import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

import CardGrid from '@/components/CardGrid/CardGrid';
import Input from '@/components/Input/Input';
import Select from '@/components/Select/Select';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
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
