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
import Loading from './Loading';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Course({navigation, route}){
  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://whitedeer.herokuapp.com/course/${route.params}`)
    .then(({data}) => {
      setCourse(data.course)
      setLoading(false);
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

  return loading ? 
    <Loading navigation={navigation} value='4'/>
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
              <Text style={styles.bla3}>등정횟수</Text>
            </View>
            <View style={styles.content2}>
              <Text style={styles.bla1}>1순위</Text>
              <Text style={styles.bla2}>비실이</Text>
              <Text style={styles.bla3}>9999</Text>
            </View>
            <View style={styles.content2}>
              <Text style={styles.bla1}>2순위</Text>
              <Text style={styles.bla2}>퉁퉁이</Text>
              <Text style={styles.bla3}>22회</Text>
            </View>
            <View style={styles.content2}>
              <Text style={styles.bla1}>3순위</Text>
              <Text style={styles.bla2}>미란이</Text>
              <Text style={styles.bla3}>21회</Text>
            </View>
            <View style={styles.content2}>
              <Text style={styles.bla1}>4순위</Text>
              <Text style={styles.bla2}>코난</Text>
              <Text style={styles.bla3}>20회</Text>
            </View>
            <View style={styles.content2}>
              <Text style={styles.bla1}>5순위</Text>
              <Text style={styles.bla2}>유명한</Text>
              <Text style={styles.bla3}>19회</Text>

            </View>
            <View style={styles.content2}>
              <Text style={styles.bla1}>6순위</Text>
              <Text style={styles.bla2}>검은그림자</Text>
              <Text style={styles.bla3}>18회</Text>
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