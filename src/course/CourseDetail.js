import React, { useEffect, useState } from 'react';
import {Container, Content, Text, View, Button } from 'native-base';
import {StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import Footer from '../Footer';
import Popup1 from '../popup/Popup1';
import Moment from 'react-moment';
import 'moment-timezone';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function CourseDetail({navigation, route}) {
  const [score, setScore] = useState([]);
  const [course, setCourse] = useState();
  const [point, setPoint] = useState(0);
  
  // 확인할 지점 변경
  const pointList = d => {
    if(d.seq == course.courseDetail.length-1) {
      return (
        <TouchableOpacity style={{flex:1}} key={d.seq}>
          <View style={styles.circleDetail} key={d.seq}>
            <View style={score.score >= d.seq ? styles.circleCheck : styles.circle}></View>
            <Text style={styles.circleText} textBreakStrategy={'balanced'}>{d.name}</Text>
          </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={{flex:1}} key={d.seq} onPress={() => setPoint(d.seq)}>
          <View style={styles.circleDetail} key={d.seq}>
            <View style={score.score >= d.seq ? styles.circleCheck : styles.circle}></View>
            <Text style={styles.circleText} textBreakStrategy={'balanced'}>{d.name}</Text>
          </View>
        </TouchableOpacity>
      )
    }
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
    console.log(idx);
  }

  useEffect(() => {
    // 내 등산기록 가져오기
    axios.get(`https://whitedeer.herokuapp.com/score/${route.params.id}`)
    .then(({data}) => {
      setScore(data.score);

      // 코스 정보 가져오기
      axios.get(`https://whitedeer.herokuapp.com/course/${data.score.course.seq}`)
      .then(({data}) => {
        setCourse(data.course);
      })
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <Container>
      <View style={styles.container}>
        {course &&
          <>
            <View style={styles.First}>
              <Text style={styles.title}>{course.name}</Text>
            </View>
            {/* <View style={styles.item}>
              <View style={styles.circleItem}>
                {course.courseDetail.map(d => pointList(d))}
              </View>
            </View> */}
            {/* <View style={styles.trailLine} /> */}
            <View style={styles.Second}>
              <View style={styles.scoreView}>
                <Text style={styles.scoreIcon}>{course.courseDetail[point].name.replace(' ', '\n')}</Text>
              </View>
              <View style={styles.scoreView2}>
                <Text style={styles.scoreIcon}>▶</Text>
              </View>
              <View style={styles.scoreView}>
                <Text style={styles.scoreIcon}>{course.courseDetail[point+1].name.replace(' ', '\n')}</Text>
              </View>
            </View>
              
            <View style={styles.Third}>
              <View style={styles.ThirdOne}></View>
              
              <View style={styles.Third1}>
                <View style={styles.item}>
                  <View style={styles.circleItem}>
                    {course.courseDetail.map(d => pointList(d))}
                  </View>
                </View>
                {/* <View style={styles.trailLine} /> */}
              </View>

              <View style={styles.ThirdSec}></View>
              {/* <View style={styles.circleItem}>
                {course.courseDetail.map(d => pointList(d))}
              </View> */}

              <View style={styles.Third2}>
                <View style={styles.infoContent}>
                  <Text style={styles.time}>난이도</Text>
                  <Text style={styles.scoreTitle}>{course.courseDetail[point].difficulty}</Text>
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.time}>거리</Text>
                  <Text style={styles.scoreTitle}>{course.courseDetail[point].distance}km</Text>
                </View>
                <View style={styles.infoContent}>
                  <Text style={styles.time} >시간</Text>
                  <Text style={styles.scoreTitle}>{course.courseDetail[point].time}</Text>
                </View>
              </View>
            </View>
            <View stylle={styles.Fourth}>
              <Button onPress={() => giveupCheck(score.idx)} style={styles.giveupBtn}>
                <Text style={styles.giveupText}>그만두기</Text>
              </Button>
            </View>
          

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
      </View>
      <Footer navigation={navigation} value='3' />
    </Container>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  First: {
    display: 'flex',
    flex: 0.5,
    margin: 40,
    padding: 20,
  },
  Second: {
    flex:1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    textAlign:"center",
    // alignSelf:"center",
    // marginHorizontal: 20,
    marginBottom: 20,
    marginRight:20,
    marginLeft:20,
    backgroundColor:"#C3FFDE",
  },
  Third : {
    flex:5,
    flexDirection:"row",
    // position: "absolute",
    // flex:10,
  },
  ThirdOne:{
    flex:1,
    borderRightWidth:3,
    borderColor:"#1E824C",
  },
  ThirdSec:{
    flex:1,
    // borderLeftWidth:3,
    borderColor:"#1E824C",
  },
  Third1:{
    // flex:3,
    flex:0.000000000000000000000000000000000001,
    flexDirection:"column",
    borderLeftColor: '#1E824C',
    borderColor:'black',
    // borderWidth: 5,
  },
  Third2: {
    flex:6,
    flexDirection: 'column',
    // backgroundColor : "#26A65B",
    justifyContent: 'space-evenly',
    // marginBottom: 20
  },
  // infoContentTop: {
  //   flex:2,
  //   // marginBottom: 20,
  //   marginRight:20,
  //   flexDirection:"row",
  //   backgroundColor:"#74E0A4",    
  //   // paddingVertical: 17.2,
  //   alignItems: 'center',
  //   // marginHorizontal: 5,
  //   // fontStyle:"italic",
  //   // justifyContent: 'center'
  // },
  infoContent: {
    flex:2,
    // marginTop: 10,
    // marginBottom: 10,
    marginRight:20,
    margin:10,
    flexDirection:"row",
    backgroundColor:"#74E0A4",    
    // paddingVertical: 17.2,
    alignItems: 'center',
    // marginHorizontal: 5,
    // fontStyle:"italic",

    // justifyContent: 'center'
  },
  // infoContentBottom: {
  //   flex:2,
  //   // marginTop: 20,
  //   marginRight:20,
  //   flexDirection:"row",
  //   backgroundColor:"#74E0A4",    
  //   // paddingVertical: 17.2,
  //   alignItems: 'center',
  //   // marginHorizontal: 5,
  //   // fontStyle:"italic",

  //   // justifyContent: 'center'
  // },
  Fourth:{
    flex:0.8
  },
  title: {
    fontFamily: 'DungGeunMo',
    fontSize: 36,
    color: '#1E824C',
    textAlign: 'center'
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
    fontSize: 20,
    fontFamily: 'DungGeunMo',
    textAlign: 'center'
  },
  scoreView: {
    fontSize: 40,
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 40,
    textAlign:"center"
  },
  scoreView2: {
    fontSize: 40,
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 40,
    textAlign:"center"
  },
  scoreImg: {
    flex: 1,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  scoreTitle: {
    fontFamily: 'DungGeunMo',
    fontSize: 26,
    color: '#181717',
    marginBottom: 10,
    flex:3,
    flexDirection:"column",
    textAlign:"center"
    // textAlign:"center",
  },
  time: {
    // alignItems: 'flex-end',
    fontFamily: 'DungGeunMo',
    fontSize: 24,
    flex:2,
    flexDirection:"column",
    textAlign:"center"
    // textAlign:"center",
    // paddingTop: 10
  },
  giveupBtn: {
    textAlign: 'center',
    backgroundColor: '#1E824C',
    alignSelf: 'center',
    marginVertical: 40,
  },
  giveupText: {
    fontSize: 26,
    fontFamily: 'DungGeunMo',
    textAlign: 'center',
    color: '#FFF',
  },
  item: {
    // margin: 10,
    // marginBottom: 100,
  },
  trailLine: {
    borderLeftColor: '#1E824C',
    borderLeftWidth: 5,
    position:"relative",
    // marginHorizontal: 10,
    // borderStyle: 'dashed',
    // marginTop: 20,
    // borderRadius: 1,
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F5E51B',
    borderWidth: 3.5,
    borderColor: '#1E824C',
  },
  circleCheck: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F5E51B',
    borderWidth: 3.5,
    borderColor: '#1E824C',
  },
  circleItem: {
    flexDirection: "column",
    // position: "absolute",
    justifyContent:"space-evenly",
    height: hp('56%'),
    
    // alignItems:"center"
    // marginTop: 14
  },
  circleDetail: {
    flex: 1,
    alignItems: 'center'
  },
  circleText: {
    fontFamily: 'NotoSansKR-Regular',
    color: '#181717',
    fontSize: 14,
    textAlign: 'center'
  },
})