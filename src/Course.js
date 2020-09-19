import React, { useEffect, useState } from 'react';
import {Container, Content, Text, Button} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Footer from './Footer';

export default function Course({navigation}) {
  const [count, setCount] = useState(0);

  // 등산횟수만큼 버튼 반복
  const forButton = num => {
    let result = [];

    for(let i=0; i<num; i++) {
      result.push(
        <Button key={i} onPress={() => navigation.navigate('CourseDetail', i)}> 
          <Text>등산 기록 {i}</Text>
        </Button>
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
        setCount(data.result);
      })
      .catch(err => console.log(err));
    })
  }, [navigation])

  return (
    <Container>
        <Content>
            <Text>현재 등산 수 : {count}</Text>

            {forButton(count)}
        </Content>
        
        <Footer navigation={navigation} value='3' />
    </Container>
  );
};