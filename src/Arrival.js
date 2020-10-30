import React, { useState } from 'react';
import {Container, Content, View} from 'native-base';
import Footer from './Footer';
import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,} from 'react-native-responsive-screen';
  

export default function Arrival({navigation, route}) {
  const [on,setOn] = useState(true);
  // console.log(route);
  // console.log(route.params.id);
  // console.log(route.params.course);
  

  const cert=() =>{
    AsyncStorage.getItem('address')
    .then(address => {
      console.log(address);
      console.log(route.params.course);
      axios.get(`https://whitedeer.herokuapp.com/cert?address=${address}&course=${route.params.course}`)
      .then(({data}) => {
        setOn(false)
        console.log("ok");
      })
      .catch(err => console.log(err));
    })
  }

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
        {!on?<View/>
        :
          <Text style={styles.text2}>등산을 완료했습니다.</Text>
        }
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
        {on?
          <TouchableOpacity
          style={styles.button}
          onPress={() => cert()}>
          <Text style={styles.buttonTitle}>인증서 발급</Text>
        </TouchableOpacity>
        :<View><Text style={styles.text3}>인증서 발급이</Text>
        <Text style={styles.text4}>완료되었습니다.</Text></View>

        }
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
  text3: {
    marginTop:30,
    textAlign : 'center',
    padding: 3,
    fontSize: 32,
    color: 'black',
    fontFamily: 'DungGeunMo',
  },
  text4: {
    marginTop:30,
    marginLeft : 10,
    textAlign : 'center',
    padding: 3,
    fontSize: 32,
    color: 'black',
    fontFamily: 'DungGeunMo',
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
