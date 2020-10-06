import React, { useEffect, useState } from 'react';
import {Container, Content, Text, View } from 'native-base';
import {StyleSheet, Image} from 'react-native';
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
      <Moment element={Text} date={new Date(Number(date) * 1000)} format='YY.MM.DD HH:mm' tz='Asia/Seoul' style={styles.time} />
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
              <View style={styles.courses}>
                <Text style={styles.title}>{data[score[0]].name}</Text>

                <View style={styles.time}>
                  {timeText(score[1])}
                </View>
              </View>              

              {/* {score[2] != 0 ?
                <>
                  <Text>종료지점 : {score[2]}</Text>
                  <Text>종료시간 : {timeText(score[3])}</Text>
                </>
                :
                  <Popup1 idx={route.params} />
              } */}
            </>
          }

          <View style={styles.course}>
            <Text style={styles.title}>성판악코스</Text>

            <View style={styles.time}>
              <Text style={styles.time}>20.10.06 18:03</Text>
            </View>
          </View>

          <View style={styles.imglist}>
            <Image style={styles.img} source={require('../img/관음사.jpg')} />
            <Image style={styles.img} source={require('../img/어승생악.jpg')} />
            <Image style={styles.imgCheck} source={require('../img/석굴암.png')} />
            <Image style={styles.img} source={require('../img/돈내코.jpg')} />
            <Image style={styles.img} source={require('../img/어리목.jpg')} />
          </View>

          <View style={styles.score}>
            <Image style={styles.scoreImg} source={require('../img/석굴암.png')} />
            <View style={styles.scoreView}>
              <Text style={styles.scoreIcon}>▶</Text>
            </View>
            <Image style={styles.scoreImg} source={require('../img/돈내코.jpg')} />
          </View>

          <View style={styles.info}>
            <View style={styles.infoContent}>
              <Text style={styles.time}>거리</Text>
              <Text style={styles.time}>2.3km</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.time}>평균 소요</Text>
              <Text style={styles.time}>1시간 30분</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.time}>난이도</Text>
              <Text style={styles.time}>어려움</Text>
            </View>
          </View>
        </Content>
        
        <Footer navigation={navigation} value='3' />
    </Container>
  );
};

const styles = StyleSheet.create({
  course: {
    display: 'flex',
    flex: 1,
    margin: 20,
    borderColor: '#404040',
    borderWidth: 3,
    borderRadius: 10,
    padding: 20
  },
  title: {
    alignItems: 'flex-start',
    fontFamily: 'DungGeunMo',
    fontSize: 30,
    color: '#181717',
  },
  time: {
    alignItems: 'flex-end',
    fontFamily: 'DungGeunMo',
    fontSize: 20,
    paddingTop: 10
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoContent: {
    borderColor: '#404040',
    borderWidth: 3,
    borderRadius: 10,
    padding: 10
  },
  imglist: {
    flexDirection: 'row',
    margin: 20
  },
  img: {
    flex: 1,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    backgroundColor: 'white',
    opacity: 0.5
  },
  imgCheck: {
    flex: 1,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  score: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 20
  },
  scoreIcon: {
    fontSize: 40
  },
  scoreView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreImg: {
    flex: 1,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
})