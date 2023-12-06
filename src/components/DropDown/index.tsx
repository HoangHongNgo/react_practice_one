import React, { useState } from "react";
import { S } from "./styled";

interface DropdownProps {
  name: string;
  options: string[];
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ name, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onSelect(e);
  };

  return (
    <div>
      <S.Select name={name} value={selectedOption} onChange={handleSelectChange}>
        <S.Option value="" disabled>
          Select an option
        </S.Option>
        {options.map((option, index) => (
          <S.Option key={index} value={option}>
            {option}
          </S.Option>
        ))}
      </S.Select>
    </div>
  );
};

export default Dropdown;
