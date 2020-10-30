import React, {useState, useEffect} from 'react';
import { Container, Content, Text, View } from 'native-base';
import Footer from '../Footer';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Camera from './Camera';
import Loading from '../Loading';
import axios from 'axios';

export default function Mypage({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://whitedeer.herokuapp.com/course')
    .then(({data}) => {
      setLoading(false);
    })
  }, [])

  return loading ? 
  <Loading navigation={navigation} value='5'/>
: (
    <Container>
      <Content>
        <View style={styles.header}>
          <Text style={styles.headerText}>마이페이지</Text>
        </View>
        <View style={styles.profile}><Camera /></View>
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