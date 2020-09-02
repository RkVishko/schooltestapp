import React, { useRef } from 'react';
import styled from 'styled-components';
import { PanResponder, Animated, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const Container = styled.View`
  background-color: rgb(246, 246, 246);
  height: 80%;
  width: 100%;
  position: absolute;
  bottom: -65%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  elevation: 15;
  shadow-opacity: 0.3;
  shadow-radius: 15px;
  shadow-color: black;
  shadow-offset: 0px 0px;
`;

const InterActiveZone = styled.View`
  height: 20%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(47, 47, 47, 0.1);
  justify-content: center;
`;
const BodyContainer = styled.View`
  padding: 10px 15px;
`;
const BodyText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const LineWrapper = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  top: 8px;
`;
const Line = styled.View`
  background-color: rgba(19, 20, 21, 0.3);
  width: 48px;
  height: 6px;
  border-radius: 3px;
`;

const PlacehplderWrapper = styled.View`
  padding: 8px 20px;
`;
const PlaceholderText = styled.Text`
  font-size: 15px;
  line-height: 16px;
  color: rgb(178, 178, 178);
`;

const RoomsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RoomsText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const RoomsNumberWrapper = styled.View`
  background-color: rgb(243, 111, 21);
  border-radius: 10px;
  padding: 3px 15px;
`;

const RoomsNumber = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const SelectComponent = ({ selectedCollege }) => {
  const yPos = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {},
      onPanResponderMove: (evt, g) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        if (g.dy <= 0 && Math.abs(g.dy) <= windowHeight * 0.5) {
          return Animated.event([null, { dy: yPos }], {
            listener: null,
            useNativeDriver: false,
          })(evt, g);
        }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, g) => {
        console.log(g.dy);
        if (g.dy > -200) {
          Animated.timing(yPos, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.timing(yPos, {
            toValue: -windowHeight * 0.5,
            duration: 1000,
            useNativeDriver: true,
          }).start();
        }
      },
      onPanResponderTerminate: (evt, gestureState) => {},
      onShouldBlockNativeResponder: (evt, gestureState) => {
        return true;
      },
    }),
  ).current;

  const interpolatedY = yPos.interpolate({
    inputRange: [0, 65],
    outputRange: ['0%', '-65%'],
  });

  return (
    <Container as={Animated.View} style={{ transform: [{ translateY: yPos }] }}>
      <InterActiveZone {...panResponder.panHandlers}>
        <LineWrapper>
          <Line />
        </LineWrapper>
        <PlacehplderWrapper>
          {!selectedCollege?.rooms ? (
            <PlaceholderText>Select filters and find friends</PlaceholderText>
          ) : (
            <RoomsWrapper>
              <RoomsText>Rooms</RoomsText>
              <RoomsNumberWrapper>
                <RoomsNumber>{selectedCollege?.rooms}</RoomsNumber>
              </RoomsNumberWrapper>
            </RoomsWrapper>
          )}
        </PlacehplderWrapper>
      </InterActiveZone>
      <BodyContainer>
        <BodyText>The most active users</BodyText>
      </BodyContainer>
    </Container>
  );
};
