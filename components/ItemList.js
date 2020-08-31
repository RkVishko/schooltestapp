import React from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';

const ListWrapper = styled.View`
  margin-bottom: 24px;
`;
const ListName = styled.Text`
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  color: rgb(66, 66, 66);
`;
const CollegesSeparator = styled.View`
  width: 16px;
`;

export const ItemList = ({ name = 'Test', data, renderItem }) => {
  return (
    <ListWrapper>
      <ListName>{name}</ListName>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}-list-${name}`}
        // extraData={selectedId}
        ItemSeparatorComponent={CollegesSeparator}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </ListWrapper>
  );
};
