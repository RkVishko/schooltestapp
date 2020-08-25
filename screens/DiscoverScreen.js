import React from 'react';
import { Dimensions, StatusBar } from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { SearchComponent } from '../components/SearchComponent';

const width = Dimensions.get('window').width;

const ScreenArea = styled.View`
  background-color: rgb(246, 246, 246);
  /* background-color: black; */
  flex: 1;
`;

const HeaderWrapper = styled.View`
  overflow: hidden;
  background-color: green;
  max-height: 182px;
`;
const GradientHeader = styled.View`
  /* background-color: red; */
  height: 172px;
`;

const BottomCurve = styled.View`
  height: 10px;
  background-color: rgb(246, 246, 246);
  border-radius: ${width * 4}px;
  width: ${width * 4}px;
  height: ${width * 4}px;
  left: -${(width * 4) / 2 - width / 2}px;
  top: -35px;
`;

const Header = () => (
  <HeaderWrapper>
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['rgb(242,87,20)', 'rgb(245,175,25)']}>
      <GradientHeader />
    </LinearGradient>
    <BottomCurve />
  </HeaderWrapper>
);

const DiscoverWrapper = styled.View`
  /* background-color: red; */
`;

const SearchWrapper = styled.View`
  justify-content: center;
  align-items: center;
  top: -55px;
`;

export const DiscoverScreen = () => {
  return (
    <ScreenArea>
      <StatusBar translucent backgroundColor="transparent" />
      <Header />
      <DiscoverWrapper>
        <SearchWrapper>
          <SearchComponent />
        </SearchWrapper>
      </DiscoverWrapper>
    </ScreenArea>
  );
};
