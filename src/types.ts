import type {
  ColorValue,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

export const BaseSpacing: SpacingType = {
  s: 8,
  l: 16,
  m: 24,
  xl: 32,
  xxl: 64,
};

export type SpacingType = {
  s: number;
  l: number;
  m: number;
  xl: number;
  xxl: number;
};

export type RadiusType = {
  s: number;
  l: number;
  m: number;
  xl: number;
  xxl: number;
};

/**
 * Get keys of RN styles props
 */

export type RNStyle = ViewStyle | TextStyle | ImageStyle;

export type RNStyleProperty =
  | keyof ViewStyle
  | keyof TextStyle
  | keyof ImageStyle;

/**
 * Define radius props
 */
export const radiusProperties = {
  borderRadius: true,
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
};

/**
 * Define spacing props
 */
export const spacingProperties = {
  padding: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  paddingHorizontal: true,
  paddingVertical: true,
  paddingStart: true,
  paddingEnd: true,
};

/**
 * Create spacing props by spacingProperties
 */

export type SpacingProps = {
  [Key in keyof typeof spacingProperties]?: keyof SpacingType;
};

/**
 * Create radius props by radiusProperties
 */
export type RadiusProps = {
  [Key in keyof typeof radiusProperties]?: keyof SpacingType;
};

/**
 * Create container props
 */
export type ContainerProps = {
  container?: boolean;
  backgroundColor?: ColorValue;
};
