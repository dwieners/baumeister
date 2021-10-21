import React, { FC } from 'react';
import {
  ActivityIndicator,
  ButtonProps as RNButtonProps,
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type ButtonProps = RNButtonProps & {
  /**
   * Whether to show a loading indicator
   */
  loading?: boolean;
  /**
   * Custom background color for the `Button`
   */
  backgroundColor?: ColorValue;
  /**
   * Custom text color
   */
  color?: ColorValue;
  /**
   * Make the label text uppercased.
   */
  uppercase?: boolean;
  /**
   * Style of button's inner content
   */
  contentStyle?: StyleProp<ViewStyle>;
  /**
   * Style for the button text
   */
  labelStyle?: StyleProp<TextStyle>;
};

const containerBase: ViewStyle = {
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonShape: ViewStyle = {
  paddingHorizontal: 10,
  paddingVertical: 8,
  height: 50,
  width: '100%',
};

const primaryStyle = StyleSheet.create({
  text: {
    color: 'white',
  },
  enabled: {
    ...containerBase,
    backgroundColor: 'green',
  },

  disabled: {
    ...containerBase,
    backgroundColor: 'green',
    opacity: 0.5,
  },

  indicatorStyle: {
    position: 'absolute',
  },
});

const Button: FC<ButtonProps> = ({
  title,
  loading,
  backgroundColor,
  disabled,
  uppercase,
  contentStyle,
  labelStyle,
  ...props
}) => {
  const currentLabelStyle: TextStyle = {
    textTransform: uppercase ? 'uppercase' : undefined,
  };

  const currentEnabledStyle: TextStyle = {
    ...primaryStyle.enabled,
    backgroundColor: backgroundColor ?? primaryStyle.enabled.backgroundColor,
  };

  const currentDisabledStyle: TextStyle = {
    ...primaryStyle.disabled,
    backgroundColor: backgroundColor ?? primaryStyle.enabled.backgroundColor,
  };

  return (
    <TouchableOpacity
      style={[
        disabled || loading ? currentDisabledStyle : currentEnabledStyle,
        buttonShape,
        contentStyle,
      ]}
      onPress={props.onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator
          style={primaryStyle.indicatorStyle}
          color={'white'}
          size={'small'}
        />
      ) : (
        <Text
          style={[primaryStyle.text, currentLabelStyle, labelStyle]}
          numberOfLines={1}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
