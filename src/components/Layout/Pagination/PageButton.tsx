import usePagination from '@/hooks/usePagination';
import { PageButton } from '@/types/customTypes';

const PageButton: React.FC<PageButton> = ({ page }) => {
  const pagination = usePagination();

  return (
    <div
      className={`
        hover:bg-red-500 
        hover:text-white 
        transition-all 
        duration-300
        px-3 
        py-1 
        rounded-lg 
        mr-2 
        ml-2 
        text-black 
        text-lg 
        max-w-10 
        min-w-10 
        flex 
        justify-center 
        items-center 
        cursor-pointer 
        select-none 
        shadow-xl 
        border 
        border-red-500
        ${pagination.page === page && "bg-red-500 text-white"}
      `}
      onClick={() => {
        pagination.setPage(page)
        window.scrollTo(0, 0)
      }}
    >
      {page}
    </div>
  );
};

export default PageButton;
