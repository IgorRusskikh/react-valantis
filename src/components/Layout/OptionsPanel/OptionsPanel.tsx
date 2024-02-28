import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

import useSearch from '@/hooks/useSearch';
import useSorting from '@/hooks/useSorting';

import Input from '../../Input/Input';
import Select from '../../Select/Select';

const OptionsPanel = () => {
  const sort = useSorting();
  const search = useSearch();

  return (
    <div className="flex justify-between mx-28 px-10 py-5 border rounded-xl mt-10 shadow-lg">
      <div className="flex gap-4">
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
      </div>
      <Input
        placeholder="Поиск"
        icon={HiOutlineMagnifyingGlass}
        value={search.query}
        onChange={(evt) => search.setQuery(evt.target.value)}
      />
    </div>
  );
};

export default OptionsPanel;
