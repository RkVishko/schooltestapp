import React, { useEffect } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { SearchComponent } from '../components/SearchComponent';
import { CollegeCard } from '../components/CollegeCard';
import { connect } from 'react-redux';
import {
  getColleges,
  getMajors,
  getDegrees,
  getCollegesAction,
  setCollege,
  getSelectedCollege,
  getSelected,
} from '../redux/reducers/collegeReducer';
import { ItemList } from '../components/ItemList';
import { OtherCard } from '../components/OtherCard';
import { SelectComponent } from '../components/SelectComponent';

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
  height: 172px;
  justify-content: center;
  padding: 20px;
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

const HeaderText = styled.Text`
  font-size: 34px;
  line-height: 41px;
  color: white;
  font-family: 'Montserrat';
  font-weight: bold;
`;
const HeaderDetailText = styled.Text`
  color: white;
  font-size: 14px;
  line-height: 16px;
`;

const Header = () => (
  <HeaderWrapper>
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['rgb(242,87,20)', 'rgb(245,175,25)']}>
      <GradientHeader>
        <HeaderText>Discover</HeaderText>
        <HeaderDetailText>Select filters and find friends</HeaderDetailText>
      </GradientHeader>
    </LinearGradient>
    <BottomCurve />
  </HeaderWrapper>
);

const DiscoverWrapper = styled.View`
  flex: 1;
`;

const SearchWrapper = styled.View`
  justify-content: center;
  align-items: center;
  top: -55px;
  width: 100%;
  position: absolute;
  padding: 0 20px;
`;

const DiscoverScrollContainer = styled.ScrollView`
  padding: 0px 0px 0px 20px;
`;

const DiscoverScreen = ({
  colleges,
  majors,
  degrees,
  getCollegesAPI,
  setCollege,
  selectedCollege,
  selected,
}) => {
  useEffect(() => {
    console.log(colleges, 'colleges');
  }, [colleges]);

  useEffect(() => {
    getCollegesAPI();
  }, [getCollegesAPI]);

  return (
    <ScreenArea>
      <StatusBar translucent backgroundColor="transparent" />
      <Header />
      <DiscoverWrapper>
        <SearchWrapper>
          <SearchComponent />
        </SearchWrapper>
        <DiscoverScrollContainer>
          <ItemList
            name={'Colleges'}
            renderItem={(item) => (
              <CollegeCard {...item} onClick={setCollege} selected={selected} />
            )}
            data={colleges}
          />
          <ItemList name={'Major'} renderItem={OtherCard} data={majors} />
          <ItemList name={'Degrees'} renderItem={OtherCard} data={degrees} />
        </DiscoverScrollContainer>
      </DiscoverWrapper>
      <SelectComponent selectedCollege={selectedCollege} />
    </ScreenArea>
  );
};

export default connect(
  (state) => {
    return {
      colleges: getColleges(state.col),
      majors: getMajors(state.col),
      degrees: getDegrees(state.col),
      selectedCollege: getSelectedCollege(state.col),
      selected: getSelected(state.col),
    };
  },
  (dipsatch) => ({
    getCollegesAPI: () => dipsatch(getCollegesAction()),
    setCollege: (index) => dipsatch(setCollege(index)),
  }),
)(DiscoverScreen);
