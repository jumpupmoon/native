import React, { useEffect, useState } from 'react';
import { Container, Content, Text, View } from 'native-base';
import Footer from '../Footer';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Camera from './Camera';

export default function Mypage({ navigation }) {

  const [amount, setAmount]= useState();

  useEffect(() => {                                                 
    AsyncStorage.getItem('address')
    .then(address => {
      console.log(address)
      axios.get(`https://whitedeer.herokuapp.com/token/${address}`)
      .then(({data}) => {
        console.log(data.token);
        setAmount(data.token);
      })
      .catch(err => console.log(err));
    })
  }, [])

  return (
    <Container>
      <Content>
        <View style={styles.header}>
          <Text style={styles.headerText}>마이 페이지 </Text>
        </View>
        <View style={styles.profile}>
          <Text style={styles.headerText}>토큰 개수 : {amount} </Text>
          <Text style={styles.headerText}>닉네임 : </Text>
        </View>
        <View style={styles.list}><Text style={styles.text} >개인 정보 관리</Text></View>
        <View style={styles.lineT} />
        <TouchableHighlight style={styles.list} onPressOut={() => navigation.navigate('Camera')} underlayColor="green"><Text style={styles.text}>프로필 사진 변경</Text></TouchableHighlight>
        <View style={styles.lineT} />
        <TouchableHighlight style={styles.list} onPressOut={() => navigation.navigate('Profile')} underlayColor="green"><Text style={styles.text}>프로필 정보 수정</Text></TouchableHighlight>
        <View style={styles.lineB} />
        <View style={styles.list}><Text style={styles.text}>포인트 관리</Text></View>
        <View style={styles.lineT} />
        <TouchableHighlight style={styles.list} onPressOut={() => navigation.navigate('PointCharge')} underlayColor="green"><Text style={styles.text}>포인트 충전</Text></TouchableHighlight>
        <View style={styles.lineT} />
        <TouchableHighlight style={styles.list} onPressOut={() => navigation.navigate('PointHistory')} underlayColor="green"><Text style={styles.text}>포인트 내역</Text></TouchableHighlight>
        <View style={styles.lineB} />
      </Content>
      <Footer navigation={navigation} value="5" />
    </Container>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    padding: 20,
    backgroundColor: '#1E824C',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'DungGeunMo'
  },
  list: {
    height: hp('8.58%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontFamily: 'DungGeunMo',
  },
  profile: {
    flex: 1,
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  },
  other: {
    flex: 3,
    backgroundColor: 'white',
  },
  lineT: {
    height: hp('0.2%'),
    backgroundColor: 'gray'
  },
  lineB: {
    height: hp('2%'),
    backgroundColor: 'gray'
  }
})