import React, { useEffect, useState } from 'react';
import {Container, Content, Text, View, Button } from 'native-base';
import {StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import Footer from '../Footer';
import Popup1 from '../popup/Popup1';
import AsyncStorage from '@react-native-community/async-storage';
import data from '../Mountain.json';
import Moment from 'react-moment';
import 'moment-timezone';

export default function CourseDetail({navigation, route}) {
  const [score, setScore] = useState([]);
  const [point, setPoint] = useState(0);

  const imgList = [
    require('../img/돈내코.jpg'),
    require('../img/영실.jpg'),
    require('../img/관음사.jpg'),
    require('../img/성판악.jpg'),
    require('../img/어리목.jpg'),
  ]

  // 확인할 지점 변경
  const pointChange = idx =>{
    if(idx == imgList.length-1) return;
    setPoint(idx);
  }

  // 시간 표기 컴포넌트
  const timeText = date => {
    return (
      <Moment element={Text} date={new Date(Number(date) * 1000)} format='YY.MM.DD HH:mm' tz='Asia/Seoul' style={styles.time} />
    )
  }

  // 포기하기 확인 창
  const giveupCheck = idx => Alert.alert(
    "정말 그만두시겠습니까?",
    "",
    [
      { text: "취소", style: "cancel" },
      { text: "그만두기", onPress: () => giveup(idx) }
    ],
    { cancelable: false }
  );

  // 포기하기 처리
  const giveup = idx => {
    console.log(idx)
  }

  useEffect(() => {
    AsyncStorage.getItem('address')
    .then(address => {
      axios.get(`https://whitedeer.herokuapp.com/score?address=${address}&idx=${route.params}`)
      .then(({data}) => {
        setScore(data);
        setPoint(Number(data[2]))
      })
      .catch(err => console.log(err));
    })
  }, [])

  return (
    <Container>
        <Content>
          {score[0] &&
            <>
              <View style={styles.course}>
                <Text style={styles.title}>{data[score[0]].name}</Text>

                <View style={styles.time}>
                  {timeText(score[1])}
                </View>
              </View>

              <View style={styles.imglist}>
                {imgList.map((img, idx) => (
                  <TouchableOpacity style={{flex:1}} key={idx} onPress={() => pointChange(idx)}>
                    <Image style={score[2] == idx ? styles.imgCheck : styles.img} source={img} />
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.score}>
                <Image style={styles.scoreImg} source={imgList[point]} />
                <View style={styles.scoreView}>
                  <Text style={styles.scoreIcon}>▶</Text>
                </View>
                <Image style={styles.scoreImg} source={imgList[point+1]} />
              </View>

              <View style={styles.scoreInfo}>
                <View style={styles.scoreView}>
                  <Text style={styles.time}>{point+1} 지점</Text>
                </View>
                <View style={styles.scoreView} />
                <View style={styles.scoreView}>
                  <Text style={styles.time}>{point+2} 지점</Text>
                </View>
              </View>

              <View style={styles.info}>
                <View style={styles.infoContent}>
                  <Text style={styles.scoreTitle}>난이도</Text>
                  <Text style={styles.time}>어려움</Text>
                </View>

                <View style={styles.infoContent}>
                  <Text style={styles.scoreTitle}>거리</Text>
                  <Text style={styles.time}>2.3km</Text>
                </View>

                <View style={styles.infoContent}>
                  <Text style={styles.scoreTitle}>예상 시간</Text>
                  <Text style={styles.time}>1시간 30분</Text>
                </View>
              </View>

              <Button onPress={() => giveupCheck(score.idx)} style={styles.giveupBtn}>
                <Text style={styles.giveupText}>그만두기</Text>
              </Button>

              {/* {score[2] != 0 ?
                  <Text>종료지점 : {score[2]}</Text>
                <>
                  <Text>종료시간 : {timeText(score[3])}</Text>
                </>
                :
                  <Popup1 idx={route.params} />
              } */}
            </>
          }
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
    padding: 20,
  },
  title: {
    alignItems: 'flex-start',
    fontFamily: 'DungGeunMo',
    fontSize: 30,
    color: '#181717',
    marginBottom: 20
  },
  time: {
    alignItems: 'flex-end',
    fontFamily: 'DungGeunMo',
    fontSize: 16,
    // paddingTop: 10
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoContent: {
    flex:1,
    borderColor: '#404040',
    borderWidth: 3,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  imglist: {
    flexDirection: 'row',
    margin: 20
  },
  img: {
    width:'100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    backgroundColor: 'white',
    opacity: 0.5
  },
  imgCheck: {
    width:'100%',
    direction: "inherit",
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  score: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 20,
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
  scoreInfo: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 40,
  },
  scoreTitle: {
    fontFamily: 'DungGeunMo',
    fontSize: 20,
    color: '#181717',
    marginBottom: 10
  },
  giveupBtn: {
    textAlign: 'center',
    backgroundColor: '#1E824C',
    alignSelf: 'center',
    marginTop: 40,
  },
  giveupText: {
    fontSize: 26,
    fontFamily: 'DungGeunMo',
    textAlign: 'center',
    color: '#FFF',
  }
})