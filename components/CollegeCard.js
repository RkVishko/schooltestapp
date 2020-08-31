import React from 'react';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

const CardWrapper = styled.View`
  flex-direction: column;
  /* height: 235px; */
  width: 268px;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  elevation: 10;
  opacity: ${(props) => (props.selected ? '0.2' : '1')};
`;

const TouchableView = styled.TouchableWithoutFeedback``;

const CardHead = styled.View`
  /* height: 50%; */
  height: 130px;
  justify-content: center;
`;

const CardFoot = styled.View`
  /* height: 50%; */
  padding: 12px 16px;
  background-color: white;
`;

const HeadImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const CollegeIcon = styled.View`
  width: 65px;
  height: 65px;
  border-radius: 65px;
  position: absolute;
  left: 26px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const CollegeText = styled.Text`
  font-weight: bold;
  text-align: center;
`;

const CollegeFullName = styled.Text`
  font-size: 15px;
  line-height: 19px;
  color: rgb(66, 66, 66);
`;

const TopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* height: 50%; */
  margin-bottom: 15px;
`;

const BotRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RoomsNumber = styled.Text`
  font-size: 12px;
  text-align: right;
  line-height: 12px;
  color: rgb(178, 178, 178);
`;

const StudentIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  left: ${(props) => `-${props.index * 10}px`};
`;

const StudentIcon = styled.Image`
  background-color: rgb(243, 111, 21);
  width: 28px;
  height: 28px;
  border-radius: 28px;
  border-color: white;
  border-width: 1px;
`;

const StudentsWrapper = styled.View`
  flex-direction: row;
  width: ${(props) =>
    `${
      props.students.length > 3
        ? 4 * 28 - 3 * 10
        : props.students.length * 28 - props.students.length - 1 * 10
    }px`};
`;

const StudentText = styled.Text`
  position: absolute;
  color: ${(props) => `${props.color || 'black'}`};
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: bold;
`;

const StudentsList = ({ students }) => {
  return (
    <StudentsWrapper students={students}>
      {students.map((student, index) => {
        if (index > 2) {
          return null;
        } else {
          return (
            <StudentIconWrapper index={index} key={`${index}-student`}>
              <StudentIcon />
              <StudentText>{student.fullName.charAt(0)}</StudentText>
            </StudentIconWrapper>
          );
        }
      })}
      {students.length > 3 && (
        <StudentIconWrapper index={3}>
          <StudentIcon />
          <StudentText color={'white'}>{`+${students.length - 3}`}</StudentText>
        </StudentIconWrapper>
      )}
    </StudentsWrapper>
  );
};

const NamesWrapper = styled.View`
  padding-left: 8px;
  flex: 1;
`;
const ColContainer = styled.View``;
const RowContainer = styled.Text`
  /* flex-direction: row; */
  font-size: 12px;
  line-height: 16px;
  color: rgb(66, 66, 66);
  font-weight: bold;
`;

const DetailText = styled.Text`
  font-size: 12px;
  color: rgb(178, 178, 178);
`;
// const StudentFullNames = styled.Text`
//   font-size: 12;
//   line-height: 16px;
//   color: rgb(66, 66, 66);
//   font-weight: bold;
// `;

const StudentsNameList = ({ students }) => {
  console.log(students.length, 'negth');
  return (
    <NamesWrapper>
      <ColContainer>
        <RowContainer numberOfLines={1}>
          {students.map((student, index) => {
            return `${student.fullName}${
              students.length - 1 !== index ? ', ' : ''
            }`;
          })}
        </RowContainer>
        {students.length > 3 ? (
          <DetailText>{`and ${students.length - 3} other`}</DetailText>
        ) : (
          <DetailText>{``}</DetailText>
        )}
      </ColContainer>
    </NamesWrapper>
  );
};

export const CollegeCard = ({
  item: { name, rooms, students },
  index,
  onClick,
  selected,
}) => {
  return (
    <TouchableView onPress={() => onClick(index)}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['rgb(242,87,20)', 'rgb(245,175,25)']}
        style={{ borderRadius: 10 }}>
        <CardWrapper key={`${index}-college`} selected={selected === index}>
          <CardHead>
            <HeadImage source={{ uri: 'https://picsum.photos/300/150' }} />
            <CollegeIcon>
              <CollegeText>{name || 'TEST'}</CollegeText>
            </CollegeIcon>
          </CardHead>
          <CardFoot>
            <TopRow>
              <CollegeFullName>{name || 'TEST'}</CollegeFullName>
              <RoomsNumber>{`${rooms || 'XX'} rooms`}</RoomsNumber>
            </TopRow>
            <BotRow>
              <StudentsList students={students} />
              <StudentsNameList students={students} />
            </BotRow>
          </CardFoot>
        </CardWrapper>
      </LinearGradient>
    </TouchableView>
  );
};
