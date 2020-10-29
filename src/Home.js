import React, {useState, useEffect} from 'react';
import {Image, Platform,Text,View, StyleSheet,TouchableOpacity} from 'react-native';
import {Container } from 'native-base';
import { SliderBox } from 'react-native-image-slider-box';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Footer from './Footer';
import EventEmitter from "react-native-eventemitter";
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios';
import Loading from './Loading';

export default function Layout({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [score, setScore] = useState();
  const [loading, setLoading] = useState(true);

  const [imageList, setImageList] = useState([
    require('./img/1.jpg'),
    require('./img/2.jpg'),
    require('./img/3.jpg'),
  ]);
  function increment() {
    setCurrentIndex((currentIndex) => currentIndex + 1);
  }

  // nfc 인식 시 화면 이동을 위해 app.js로 navigation 전달
  useEffect(() => {
    EventEmitter.emit('nfcNav', navigation);

    // 등산기록 가져오기
    AsyncStorage.getItem('address')
    .then(address => {
      axios.get(`https://whitedeer.herokuapp.com/list/${address}`)
      .then(({data}) => {
        setScore(data.scores[0]);
        setLoading(false);
      })
      .catch(err => console.log(err));
    })
  }, [])

  return loading ? 
    <Loading navigation={navigation} value='1' />
  : (
    <Container>
      <View style={styles.container}>
        <View style={styles.First}>
          {/* <Image style={styles.FirstImage}
            source={require('./img/영실.jpg')}>
          </Image> */}
          <SliderBox 
            autoplay={true} //자동 슬라이드 넘김
            circleLoop={true} //맨끝 슬라이드에서 다시 첫슬라이드로
            resizeMode="cover" // 이미지 사이즈 조절값
            images={imageList} // 이미지 주소 리스트
            dotColor="rgba(0,0,0,0)" // 아래 점 투명으로 안보이게 가림
            inactiveDotColor="rgba(0,0,0,0)"
            ImageComponentStyle={{
              width: wp('100%')-20,
              height: '100%',
              borderRadius: 5,
              // margin:10,
              // flex:1,
            }} // 이미지 Style 적용
            currentImageEmitter={increment}
          />
          {/* <TouchableOpacity onPress={() => navigation.navigate('Info')}></TouchableOpacity> */}
          {/* <Text style={styles.trail1}>탐방로</Text> */}
        </View>

        <View style={styles.Second}>
          <View style={styles.Second2}>
            <Text style={styles.trail1}>최근 기록</Text>

            <View style={styles.scoreView}>
              {score ?
                <TouchableOpacity style={styles.scoreView} onPress={() => navigation.navigate('Map', {id: score._id})}>
                  <View style={styles.trailLine} />
                  <View style={styles.circleItem}>
                    {score.course.courseDetail.map((_, idx) => (
                      <View style={styles.circleDetail} key={idx}>
                        <View style={score.score >= idx ? styles.circleCheck : styles.circle}></View>
                      </View>
                    ))}
                  </View>
                </TouchableOpacity>
              :
                <Text style={styles.noScoreText}>최근 등산 기록이 없습니다.</Text>
              }
            
              {/* <LottieView autoPlay loop source={require('./svg/run.json')} />
              <View style={styles.trailLine} />
              <View style={styles.circle1}></View>
              <View style={styles.circle2}></View>
              <View style={styles.circle3}></View>
              <View style={styles.circle4}></View>
              <View style={styles.circle5}></View>
              <Icon name="flag" size={35} color="#1E824C" style={styles.icon} /> */}
            </View>
          </View>
        </View>

        <View style={styles.Third}>
          <View style={styles.Third2}>
            <TouchableOpacity onPress={() => navigation.navigate('Course')}>
              <Image
                source={require('./img/note.png')}
                style={styles.noteImage} />
              <Text style={styles.trail1}>등산 기록</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Third3}>
            <TouchableOpacity onPress={() => navigation.navigate('MtRank')}>
              <Image
                source={require('./img/rank.png')}
                style={styles.rankImage} />
              <Text style={styles.trail1}>랭킹</Text>
            </TouchableOpacity>
          </View>
        </View>

              {/* <Icon name="plus" size={30} color="#fff" /> */}
      {/* </View> */}
      </View>
      <Footer navigation={navigation} value="1" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    ...Platform.select({
      ios: {fontFamily: 'AppleSDGothicNeo-Regular'},
      android: {
        fontFamily: 'NotoSansKR-Bold',
        fontWeight: 'bold',
        includeFontPadding: false,
      },
    }),
  },

  First: {
    // position: 'absolute',
    flex: 1,
    // margin:10,
    // margin: 10,
    // borderRadius:5,
    // borderRadius:5,
    // paddingHorizontal: 10,
    // position: 'relative',
    marginTop: 10,
  },
  FirstImage:{
    flex:1
  },
  Second: {
    flex:1,
    margin:10,
    // marginTop: 20,
    borderRadius: 5,
    // backgroundColor: '#f4d03f',
    // borderColor:'green',
    // height: hp('20%'),
    // borderStyle: 'solid',
    // borderWidth: 3,
    backgroundColor:'#9EFF95',
  },
  Second2: {
    flex:1,
    // marginBottom:10,
    // marginTop:20,
    position: 'relative',
    paddingHorizontal: 10,
    // borderStyle: 'solid',
    // borderColor: '#76D46D',
    // borderWidth: 1,    
    // borderColor:'green',
  },
  Third:{
    flex: 1, 
    flexDirection: 'row', 
    // marginTop: 10,
    // marginBottom:10,
    // position: 'relative',
    // paddingHorizontal: 10,
    margin:10,
    marginTop: 0,
    // borderWidth: 1
  },
  Third2: {
    flex:1,
    // margin:5,
    borderRadius: 5,
    backgroundColor: '#26A65B',
    // height: hp('30%'),
    // width: wp('46%'),
    marginRight: 5
  },
  Third3: {
    flex:1,
    // margin:5,
    borderRadius: 5,
    backgroundColor: '#26A65B',
    // height: hp('30%'),
    // width: wp('46%'),
    marginLeft: 5
  },
  header: {
    // position: 'absolute',
    height: 40,
    justifyContent: 'center',
    left: '43%',
  },
  seperate:{
    flex: 1, 
    flexDirection: 'row', 
    marginTop: 10
  },
  headerText: {
    fontFamily: 'DungGeunMo',
    fontSize: 18,
    color: 'black',
  },
  button: {
    position: 'absolute',
    alignItems: 'center',
    // backgroundColor: 'transparent',
    // borderStyle: 'solid',
    // borderColor: '#FFFFFF',
    // borderWidth: 1,
    padding: 5,
    marginHorizontal: 10,
    // marginTop: 50,
    fontSize: 25,
    // fontWeight: 'bold',
  },
  buttonTitle: {
    padding: 3,
    fontSize: 24,
    color: '#FFFFFF',
    position: 'relative',
    fontWeight: 'bold',
        // borderStyle: 'solid',
    // borderColor: '#FFFFFF',
    // borderWidth: 1,
  },
  trail1: {
    position: 'absolute',
    padding: 3,
    margin: 6,
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  trail2: {
    position: 'absolute',
    padding: 3,
    margin: 6,
    fontSize: 24,
    color: '#47525E',
    fontWeight: 'bold',
  },
  trailLine: {
    borderColor: '#1E824C',
    borderWidth: 2,

    marginHorizontal: 10,
    borderStyle: 'dashed',
    // marginTop: 90,
    borderRadius: 1,
  },
  icon: {
    position: 'absolute',
    padding: 0,
    left: 340,
    marginTop: 60,
  },
  rankImage: {
    left: 48,
    top: 40,
    width: wp('22%'),
    height: hp('22%'),
    //width: 150,
    //height: 'auto'
  },
  noteImage: {
    left: 40,
    top: 65,
    width: wp('25%'),
    height: hp('15%'),
    //width: 150,
    //height: 'auto'
  },
  scoreView: {
    justifyContent: 'center',
    flex: 1
  },
  noScoreText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  circleItem: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 14
  },
  circleDetail: {
    flex: 1,
    alignItems: 'center'
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F5E51B',
    borderWidth: 4,
    borderColor: '#1E824C',
  },
  circleCheck: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#1E824C',
    borderWidth: 4,
    borderColor: '#1E824C',
  }
});
