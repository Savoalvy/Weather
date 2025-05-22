import { Input } from '@chakra-ui/react';
import { useState } from 'react';

export const SearchInput = ({ variant, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  console.log(inputValue);
  return (
    <Input
      variant={variant}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
