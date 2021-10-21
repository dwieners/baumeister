import React, { FC } from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import type { SpacingType } from 'baumeister';
import { BaseSpacing } from '../types';

export type DividerProps = {
  height?: number;
  insetLeft?: keyof SpacingType;
  insetRight?: keyof SpacingType;
  color?: ColorValue;
};

const Divider: FC<DividerProps> = ({
  height = StyleSheet.hairlineWidth,
  insetLeft,
  insetRight,
  color = 'black',
}) => {
  const styles = StyleSheet.create({
    container: {
      height,
      marginLeft: insetLeft && BaseSpacing[insetLeft],
      marginRight: insetRight && BaseSpacing[insetRight],
      backgroundColor: color,
    },
  });

  return <View style={[styles.container]} />;
};

export default Divider;
