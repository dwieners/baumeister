import * as React from 'react';

import { SafeAreaView, Text } from 'react-native';
import { Box } from 'baumeister';

const App = () => {
  return (
    <SafeAreaView>
      <Box
        paddingHorizontal={'m'}
        paddingVertical={'m'}
        backgroundColor={'red'}
      >
        <Text>Hello Baumeister!</Text>
      </Box>
    </SafeAreaView>
  );
};

export default App;
