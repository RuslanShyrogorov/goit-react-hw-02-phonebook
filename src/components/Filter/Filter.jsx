import React from 'react';
import PropTypes from 'prop-types';
import { FilterWrapper, FilterLable, FilterInput } from './Filter.styled';

export default function ContactsFilter({ value, onChange }) {
  return (
    <FilterWrapper>
      <FilterLable htmlFor="filter">Find contacts by name</FilterLable>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        id="filter"
        onChange={onChange}
      />
    </FilterWrapper>
  );
}

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
