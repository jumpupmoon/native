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
      <Content>
        <View style={styles.container}>
          {/* 상단바 */}
          <View style={styles.header}>
            <Text style={styles.headerText}>산오쿠과</Text>
          </View>
          {/* 이미지 슬라이더 */}
          <View style={styles.image}>
            <SliderBox
              autoplay={true} //자동 슬라이드 넘김
              circleLoop={true} //맨끝 슬라이드에서 다시 첫슬라이드로
              resizeMode="cover" // 이미지 사이즈 조절값
              images={imageList} // 이미지 주소 리스트
              dotColor="rgba(0,0,0,0)" // 아래 점 투명으로 안보이게 가림
              inactiveDotColor="rgba(0,0,0,0)"
              ImageComponentStyle={{
                width: wp('100%') - 20,
                height: hp('30%'),
                borderRadius: 5,
              }} // 이미지 Style 적용
              currentImageEmitter={increment}
            />
          </View>
          {/* 이미지 슬라이더 */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Info')}>
            <Text style={styles.buttonTitle}>▶탐방로 정보 확인하기</Text>
          </TouchableOpacity>

          <View style={styles.trailBar}>
            <View style={styles.trailContent}>
              <Text style={styles.trail1}>My Trail</Text>
              <LottieView autoPlay loop source={require('./svg/run.json')} />
              <View style={styles.trailLine} />
              <View style={styles.circle1}></View>
              <View style={styles.circle2}></View>
              <View style={styles.circle3}></View>
              <View style={styles.circle4}></View>
              <View style={styles.circle5}></View>
              <Icon name="flag" size={35} color="#1E824C" style={styles.icon} />
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
              {/* <View style={styles.weather}>
          <WeatherInfo />
        </View> */}
              <View style={styles.weather}>
                <Image
                  source={require('./img/weather.png')}
                  style={styles.weatherImage}></Image>
                <Text style={styles.trail1}>Weather</Text>
              </View>
              <View style={styles.ranking}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#1E824C',
                    left: 150,
                    width: wp('6%'),
                  }}
                  onPress={() => navigation.navigate('Arrival')}>
                  <Icon name="plus" size={30} color="#fff" />
                </TouchableOpacity>
                <Image
                  source={require('./img/rank.png')}
                  style={styles.rankImage}></Image>
                <Text style={styles.trail1}>Ranking</Text>
              </View>
            </View>
          </View>
        </View>
      </Content>
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
  header: {
    position: 'absolute',
    height: 40,
    justifyContent: 'center',
    left: '43%',
  },
  headerText: {
    fontFamily: 'DungGeunMo',
    fontSize: 18,
    color: 'black',
  },
  image: {
    position: 'absolute',
    flex: 1,
    marginTop: 40,
  },
  button: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 100,
    marginTop: 120,
  },
  buttonTitle: {
    padding: 3,
    fontSize: 16,
    color: '#FFFFFF',
  },
  trailBar: {
    position: 'relative',
    paddingHorizontal: 10,
  },

  trail1: {
    position: 'absolute',
    padding: 3,
    margin: 2,
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  trailContent: {
    marginTop: 280,
    borderRadius: 5,
    backgroundColor: '#f4d03f',
    height: hp('20%'),
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
  weather: {
    borderRadius: 5,
    backgroundColor: '#26A65B',
    height: hp('30%'),
    width: wp('46%'),
    marginRight: 5,
  },
  ranking: {
    borderRadius: 5,
    backgroundColor: '#1E824C',
    height: hp('30%'),
    width: wp('46%'),
    marginLeft: 5,
  },
  rankImage: {
    left: 56,
    top: 20,
    width: wp('20%'),
    height: hp('20%'),
    //width: 150,
    //height: 'auto'
  },
  weatherImage: {
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
