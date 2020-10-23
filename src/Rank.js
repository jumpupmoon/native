import React, { useEffect, useState } from 'react';
import {Container, Content, Text, View} from 'native-base';
import Footer from './Footer';
import {
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import { PacmanIndicator } from 'react-native-indicators';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Course({navigation, route}){
  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://whitedeer.herokuapp.com/course/${route.params}`)
    .then(({data}) => {
      setCourse(data.course)
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
    require('./img/mountainnn.jpg')
  ]

  return loading ? (
    <View style={{flex: 1}}>
      <PacmanIndicator color='#1E824C' size={100} />
    </View>
  )
  : (
    <><Container>
        <Content>
          {course &&
          <ScrollView style={{paddingBottom:20}}>
            <View style={styles.header}>
              <Text style={{
              fontSize: 30,
              textAlign: 'center',
              color: '#FFF',
              fontFamily: 'DungGeunMo',
            }}>{course.name}({course.location})</Text>
            </View>
            {/* <TouchableOpacity hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }} style={styles.button}>
              <Text>버튼</Text><Text>버튼</Text>
            </TouchableOpacity> */}
            {/* <View style={styles.fixToText}>
                <Button
                  title="개인 랭킹"
                  onPress={() => Alert.alert('Left button pressed')}
                />
                <Button
                  title="단체 랭킹"
                  onPress={() => Alert.alert('Right button pressed')}
                />
              </View> */}
              
            <View style={styles.content}>
              <Text style={styles.bla1}>순위</Text>
              <Text style={styles.bla2}>닉네임</Text>
              <Text style={styles.bla3}>뱃지</Text>
              <Text style={styles.bla4}>등정횟수</Text>
            </View>
            <View style={styles.content2}>
              <Text style={styles.bla1}>1순위</Text>
              <Text style={styles.bla2}>비실이</Text>
              <Image
              style={styles.bla33}
              source={require('./img/mountainnn.jpg')}
              />
              <Text style={styles.bla4}>9999</Text>
            </View>
            <View style={styles.content2}>
              <Text style={styles.bla1}>2순위</Text>
              <Text style={styles.bla2}>퉁퉁이</Text>
              <Image 
              style={styles.bla33}
              source={{uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',}} style={styles.bla33}/>
              <Text style={styles.bla4}>22회</Text>
            </View>
            <View style={styles.content2}>
              <Text style={styles.bla1}>3순위</Text>
              <Text style={styles.bla2}>미란이</Text>
              <Image source={{uri : 'data:image/jpeg;base64,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'}} style={styles.bla33}></Image>
              <Text style={styles.bla4}>21회</Text>
            </View>
            <View style={styles.content2}>
              <Text style={styles.bla1}>4순위</Text>
              <Text style={styles.bla2}>코난</Text>
              <Text style={styles.bla33}>뱃지</Text>
              <Text style={styles.bla4}>20회</Text>
            </View>
            <View style={styles.content2}>
              <Text style={styles.bla1}>5순위</Text>
              <Text style={styles.bla2}>유명한</Text>
              <Text style={styles.bla33}>뱃지</Text>
              <Text style={styles.bla4}>19회</Text>

            </View>
            <View style={styles.content2}>
              <Text style={styles.bla1}>6순위</Text>
              <Text style={styles.bla2}>검은그림자</Text>
              <Text style={styles.bla33}>뱃지</Text>
              <Text style={styles.bla4}>18회</Text>
            </View>
            {/* <View style={styles.footer}><Text>footer</Text></View> */}
          </ScrollView>
          }
        </Content>
      </Container>
      <Footer navigation={navigation} value="4" />
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   // flexDirection:'row',
  //   // alignItems: 'center',
  //   backgroundColor: 'white'
  // },
  header: {
    padding: 20,
    backgroundColor: '#1E824C',
    
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
    width:'100%',
    height:'7%',
    height: hp('0.15%'),
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'gray',
  },
  title2: {
    borderBottomColor: '#737373',
    width:'100%',
    // height: hp('5%'),
    // justifyContent: 'center',
    alignItems: 'center',
    height:'7%',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  content: {
    // flex:1,
    height: 88,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content2: {
    // flex:1,
    height: 88,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth : 1.3,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
  },
  footer: {
    width:'100%',
    height:'20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ad657',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  img: {
    width: wp('20%'),
    height: hp('10%'),
    alignItems: 'center',
    padding: 10,
    resizeMode: 'stretch',
    alignItems: 'center',
    opacity: 0.6,
  },
  bla1:{
    flex:1.3,
    flexDirection:'column',
    textAlign:'center',
    fontWeight: 'bold',
    fontSize:20
  },
  bla2:{
    flex:1.9,
    flexDirection:'column',
    textAlign:'center',
    fontWeight: 'bold',
    fontSize:20
  },
  bla3:{
    flex:2.0,
    flexDirection:'column',
    textAlign:'center',
    fontWeight: 'bold',
    fontSize:20
  },
  bla4:{
    flex:1.4,
    flexDirection:'column',
    textAlign:'center',
    fontWeight: 'bold',
    fontSize:20
  },
  bla33:{
    flex:1.4,
    flexDirection:'column',
    textAlign:'center',
    fontWeight: 'bold',
    fontSize:20,
    width:50,
    height:50
  },
  button: {
    marginTop: 50,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
  },
});