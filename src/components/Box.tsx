import React, { FC } from 'react';
import {
  Platform,
  PlatformOSType,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import type { ContainerProps, SpacingProps, SpacingType } from '../types';

type BoxProps = ViewProps &
  SpacingProps &
  ContainerProps & { platform?: PlatformOSType };

const spacing: SpacingType = {
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
};

const Box: FC<BoxProps> = ({
  children,
  padding,
  paddingBottom,
  paddingStart,
  paddingRight,
  paddingLeft,
  paddingHorizontal,
  paddingEnd,
  paddingTop,
  paddingVertical,
  backgroundColor,
  container,
  platform,
  style,
}) => {
  const styles = StyleSheet.create({
    container: {
      padding: padding && spacing[padding],
      paddingBottom: paddingBottom && spacing[paddingBottom],
      paddingStart: paddingStart && spacing[paddingStart],
      paddingRight: paddingRight && spacing[paddingRight],
      paddingLeft: paddingLeft && spacing[paddingLeft],
      paddingHorizontal: paddingHorizontal && spacing[paddingHorizontal],
      paddingEnd: paddingEnd && spacing[paddingEnd],
      paddingTop: paddingTop && spacing[paddingTop],
      paddingVertical: paddingVertical && spacing[paddingVertical],
      flex: container ? 1 : undefined,
      backgroundColor,
    },
  });

  if (platform !== undefined) {
    return Platform.OS === platform ? (
      <View style={[styles.container, style]}>{children}</View>
    ) : null;
  }

  return <View style={[styles.container, style]}>{children}</View>;
};

export default Box;
