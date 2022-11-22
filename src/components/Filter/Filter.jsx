import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput, FilterWrap } from './Filter.styled';

const Filter = ({ onChangeFilter, value, isAuth = false }) => (
  <FilterWrap>
    <FilterInput
      isAuth={isAuth}
      onChange={onChangeFilter}
      type="text"
      value={value}
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces."
      required
      placeholder="Search product"
    />
  </FilterWrap>
);

export default Filter;

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string,
  isAuth: PropTypes.bool,
};
