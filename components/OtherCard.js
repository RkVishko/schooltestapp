import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.View`
  width: 140px;
  /* height: 128px; */
  background-color: white;
  border-radius: 10px;
  elevation: 10;
  shadow-opacity: 0.25;
  shadow-radius: 5px;
  shadow-color: black;
  shadow-offset: 0px 0px;
`;

const TitleWrapper = styled.View``;
const TitleText = styled.Text`
  font-size: 15px;
  line-height: 19px;
  color: rgb(66, 66, 66);
  font-weight: bold;
  padding: 16px 16px 0px 16px;
`;

const RoomsWrapper = styled.View`
  padding: 16px;
`;
const RoomsText = styled.Text`
  font-size: 12px;
  line-height: 13px;
  color: rgb(178, 178, 178);
`;

export const OtherCard = ({ item: { name, rooms } }) => {
  return (
    <CardWrapper>
      <TitleText>{name || 'Test'}</TitleText>
      <RoomsWrapper>
        <RoomsText>{`${rooms} rooms`}</RoomsText>
      </RoomsWrapper>
    </CardWrapper>
  );
};
