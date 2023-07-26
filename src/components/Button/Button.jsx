
import React from 'react';
import styled from './Button.module.css';

export const Button = ({ onClick, showButton }) => {
  return showButton ? (
    <div className={styled.divBtn}>
    <button className={styled.btn} onClick={onClick}>
      Load more...
      </button>
      </div>
  ) : null;
};
