import { IconType } from 'react-icons';

interface InputProps {
  placeholder?: string;
  type?: string;
  icon?: IconType;
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder = "",
  type,
  icon: Icon,
  value,
  onChange,
}) => {
  return (
    <div className="flex justify-center items-center border border-red-500 rounded-xl px-3 text-lg">
      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="outline-none rounded-xl pl-1"
      />
      {Icon && (
        <Icon
          size={25}
          className="cursor-pointer hover:text-red-500 transition-all duration-300 border-l border-red-500 pl-2 w-fit"
        />
      )}
    </div>
  );
};

export default Input;
