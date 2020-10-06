import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from './Intro';
import Home from './Home';
import Info from './info/Info';
import Course from './course/Course';
import CourseDetail from './course/CourseDetail';
import Prepare from './info/Prepare';
import Guide from './info/Guide';
import Test from './Test';
import Arrival from './Arrival';
import Mypage from './Mypage';
import PointCharge from './PointCharge';
import Profile from './Profile';
import PointHistory from './PointHistory';
import Camera from './Camera';

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
      <Stack.Navigator headerMode="none" initialRouteName="Map">
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Prepare" component={Prepare} />
        <Stack.Screen name="Guide" component={Guide} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Arrival" component={Arrival} />
        <Stack.Screen name="Map" component={CourseDetail} />
        <Stack.Screen name="Mypage" component={Mypage} />
        <Stack.Screen name="PointCharge" component={PointCharge} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="PointHistory" component={PointHistory} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
