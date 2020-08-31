import React from 'react';
import styled from 'styled-components';

const TabWrapper = styled.View`
  flex-direction: row;
  height: 80px;
  background-color: rgb(246, 246, 246);
  border-top-width: 1px;
  border-top-color: rgba(47, 47, 47, 0.1);
  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text`
  color: ${(props) =>
    !props.isFocused ? 'rgb(48, 48, 48)' : 'rgb(243, 111, 21)'};
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  font-weight: bold;
`;

export const CustomTabBar = ({ state, navigation, descriptors }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <TabWrapper>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
        };
        return (
          <Button
            key={`${index}-tab-bar`}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <ButtonText isFocused={isFocused}>{label}</ButtonText>
          </Button>
        );
      })}
    </TabWrapper>
  );
};
