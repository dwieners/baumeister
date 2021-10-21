import React, { FC } from 'react';
import {
  Platform,
  PlatformOSType,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import type { ContainerProps, SpacingProps } from '../types';
import { BaseSpacing } from '../types';

/**
 * BoxProps
 */
type BoxProps = ViewProps &
  SpacingProps &
  ContainerProps & { platform?: [PlatformOSType] };

const Box: FC<BoxProps> = ({
  padding,
  paddingBottom,
  paddingStart,
  paddingRight,
  paddingLeft,
  paddingHorizontal,
  paddingEnd,
  paddingTop,
  paddingVertical,
  container,
  backgroundColor,
  platform,
  children,
  style,
}) => {
  const styles = StyleSheet.create({
    container: {
      padding: padding && BaseSpacing[padding],
      paddingBottom: paddingBottom && BaseSpacing[paddingBottom],
      paddingStart: paddingStart && BaseSpacing[paddingStart],
      paddingRight: paddingRight && BaseSpacing[paddingRight],
      paddingLeft: paddingLeft && BaseSpacing[paddingLeft],
      paddingHorizontal: paddingHorizontal && BaseSpacing[paddingHorizontal],
      paddingEnd: paddingEnd && BaseSpacing[paddingEnd],
      paddingTop: paddingTop && BaseSpacing[paddingTop],
      paddingVertical: paddingVertical && BaseSpacing[paddingVertical],
      flex: container ? 1 : undefined,
      backgroundColor,
    },
  });

  /**
   * Check if selected platform ist can be shown
   */
  const currentPlatform = platform?.some((v) => Platform.OS === v);

  if (currentPlatform !== undefined) {
    return currentPlatform ? (
      <View style={[styles.container, style]}>{children}</View>
    ) : null;
  } else {
    return <View style={[styles.container, style]}>{children}</View>;
  }
};

export default Box;
