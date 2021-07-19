import type { ColorValue } from 'react-native';

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

export type BaseConfig = {
  spacing: SpacingType;
};

const radiusProperties = {
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

const spacingProperties = {
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

export type SpacingProps = {
  [Key in keyof typeof spacingProperties]?: keyof SpacingType;
};

export type RadiusProps = {
  [Key in keyof typeof radiusProperties]?: keyof SpacingType;
};

export type ContainerProps = {
  container?: boolean;
  backgroundColor?: ColorValue;
};
