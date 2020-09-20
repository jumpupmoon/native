import React from 'react';
import {Container, Content,View } from 'native-base';
import Footer from './Footer';
import {StyleSheet, Image,TouchableOpacity,Text} from 'react-native';
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Foundation';

export default function Arrival({navigation}) {
    return (
      <Container >
        <Content style={{alignContent:'center',flow:1}}>
        <View style={{height: hp('40%'),
    width: wp('70%'),marginHorizontal:60,marginTop:60,alignContent:'center',alignItems: "center",}}>
        <LottieView autoPlay loop  source={require('./svg/mountain.json')}
      />
        </View>
        <View style={styles.textView}>
            <Text style={styles.text}>성판악 탐방로</Text>
            <Text style={styles.text2}>완행을 축하드립니다!</Text>
        </View>
        
        <View style={styles.imgView}>
        <Icon name="plus" size={30} color='#1E824C'/>
        <Image source={require('./img/present1.png')} style={styles.img}></Image>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Info')}>
        <Text style={styles.buttonTitle}>확인</Text>
      </TouchableOpacity>
        </Content>
  
        <Footer navigation={navigation} value='4' />
      </Container>
    )};

    const styles = StyleSheet.create({
        textView:{
            alignItems:'center',            
        },
        text:{
            fontFamily: 'DungGeunMo',
            fontSize:32,
            textAlign:'center',
            color:'#1E824C'
        },
        text2:{
            fontFamily: 'DungGeunMo',
            fontSize:24,
            textAlign:'center'
        },
       
        imgView:{
            alignSelf:'center',
            margin:60,
            height: hp('5%'),
            width: wp('20%'),
            justifyContent:'center'
        },
        img:{
            position: 'absolute',
            resizeMode:'stretch',
            height: hp('5%'),
            width: wp('10%'),
            marginLeft:30
        },
        button:{
            
            alignItems: "center",
            alignSelf:'center',
            backgroundColor: '#1E824C',
            height: hp('8%'),
            width: wp('60%'),
            justifyContent:'center'
        },
        buttonTitle:{
            padding: 3,
            fontSize: 24,
            color: '#FFFFFF',
            fontFamily: 'DungGeunMo', 
        }
    })