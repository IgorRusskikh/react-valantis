import { useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

import { useFilterByPrice, useSearch, useSorting } from '@/hooks/customHooks';

import Input from '../../Input/Input';
import Select from '../../Select/Select';

const OptionsPanel = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");

  const sort = useSorting();
  const filterBy = useFilterByPrice();
  const search = useSearch();

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
            value={filterInput}
            onChange={(evt) => {
              setFilterInput(evt.target.value);
            }}
            onClick={() => {
              filterBy.setQuery(filterInput);
            }}
          />
        </div>
      </div>
      <Input
        placeholder="Поиск"
        icon={HiOutlineMagnifyingGlass}
        value={searchInput}
        onChange={(evt) => {
          setSearchInput(evt.target.value);
        }}
        onClick={() => search.setQuery(searchInput)}
      />
    </div>
  );
};

export default OptionsPanel;
