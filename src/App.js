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
import EventEmitter from "react-native-eventemitter";
import axios from 'axios';
import {Alert} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [address, setAddress] = useState();
  // 페이지 이동을 위한 객체 변수
  let nav;

  // 코스 정보 등록 및 페이지 이동
  const courseStart = (score, course) => {
    AsyncStorage.getItem('address')
    .then(address => {
      axios.post('https://whitedeer.herokuapp.com/score', {
        address,
        score,
        course
      })
      .then(({data}) => {
        if(data.result > 0) nav.reset({routes: [{ name: 'Map', params: data.id }]});
        
        NfcManager.registerTagEvent();
      })
    })
  }

  // nfc 관련 함수
  const nfcSetting = () => {
    // nfc 설정
    NfcManager.start();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      NfcManager.unregisterTagEvent().catch(() => 0);
      
      // nfc id로 코스 정보 받아오기
      if(tag.id) {
        axios.get(`https://whitedeer.herokuapp.com/nfc/${tag.id}`)
        .then(({data}) => {
          // 시작 포인트가 아닐 때 서버로 업데이트 요청
          if(data.point.seq) {
            courseStart(data.point.seq, data.point.course.seq);
            return NfcManager.registerTagEvent();
          } 

          // 시작 포인트 일 경우 코스 시작 알림창
          Alert.alert(
            `${data.point.course.name}\n기록을 시작하시겠습니까?`,
            "",
            [
              { text: "취소", style: "cancel", onPress: () => NfcManager.registerTagEvent() },
              { text: "시작하기", onPress: () => courseStart(data.point.seq, data.point.course.seq) }
            ],
            { cancelable: false }
          )
        })
        .catch(err => alert(err));
      }
      // console.log(tag.id === '04B0A1B2C65B80');
      // console.log(tag.id === '04A30DB2C65B80');
    });

    // nfc 태깅 이벤트 실행
    try {
      NfcManager.registerTagEvent();
    } catch (ex) {
      console.log('ex', ex);
      NfcManager.unregisterTagEvent().catch(() => 0);
    }
  }

  useEffect(() => {
    // nfc 태깅 후 이동을 위해 home.js에서 navigation 받아오기
    EventEmitter.on('nfcNav', homeNav => {
      nav = homeNav;
    });

    // 지갑 주소 체크 후 없을 경우 시작하기, 있으면 홈화면으로
    AsyncStorage.getItem('address')
    .then(address => {
      if(address) {
        setAddress(address);
        // 지갑 주소가 있을 경우 nfc 관련 함수 실행
        nfcSetting();
      }
    })

    // 스플래시 이미지 숨기기
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    
    return () => {
      EventEmitter.removeListener('nfcNav');
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
      NfcManager.unregisterTagEvent().catch(() => 0);
    }
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
