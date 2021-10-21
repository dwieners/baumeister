import { Platform } from 'react-native';

const isAndroid: boolean = Platform.OS === 'android';
const isIOS: boolean = Platform.OS === 'ios';

const Constants = {
  isAndroid,
  isIOS,
};

export default Constants;
