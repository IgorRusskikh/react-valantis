"use client";

import { useCallback, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import { SelectProps } from '@/types/customTypes';

const Select: React.FC<SelectProps> = ({ label, options, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className="flex flex-col relative select-none">
      <div
        className="flex w-fit px-3 py-1 text-lg rounded-xl justify-center items-center border border-red-500 cursor-pointer transition-all duration-300 hover:text-red-500"
        onClick={onOpen}
      >
        {label}
        <span
          className={`
          ml-1 
          transition-all
          duration-300
          ${isOpen ? "rotate-180" : "rotate-0"}
        `}
        >
          <RiArrowDownSLine size={25} />
        </span>
      </div>
      <div
        className={`
        bg-white
          z-10
          mt-12
          absolute
          flex 
          flex-col
          border 
          px-2 
          py-2 
          min-w-fit 
          w-full
          border-red-500 
          rounded-xl 
          gap-3 
          transition-all 
          duration-200 
          ${isOpen ? "" : "-translate-y-10 opacity-0 pointer-events-none"}
        `}
      >
        {options.map((option, index) => (
          <div
            key={option.label}
            className={`
              px-1 
              border-b
              cursor-pointer 
              transition-all 
              duration-300 
            hover:text-red-500 
              text-lg 
              min-w-max
              ${
                index + 1 === options.length
                  ? "border-none"
                  : "border-b-red-500"
              }
            `}
            onClick={() => {
              onClick(option);
              onOpen();
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
