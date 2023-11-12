import {
  Search,
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  Input,
} from './searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Search>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>
        <Input
          className="input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Search>
  );
};
