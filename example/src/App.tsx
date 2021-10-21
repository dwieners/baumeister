import * as React from 'react';
import { useEffect, useRef } from 'react';

import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput as NativeTextInput,
} from 'react-native';
import {
  BaseSpacing,
  Box,
  Button,
  Divider,
  Spacer,
  TextInput,
} from 'baumeister';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const emailRef = useRef<NativeTextInput>(null);
  const passwordRef = useRef<NativeTextInput>(null);

  useEffect(() => {
    passwordRef.current?.focus();
  }, []);
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <KeyboardAvoidingView behavior={'position'}>
          <Box padding={'m'}>
            <Text>Hello Baumeister!</Text>
            <Spacer height={BaseSpacing.m} />
            <Divider />
            <TextInput
              ref={emailRef}
              placeholder={'Email'}
              placeholderTextColor={'#aaa'}
              returnKeyType={'next'}
              onEndEditing={() => passwordRef.current?.focus()}
            />
            <Divider />
            <TextInput
              ref={passwordRef}
              placeholder={'Password'}
              returnKeyType={'done'}
              placeholderTextColor={'#aaa'}
            />
            <Divider />
            <Spacer height={BaseSpacing.m} />
            <Button
              title={'Senden'}
              onPress={() => console.log('Press')}
              uppercase
              labelStyle={{ fontWeight: 'bold' }}
              contentStyle={{ borderRadius: 10 }}
            />
          </Box>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
