
import React from 'react';

export const Button = ({ onClick, showButton }) => {
  return showButton ? (
    <button className='btn btn-success' onClick={onClick}>
      Load more...
    </button>
  ) : null;
};
