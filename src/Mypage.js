import React from 'react';
import {Container, Content, Text, View} from 'native-base';
import Footer from './Footer';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Mypage({navigation}){
  return (
    <Container>
      <Content>
        <View style={styles.header}><Text>마이페이지</Text></View>
        <View style={styles.profile}><Text>hi</Text></View>
        <View style={styles.header}><Text>개인 정보 관리</Text></View>
        <View style={styles.lineT} />
        <TouchableHighlight style={styles.header} onPressOut={() => navigation.navigate('Camera')} underlayColor="green"><Text>프로필 사진 변경</Text></TouchableHighlight>
        <View style={styles.lineT} />
        <TouchableHighlight style={styles.header} onPressOut={() => navigation.navigate('Profile')} underlayColor="green"><Text>프로필 정보 수정</Text></TouchableHighlight>
        <View style={styles.lineB}/>
        <View style={styles.header}><Text>포인트 관리</Text></View>
        <View style={styles.lineT} />
        <TouchableHighlight style={styles.header} onPressOut={() => navigation.navigate('PointCharge')} underlayColor="green"><Text>포인트 충전</Text></TouchableHighlight>
        <View style={styles.lineT} />
        <TouchableHighlight style={styles.header} onPressOut={() => navigation.navigate('PointHistory')} underlayColor="green"><Text>포인트 내역</Text></TouchableHighlight>
        <View style={styles.lineB} />
      </Content>
      <Footer navigation={navigation} value="5" />
    </Container>
  );
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header:{
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile:{
    flex: 1,
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'gray'
  },
  other:{
    flex:3,
    backgroundColor: 'white',
  },
  lineT:{
    height: hp('0.2%'),
    backgroundColor: 'gray'
  },
  lineB:{
    height: hp('2%'),
    backgroundColor: 'gray'
  }
})