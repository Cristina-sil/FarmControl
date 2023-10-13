import React, {useEffect, useRef, useState} from 'react';
import {Animated, Text, TouchableOpacity} from 'react-native';

// Styles
import Styles from './styles';

type Props = {
  testID?: String,
  switchOn: boolean,
  onPress: Function,
  containerStyle?: Object,
  circleStyle?: Object,
  backgroundColorOn?: string,
  backgroundColorOff?: string,
  circleColorOff?: string,
  circleColorOn?: string,
  duration?: number,
  type?: number,
  buttonText?: string,
  buttonTextStyle?: Object,
  buttonStyle?: Object,
  buttonContainerStyle?: Object,
};

function SwitchToggle(props: Props) {
  const {
    testID,
    type,
    containerStyle,
    switchOn,
    duration,
    circleStyle,
    buttonTextStyle,
    buttonStyle,
    buttonContainerStyle,
    backgroundColorOn,
    backgroundColorOff,
    circleColorOn,
    circleColorOff,
    buttonText,
    onPress,
  } = props;

  const [animXValue] = useState(new Animated.Value(switchOn ? 1 : 0));
  const getStart = (): number | undefined => {
    if (type === undefined) {
      return 0;
    }
    if (type === 0) {
      return 0;
    }
    if (containerStyle && containerStyle.padding) {
      return containerStyle.padding * 2;
    }

    return {};
  };

  const runAnimation = (): void => {
    const animValue = {
      fromValue: switchOn ? 0 : 1,
      toValue: switchOn ? 1 : 0,
      duration,
      useNativeDriver: false,
    };
    Animated.timing(animXValue, animValue).start();
  };

  const endPos =
    containerStyle && circleStyle
      ? containerStyle.width - (circleStyle.width + containerStyle.padding * 2)
      : 0;
  const circlePosXEnd = endPos;
  const [circlePosXStart] = useState(getStart());

  const prevSwitchOnRef = useRef();
  const prevSwitchOn = !!prevSwitchOnRef.current;
  useEffect(() => {
    prevSwitchOnRef.current = switchOn;
    if (prevSwitchOn !== switchOn) {
      runAnimation();
    }
  }, [switchOn]);

  return (
    <TouchableOpacity testID={testID} onPress={onPress} activeOpacity={0.5}>
      <Animated.View
        style={[
          Styles.container,
          containerStyle,
          {
            backgroundColor: animXValue.interpolate({
              inputRange: [0, 1],
              outputRange: [backgroundColorOff, backgroundColorOn],
            }),
          },
        ]}>
        <Animated.View
          style={[
            circleStyle,
            {
              backgroundColor: animXValue.interpolate({
                inputRange: [0, 1],
                outputRange: [circleColorOff, circleColorOn],
              }),
            },
            {
              transform: [
                {
                  translateX: animXValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [circlePosXStart, circlePosXEnd],
                  }),
                },
              ],
            },
            buttonStyle,
          ]}>
          <Animated.View style={buttonContainerStyle}>
            <Text style={buttonTextStyle}>{buttonText}</Text>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
}

SwitchToggle.defaultProps = {
  testID: '',
  containerStyle: Styles.containerStyle,
  circleStyle: Styles.circleStyle,
  type: undefined,
  backgroundColorOn: 'rgba(151, 183, 51, 1)',
  backgroundColorOff: 'rgb(215,215,215)',
  circleColorOff: 'white',
  circleColorOn: 'white',
  duration: 300,
  buttonText: '',
  buttonTextStyle: {},
  buttonStyle: {},
  buttonContainerStyle: {},
};

export default SwitchToggle;
