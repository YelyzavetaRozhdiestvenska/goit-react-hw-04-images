import React from 'react';
import { ButtonLoadMore } from './button.styled';

export const Button = ({ onClick }) => {
  return (
    <>
      <ButtonLoadMore type="button" onClick={onClick}>
        Load more
      </ButtonLoadMore>
    </>
  );
};
