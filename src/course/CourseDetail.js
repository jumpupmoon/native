import React, { useEffect, useState } from 'react';
import {Container, Content, Text} from 'native-base';
import axios from 'axios';
import Footer from '../Footer';
import Popup1 from '../popup/Popup1';
import AsyncStorage from '@react-native-community/async-storage';
import data from '../Mountain.json';
import Moment from 'react-moment';
import 'moment-timezone';

export default function CourseDetail({navigation, route}) {
  const [score, setScore] = useState([]);

  const timeText = date => {
    return (
      <Moment element={Text} date={new Date(Number(date) * 1000)} format='YY.MM.DD HH:mm' tz='Asia/Seoul' />
    )
  }

  useEffect(() => {
    AsyncStorage.getItem('address')
    .then(address => {
      axios.get(`https://whitedeer.herokuapp.com/score?address=${address}&idx=${route.params}`)
      .then(({data}) => {
        setScore(data);
      })
      .catch(err => console.log(err));
    })
  }, [])

  return (
    <Container>
        <Content>
            {score[0] &&
              <>
                <Text>선택코스 : {data[score[0]].name}</Text>
                <Text>시작시간 : {timeText(score[1])}</Text>
                
                {score[2] != 0 ?
                  <>
                    <Text>종료지점 : {score[2]}</Text>
                    <Text>종료시간 : {timeText(score[3])}</Text>
                  </>
                  :
                    <Popup1 idx={route.params} />
                }
              </>
            }
        </Content>
        
        <Footer navigation={navigation} value='3' />
    </Container>
  );
};