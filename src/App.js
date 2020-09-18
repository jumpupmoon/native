import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './Intro';
import Home from './Home';
import Info from './Info';
import Course from './Course';

const Stack = createStackNavigator();

function App() {
  // 스플래시 이미지 숨기기
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName="Intro">
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Course" component={Course} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
