import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonDelete,
  ItemProducts,
  Kcal,
  ProductName,
  Weight,
} from './DiaryProductsItem.styled';

export default function DiaryProductsItem({
  name,
  weight,
  kcal,
  id,
  handleDeleteProduct,
  isDeliting,
}) {
  const onDeleteClick = () => {
    handleDeleteProduct(id);
  };

  return (
    <ItemProducts>
      <ProductName>{name}</ProductName>
      <Weight>{weight} g</Weight>
      <Kcal>{Math.round(kcal)}kcal</Kcal>
      <ButtonDelete type="button" disabled={isDeliting} onClick={onDeleteClick}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/CrossButton"
        >
          <path d="M1 1L13 13" strokeWidth="2" />
          <path d="M1 13L13 0.999999" strokeWidth="2" />
        </svg>
      </ButtonDelete>
    </ItemProducts>
  );
}

DiaryProductsItem.propTypes = {
  name: PropTypes.string,
  weight: PropTypes.number,
  kcal: PropTypes.number,
  id: PropTypes.string,
  handleDeleteProduct: PropTypes.func,
  isDeliting: PropTypes.bool,
};
