import React, { useEffect, useState } from 'react';
import {Container, Content, Text, Button} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Footer from './Footer';
import {StyleSheet, View, ImageBackground} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Course({navigation, route}) {
  const [score, setScore] = useState([]);
  const [count, setCount] = useState(0);

  const imgList = [
    '',
    require('./img/영실.jpg'),
    require('./img/관음사.jpg'),
    require('./img/성판악.jpg')
  ]

  // 저장된 지갑 주소로 등산 횟수 찾아오기
  useEffect(() => {
    AsyncStorage.getItem('address')
    .then(address => {
      axios.get(`https://whitedeer.herokuapp.com/list/${address}`)
      .then(({data}) => {
        setCount(data.score[0]);

        let output = [];
        for(let i=0; i<5; i++) {
          if(data.score[1][i] == 0) break;
          output.push([
            data.score[0]-(1+i), // 인덱스 번호
            data.score[1][i], // 선택한 코스 번호
            data.score[2][i], // 마지막 지점
            data.score[3][i], // 시작 시간
            data.score[4][i] // 마지막 시간
          ]);
        }
        setScore(output);
      })
      .catch(err => console.log(err));
    })
  }, [navigation])

  return (
    <Container>
        <Content>
            <Text style={styles.Title}>현재 등산 수 : {count}</Text>
            {score.map(s => (
              <ImageBackground style={styles.buttonView} key={s[0]} source={imgList[s[1]]}>
                <Button style={styles.button} onPress={() => navigation.navigate('Map', s[0])}> 
                  <Text style={styles.buttonTitle}>등산 기록 {s[0]+1}</Text>
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