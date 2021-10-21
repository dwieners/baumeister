import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';

export interface BlankSpacerProps extends ViewProps {
  height?: number;
  width?: number;
  color?: string;
}

const Spacer: FC<BlankSpacerProps> = ({
  style,
  height,
  width,
  color: backgroundColor,
  ...otherProps
}) => (
  <View style={[{ height, width, backgroundColor }, style]} {...otherProps} />
);

export default Spacer;
