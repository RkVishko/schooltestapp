import React, { useState } from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.View`
  width: 335px;
  height: 44px;
  background-color: white;
  border-radius: 10px;
`;

const SearchInput = styled.TextInput`
`;

export const SearchComponent = () => {
  const [search, onChangeSearch] = useState('');

  return (
    <SearchWrapper>
      <SearchInput
        placeholder="placeholder"
        onChangeText={(text) => onChangeSearch(text)}
        value={search}
      />
    </SearchWrapper>
  );
};
