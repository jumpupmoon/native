import React, { useEffect, useState } from 'react';
import {Container, Content, Text, Button} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Footer from './Footer';
import {StyleSheet, View} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Course({navigation}) {
  const [score, setScore] = useState([]);
  const [count, setCount] = useState(0);

  // 등산횟수만큼 버튼 반복
  const forButton = num => {
    let result = [];

    for(let i=0; i<num; i++) {
      result.push(
        <View style={styles.buttonView}>
        <Button style={styles.button} key={i} onPress={() => navigation.navigate('CourseDetail', i)}> 
          <Text style={styles.buttonTitle}>등산 기록 {i}</Text>
        </Button>
        </View>
      )
    }
    return result;
  }

  // 저장된 지갑 주소로 등산 횟수 찾아오기
  useEffect(() => {
    AsyncStorage.getItem('address')
    .then(address => {
      axios.get(`https://whitedeer.herokuapp.com/list/${address}`)
      .then(({data}) => {
        setCount(data.count)
        setScore(data.score);
      })
      .catch(err => console.log(err));
    })
  }, [navigation])

  return (
    <Container>
        <Content>
            <Text style={styles.Title}>현재 등산 수 : {count}</Text>
            {score.map(s => (
              <View style={styles.buttonView} key={s.idx}>
                <Button style={styles.button} onPress={() => navigation.navigate('Map', s.idx)}> 
                  <Text style={styles.buttonTitle}>등산 기록</Text>
                </Button>
              </View>
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
    backgroundColor:'#1E824C',
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