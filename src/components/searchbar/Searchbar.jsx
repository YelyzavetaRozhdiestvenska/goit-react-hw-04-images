import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import {
  Search,
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  Input,
} from './searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
    inputValue: '',
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  // Метод для обработки отправки формы поиска
  handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === '') {
      toast.error('Input search images!');
      return;
    }
    this.props.onSubmit(evt.target.elements.query.value);

    evt.target.reset();
  };

  render() {
    return (
      <Search>
        <SearchForm onSubmit={this.handleSubmit}>
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
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Search>
    );
  }
}
