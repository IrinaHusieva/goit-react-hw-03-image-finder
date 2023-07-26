
import React from 'react';
import styled from './Button.module.css';
import PropTypes from "prop-types";


export const Button = ({ onClick, showButton }) => {
  return showButton ? (
    <div className={styled.divBtn}>
    <button className={styled.btn} onClick={onClick}>
      Load more...
      </button>
      </div>
  ) : null;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};