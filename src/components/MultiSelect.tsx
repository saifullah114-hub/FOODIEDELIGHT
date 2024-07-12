import React from 'react';
import Select, { MultiValue, ActionMeta } from 'react-select';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  value: string[];
  onChange: (selectedOptions: string[]) => void;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({ options, value, onChange }) => {
  const handleChange = (
    newValue: MultiValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => {
    onChange(newValue.map(option => option.value));
  };

  const selectedOptions = options.filter(option => value.includes(option.value));
console.log(selectedOptions,value,options)
  return (
    <Select
      isMulti
      options={options}
      value={selectedOptions}
      onChange={handleChange}
    />
  );
};