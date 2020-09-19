import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './Intro';
import Home from './Home';
import Info from './Info';
import Course from './Course';
import CourseDetail from './CourseDetail';
import InfoDetail from './InfoDetail';
import CourseNFC from './CourseNFC';
import CourseSuccess from './CourseSuccess';

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
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
        <Stack.Screen name="InfoDetail" component={InfoDetail} />
        <Stack.Screen name="CourseNFC" component={CourseNFC} />
        <Stack.Screen name="CourseSuccess" component={CourseSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;