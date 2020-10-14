import React, {useEffect, useState} from 'react';
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
import Mypage from './mypage/Mypage';
import PointCharge from './mypage/PointCharge';
import Profile from './mypage/Profile';
import PointHistory from './mypage/PointHistory';
import Camera from './mypage/Camera';
import Rank from './Rank';
import MtRank from './MtRank';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

function App() {
  const [address, setAddress] = useState();

  useEffect(() => {
    // 지갑 주소 체크 후 없을 경우 시작하기, 있으면 홈화면으로
    AsyncStorage.getItem('address')
    .then(data => {
      if(data) setAddress(data);
    })

    // nfc 설정
    NfcManager.start();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      NfcManager.unregisterTagEvent().catch(() => 0);
      console.log(tag.id);

      NfcManager.registerTagEvent();
    });

    // nfc 태깅 이벤트 실행
    try {
      NfcManager.registerTagEvent();
    } catch (ex) {
      console.log('ex', ex);
      NfcManager.unregisterTagEvent().catch(() => 0);
    }

    // 스플래시 이미지 숨기기
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => NfcManager.unregisterTagEvent().catch(() => 0);
  }, []);

  return !address ? <Intro setAddress={setAddress} /> : (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Prepare" component={Prepare} />
        <Stack.Screen name="Guide" component={Guide} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Arrival" component={Arrival} />
        <Stack.Screen name="Map" component={CourseDetail} />
        <Stack.Screen name="Rank" component={Rank} />
        <Stack.Screen name="MtRank" component={MtRank} />
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
