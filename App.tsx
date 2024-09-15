import { View, StatusBar } from 'react-native';
import { GetStarted } from './src/screens/GetStarted';

export default function App() {
  return (
    <View className='flex-1'>
      <GetStarted/>
      <StatusBar backgroundColor="#FFE601" barStyle="dark-content" translucent />
    </View>
  );
}

