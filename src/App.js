import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import AsyncStorage from '@react-native-community/async-storage';
import EventEmitter from "react-native-eventemitter";
import axios from 'axios';
import {Alert, View, LogBox} from 'react-native';
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
import Loading from './Loading';

const Stack = createStackNavigator();
// 경고창 보지 않기
LogBox.ignoreAllLogs();

export default function App() {
  const [address, setAddress] = useState();
  const [pendding, setPendding] = useState(false);

  // 페이지 이동을 위한 객체 변수
  let nav;
  // 등산기록 업데이트 체크 변수
  let pointFlag = false;

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
        if(data.result > 0) {
          if(score > 0) pointFlag = true;
          setPendding(false);
          
          // 화면 이동을 위해 강제 지연
          setTimeout(() => {
            nav.reset({routes: [{ name: 'Map', params: {id: data.id, token: data.token, finish: data.finish} }]});
            NfcManager.registerTagEvent();
          }, 10)
        }
      })
    })
  }

  // nfc 관련 함수
  const nfcSetting = () => {
    // nfc 설정
    NfcManager.start();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      if(pendding) return
      setPendding(true);
      NfcManager.unregisterTagEvent().catch(() => 0);

      // nfc id로 코스 정보 받아오기
      if(tag.id) {
        axios.get(`https://whitedeer.herokuapp.com/nfc/${tag.id}`)
        .then(async ({data}) => {          
          // 시작 포인트가 아닐 때 서버로 업데이트 요청
          await data.point.map(p => {
            if(p.seq) {
              courseStart(p.seq, p.course.seq);
            }
          })

          // 시작 포인트가 아닐 경우 함수 종료
          if(data.point[0].seq > 0) {
            // 기록 업데이트를 했을 경우
            if(pointFlag) {
              pointFlag = false;
            // 잘못된 포인트 NFC 태깅 시
            } else {
              alert('현재 기록 중인 경로가 아닙니다')
              NfcManager.registerTagEvent();
              setPendding(false);
            }
            return;
          }

          // 알럿창에 취소 버튼 추가
          let alertBtn = [{ text: "취소", style: "cancel", onPress: () => {
            setPendding(false);
            NfcManager.registerTagEvent()
          }}];
          
          // 탐방로 시작 버튼 추가
          data.point.map(p => {
            alertBtn.push({ text: p.course.name, onPress: () => courseStart(p.seq, p.course.seq)})
          })

          // 태깅 후 확인 알림창
          Alert.alert(
            '기록하실 탐방로를 선택해주세요',
            '',
            alertBtn,
            { cancelable: false }
          )
        })
        .catch(err => alert(err));
      }
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
    
    return () => NfcManager.unregisterTagEvent().catch(() => 0);
  }, []);

  return !address ? <Intro setAddress={setAddress} /> : pendding ? 
    <Loading />
  : (
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
