import { useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

import { useSorting } from '@/hooks/customHooks';
import useFilter from '@/hooks/useFilter';

import Input from '../../Input/Input';
import Select from '../../Select/Select';

const OptionsPanel = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const sort = useSorting();
  const filter = useFilter();

  return (
    <div className="flex justify-between mx-28 px-10 py-5 border rounded-xl mt-10 shadow-lg">
      <div className="flex gap-6">
        <Select
          label={sort.sortBy?.label || "Сортировка"}
          options={[
            {
              label: "Сортировка",
              value: null,
            },
            {
              label: "По возрастанию цены",
              value: "priceUp",
            },
            {
              label: "По убыванию цены",
              value: "priceDown",
            },
          ]}
          onClick={sort.setSortBy}
        />
        <div className="flex gap-3">
          <div className="flex text-xl items-center">Филтр по цене до</div>
          <Input
            placeholder="25 000P"
            icon={CiFilter}
            value={priceFilter}
            onChange={(evt) => {
              setPriceFilter(evt.target.value);
            }}
            onClick={() => {
              filter.setFilter({ price: Number.parseFloat(priceFilter) });
            }}
          />
        </div>
      </div>
      <Input
        placeholder="Поиск"
        icon={HiOutlineMagnifyingGlass}
        value={titleFilter}
        onChange={(evt) => {
          setTitleFilter(evt.target.value);
        }}
        onClick={() => filter.setFilter({ product: titleFilter })}
      />
    </div>
  );
};

export default OptionsPanel;
