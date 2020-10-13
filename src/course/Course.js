import React, { useEffect, useState } from 'react';
import {Container, Content, Text, Button} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Footer from '../Footer';
import {StyleSheet, View, ImageBackground} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Course({navigation, route}) {
  const [score, setScore] = useState([]);
  const [count, setCount] = useState(0);

  const imgList = [
    require('../img/돈내코.jpg'),
    require('../img/영실.jpg'),
    require('../img/관음사.jpg'),
    require('../img/성판악.jpg'),
    require('../img/어리목.jpg'),
    require('../img/석굴암.png'),
    require('../img/어승생악.jpg'),
  ]

  // 지갑 주소로 등산 기록 찾아오기
  useEffect(() => {
    AsyncStorage.getItem('address')
    .then(address => {
      axios.get(`https://whitedeer.herokuapp.com/list/${address}`)
      .then(({data}) => {
        setScore(data.scores);
      })
      .catch(err => console.log(err));
    })
  }, [navigation])

  return (
    <Container>
        <Content>
          <Text style={styles.Title}>현재 등산 수 : {score.length}</Text>

          {score.map((s, idx) => (
            <ImageBackground style={styles.buttonView} key={idx} source={imgList[s.course.seq]}>
              <Button style={styles.button} onPress={() => navigation.navigate('Map', s._id)}> 
                <Text style={styles.buttonTitle}>등산 기록 {score.length - idx}</Text>
              </Button>
            </ImageBackground>
          ))}
        </Content>
        
        <Footer navigation={navigation} value='3' />
    </Container>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    fontFamily: 'DungGeunMo',
    textAlign:'right',
    color: '#181717',
    marginRight:20,
    marginVertical: 20,
  },
  buttonView:{
    alignSelf:'center',
    alignContent:'center',
    alignItems:'center',
    margin:10,
    height: hp('20%'),
    width: wp('90%'),
  },
  button:{
    backgroundColor:'#26A65B'
  },
  buttonTitle:{
    fontSize: 26,
    fontFamily: 'DungGeunMo', 
    textAlign: 'center', 
    color: '#FFF',
  }
});