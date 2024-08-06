import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface SelectProps {
  placeholder?: string;
  options: Option[];
  selected: Option | null;
  onChange: (selection: Option) => void;
}
export type Option = {
  label: string;
  value: string | number;
};
export const Select = ({
  placeholder,
  selected,
  options,
  onChange,
}: SelectProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={ref} className="relative ">
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="flex cursor-pointer justify-between items-center"
      >
        <span className="pr-2">{selected ? selected.label : placeholder}</span>
        <Image
          alt="select-arrow"
          src="/images/arrow-down.svg"
          width={16}
          height={16}
        />
      </div>
      {showOptions && (
        <div className="absolute border min-w-[100px] bg-white">
          {options.map((option) => (
            <div
              onClick={() => {
                onChange(option);
                setShowOptions(false);
              }}
              key={option.value}
              className="px-2 py-4 text-sm cursor-pointer hover:bg-blue-400"
            >
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
