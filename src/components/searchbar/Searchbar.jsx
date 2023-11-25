import React from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import {
  Search,
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  Input,
} from './searchbar.styled';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setQuery(inputValue.trim());
    if (inputValue.trim() === '') {
      toast.error('Input search images!');
      return;
    }
    onSubmit(query);

    evt.target.reset();
  };

  return (
    <Search>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FcSearch size={24} />
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>

        <Input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </Search>
  );
};
