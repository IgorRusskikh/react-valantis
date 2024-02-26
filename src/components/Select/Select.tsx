"use client";

import { useCallback, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

interface SelectProps {
  label: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className="flex flex-col relative select-none">
      <div
        className="flex w-fit px-3 py-1 text-lg rounded-xl justify-center items-center border border-red-500 cursor-pointer transition-all duration-300 hover:text-red-500"
        onClick={onClick}
      >
        {label}
        <span
          className={`
          ml-1 
          transition-transform
          duration-300
          ${isOpen ? "rotate-180" : "rotate-0"}
        `}
        >
          <RiArrowDownSLine />
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
          min-w-[95px] 
          px-2 
          py-2
          w-fit 
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
            key={option}
            className={`
              px-1 
              border-b  
              cursor-pointer 
              transition-all 
              duration-300 
            hover:text-red-500 text-lg
              ${
                index + 1 === options.length
                  ? "border-none"
                  : "border-b-red-500"
              }
            `}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
