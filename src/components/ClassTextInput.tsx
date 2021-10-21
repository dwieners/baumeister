import React from 'react';

import {
  StyleSheet,
  TextInput as NativeTextInput,
  TextInputProps as RNTextInputProps,
  ViewProps,
} from 'react-native';

/**
 * Use RNTextInput to create refs
 */

type TextInputProps = React.ComponentPropsWithRef<typeof NativeTextInput> &
  RNTextInputProps &
  ViewProps;

const styles = StyleSheet.create({
  container: {
    height: 50,
    padding: 16,
  },
});

class ClassTextInput extends React.Component<
  TextInputProps,
  typeof NativeTextInput
> {
  private root: NativeTextInput | undefined | null;

  forceFocus = () => {
    return this.root?.focus();
  };

  /**
   * @internal
   */
  setNativeProps(args: Object) {
    return this.root && this.root.setNativeProps(args);
  }

  /**
   * Returns `true` if the input is currently focused, `false` otherwise.
   */
  isFocused() {
    return this.root && this.root.isFocused();
  }

  /**
   * Removes all text from the TextInput.
   */
  clear() {
    return this.root && this.root.clear();
  }

  /**
   * Focuses the input.
   */
  focus() {
    return this.root && this.root.focus();
  }

  /**
   * Removes focus from the input.
   */
  blur() {
    return this.root && this.root.blur();
  }

  render() {
    const { ...rest } = this.props;
    return (
      <NativeTextInput
        {...rest}
        style={[styles.container, this.props.style]}
        ref={(ref) => {
          this.root = ref;
        }}
      />
    );
  }
}

export default ClassTextInput;
