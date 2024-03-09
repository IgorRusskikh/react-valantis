import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import usePagination from '@/hooks/usePagination';

import PageButton from './PageButton';

const Pagination = () => {
  const pagination = usePagination();
  const pages = [];

  if (pagination.maxPage) {
    for (let i = 1; i <= pagination.maxPage; i++) {
      pages.push(i);
    }
  }

  return (
    <div className="flex justify-center items-center w-4/5">
      {pagination.page - 3 > 1 && (
        <>
          <SlArrowLeft
            size={20}
            className="cursor-pointer"
            onClick={() => pagination.setPage(pagination.page - 1)}
          />
          <PageButton page={1} />
          <div className="text-lg px-3 py-1 mr-1 ml-1">. . .</div>
        </>
      )}
      {pagination.page < 5 &&
        pages.slice(0, 5).map((page) => {
          return <PageButton key={page} page={page} />;
        })}
      {pagination.page >= 5 &&
        pages
          .slice(
            pagination.page - 3,
            pagination.page + 3 < pages.length
              ? pagination.page + 2
              : pages.length
          )
          .map((page) => {
            return <PageButton key={page} page={page} />;
          })}
      {pagination.page + 3 < pages.length && (
        <>
          <div className="text-lg px-3 py-1 mr-1 ml-1">. . .</div>
          <PageButton page={pagination.maxPage || 1} />
          <div>
            <SlArrowRight
              size={20}
              className="cursor-pointer"
              onClick={() => pagination.setPage(pagination.page + 1)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
