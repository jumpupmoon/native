import React from 'react';
import {Container, Content, View} from 'native-base';
import Footer from './Footer';
import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Foundation';

export default function Arrival({navigation, route}) {
  return (
    <Container>
      <Content style={{alignContent: 'center', flow: 1, flex:1}}>
        <View
          style={{
            height: hp('30%'),
            width: wp('60%'),
            marginHorizontal: 60,
            marginTop: 60,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <LottieView autoPlay loop source={require('./svg/mountain.json')} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>{route.params.name}</Text>
          <Text style={styles.text2}>등산을 완료했습니다.</Text>
        </View>
        
        {route.params?.finish &&
          <View style={styles.WhiteDeer}>
            <Text style={{fontSize:24}}>
              완료 보상 : {route.params.finish}백록
            </Text>
            {/* <Icon name="plus" size={30} color="#1E824C" />
            <Image
              source={require('./img/present1.png')}
              style={styles.img}></Image> */}
          </View>
        }

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Info')}>
          <Text style={styles.buttonTitle}>인증서 발급</Text>
        </TouchableOpacity>
      </Content>

      <Footer navigation={navigation} value="3" />
    </Container>
  );
}

const styles = StyleSheet.create({
  textView: {
    alignItems: 'center',
    marginTop: 20
  },
  text: {
    fontFamily: 'DungGeunMo',
    fontSize: 32,
    textAlign: 'center',
    color: '#1E824C',
    marginBottom: 10
  },
  text2: {
    fontFamily: 'DungGeunMo',
    fontSize: 24,
    textAlign: 'center',
  },

  WhiteDeer: {
    alignSelf: 'center',
    // borderWidth:1,
    marginTop: 40,
    paddingBottom:20,
    // height: hp('5%'),
    justifyContent: 'center',
    fontSize:24
  },
  img: {
    position: 'absolute',
    resizeMode: 'stretch',
    height: hp('5%'),
    width: wp('10%'),
    marginLeft: 30,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#1E824C',
    height: hp('8%'),
    width: wp('50%'),
    justifyContent: 'center',
    marginTop: 40
  },
  buttonTitle: {
    padding: 3,
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'DungGeunMo',
  },
});
