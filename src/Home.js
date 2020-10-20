import React, {useState, useEffect} from 'react';
import {Image, Platform,Text,View, StyleSheet,TouchableOpacity} from 'react-native';
import {Container, Content} from 'native-base';
import { SliderBox } from 'react-native-image-slider-box';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Footer from './Footer';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Foundation';
import WeatherInfo from './WeatherInfo';
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import EventEmitter from "react-native-eventemitter";

export default function Layout({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(1);
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
    EventEmitter.emit('nfcNav', navigation)
  }, [])

  return (
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
              // height: hp('40%'),
              borderRadius: 5,
              margin:10,
              // flex:1,
            }} // 이미지 Style 적용
            currentImageEmitter={increment}/>
          <TouchableOpacity onPress={() => navigation.navigate('Info')}></TouchableOpacity>
          <Text style={styles.trail1}>탐방로</Text>
        </View>

        <View style={styles.Second}>
          <View style={styles.Second2}>
            <Text style={styles.trail1}>내 상태</Text>
            <LottieView autoPlay loop source={require('./svg/run.json')} />
            <View style={styles.trailLine} />
            <View style={styles.circle1}></View>
            <View style={styles.circle2}></View>
            <View style={styles.circle3}></View>
            <View style={styles.circle4}></View>
            <View style={styles.circle5}></View>
            <Icon name="flag" size={35} color="#1E824C" style={styles.icon} />
          </View>
        </View>
        <View style={styles.Third}>
          <View style={styles.Third2}>
            <TouchableOpacity onPress={() => navigation.navigate('Course')}></TouchableOpacity>
            <Image
              source={require('./img/note.png')}
              style={styles.noteImage}></Image>
            <Text style={styles.trail1}>내 등산수첩</Text>
          </View>
          <View style={styles.Third3}>
            <TouchableOpacity onPress={() => navigation.navigate('Course')}></TouchableOpacity>
            <Image
              source={require('./img/rank.png')}
              style={styles.rankImage}></Image>
            <Text style={styles.trail1}>랭킹</Text>
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
    margin: 10,
    // borderRadius:5,
    // borderRadius:5,
    // paddingHorizontal: 10,
    // position: 'relative',
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
    backgroundColor:'#9EFF95'
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
    position: 'relative',
    // paddingHorizontal: 10,
    margin:10,
  },
  Third2: {
    flex:1,
    margin:5,
    borderRadius: 5,
    backgroundColor: '#26A65B',
    // height: hp('30%'),
    // width: wp('46%'),
  },
  Third3: {
    flex:1,
    margin:5,
    borderRadius: 5,
    backgroundColor: '#26A65B',
    // height: hp('30%'),
    // width: wp('46%'),
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
    marginTop: 90,
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
  circle1: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth: 4,
    borderColor: '#1E824C',
    marginTop: 83,
    marginLeft: 53,
  },
  circle2: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth: 4,
    borderColor: '#1E824C',
    marginTop: 83,
    marginLeft: 123,
  },
  circle3: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth: 4,
    borderColor: '#1E824C',
    marginTop: 83,
    marginLeft: 193,
  },
  circle4: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth: 4,
    borderColor: '#1E824C',
    marginTop: 83,
    marginLeft: 263,
  },
  circle5: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth: 4,
    borderColor: '#1E824C',
    marginTop: 83,
    marginLeft: 333,
  },
});
