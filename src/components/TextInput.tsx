import React from 'react';
import { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
} from 'react-native';

const TextInput = forwardRef<RNTextInput, TextInputProps>((props, ref) => {
  const styles = StyleSheet.create({
    container: {
      height: 50,
    },
  });

  return (
    <RNTextInput {...props} ref={ref} style={[styles.container, props.style]} />
  );
});

export default TextInput;
