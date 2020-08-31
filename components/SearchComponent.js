import React, { useState } from 'react';
import styled from 'styled-components';
import { SEARCH_IMAGE } from '../images';

const SearchWrapper = styled.View`
  /* width: 335px; */
  width: 100%;
  height: 44px;
  background-color: white;
  border-radius: 10px;
  padding: 0 17px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  font-size: 12px;
  line-height: 12px;
  max-width: 90%;
`;

const ImageWrapper = styled.Image`
  width: 16px;
  height: 16px;
`;

export const SearchComponent = ({ value }) => {
  const [search, onChangeSearch] = useState(value || '');

  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Search"
        onChangeText={(text) => onChangeSearch(text)}
        value={search}
      />
      <ImageWrapper source={SEARCH_IMAGE} />
    </SearchWrapper>
  );
};
