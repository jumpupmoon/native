import React,{ useEffect, useState } from 'react';
import {Container, Content, Text, TextInput} from 'native-base';
import Footer from './Footer';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import axios from 'axios';

export default function Course({navigation}) {
  const [mountain, setMountain] = useState([]);

  useEffect(() => {
    axios.get('https://whitedeer.herokuapp.com/course')
    .then(({data}) => {
      setMountain(data.list)
    })
  }, [])

  const imgList = [
    require('./img/돈내코.jpg'),
    require('./img/영실.jpg'),
    require('./img/관음사.jpg'),
    require('./img/성판악.jpg'),
    require('./img/어리목.jpg'),
    require('./img/석굴암.png'),
    require('./img/어승생악.jpg'),
  ]
  
  return (
    <Container>
      <Content>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              color: '#FFF',
              fontFamily: 'DungGeunMo',
            }}>
            산 선택하기
          </Text>
        </View>
        {/* 코스 아이템 시작 */}
        <ScrollView style={{paddingBottom:20}}>
          {mountain.map((m, idx) => (
            <TouchableOpacity style={styles.courses} onPress={() => navigation.navigate('Rank', idx)} key={idx}>
            <Image
              style={styles.img}
              source={imgList[idx]}></Image>
              <Text style={styles.title}>{m.name}({m.location})</Text>
              <Text style={styles.info}>{m.time}({m.distance}km)</Text>
              <Text style={styles.info2}>{m.discription}</Text>
            </TouchableOpacity>
          ))}          
        </ScrollView>
        {/* 코스 아이템 끝 */}
      </Content>
      <Footer navigation={navigation} value="4" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  courses: {
    alignItems: 'center',
    // marginRight: 20,
    marginHorizontal: 20,
    width: wp('91%'),
    height: hp('25.5%'),
    marginTop: 20,
    // borderStyle: 'dotted',
    // borderColor: '#404040',
    // borderWidth: 0.5,
    // borderRadius: 10,
  },
  img: {
    width: wp('90%'),
    height: hp('25%'),
    alignItems: 'center',
    padding: 10,
    resizeMode: 'stretch',
    alignItems: 'center',
    borderRadius:10,
    opacity: 0.6,
  },
  title: {
    marginTop: 25,
    alignItems: 'center',
    position: 'absolute',
    padding: 0,
    fontFamily: 'DungGeunMo',
    fontSize: 30,
    color: '#181717',
  },
  info: {
    marginTop: 70,
    position: 'absolute',
    padding: 0,
    fontFamily: 'DungGeunMo',
    fontSize: 20,
    color: '#47525E',
  },
  info2: {
    marginTop: 110,
    position: 'absolute',
    textAlign: 'center',
    padding: 0,
    fontFamily: 'DungGeunMo',
    fontSize: 16,
    color: 'black',
  },
  iconCircle: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    marginTop: 130,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 3,
    height: 50,
    width: 50,
    borderRadius: 1000,
  },
  icon: {
    position: 'absolute',
    padding: 0,
    marginTop: 115,
    marginLeft: 90,
  },
  iconInfo: {
    marginTop: 10,
    position: 'absolute',

    padding: 0,
    fontFamily: 'DungGeunMo',
    fontSize: 16,
    color: '#181717',
    marginLeft: 90,
  },
  header: {
    padding: 20,
    backgroundColor: '#1E824C',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'right',
    textAlignVertical: 'bottom',
    fontSize: 20,
    fontWeight: '100',
  },
});
