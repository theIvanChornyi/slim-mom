import React from 'react';
import {
  ButtonDelete,
  ItemProducts,
  Kcal,
  ProductName,
  Weight,
} from './DiaryProductsItem.styled';

export default function DiaryProductsItem() {
  return (
    <ItemProducts>
      <ProductName>Product</ProductName>
      <Weight>000 g</Weight>
      <Kcal>000 kcal</Kcal>
      <ButtonDelete type="button">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L13 13" stroke="#9B9FAA" strokeWidth="2" />
          <path d="M1 13L13 0.999999" stroke="#9B9FAA" strokeWidth="2" />
        </svg>
      </ButtonDelete>
    </ItemProducts>
  );
}
