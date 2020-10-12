import React, { useState } from 'react';
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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Course({navigation}){
  return ( 
    <><Container>
        <Content>
          <ScrollView style={{paddingBottom:20}}>
            <View style={styles.header}><Text>한라산 A코스 랭킹</Text></View>
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
            <View style={styles.title2}><Text>순위</Text><Text>사진</Text><Text>등정횟수</Text></View>
            <View style={styles.title}><Text></Text></View>
            <TouchableOpacity>
              <View style={styles.content}><Text>1순위</Text><Image style={styles.img}
              source={require('./img/성판악.jpg')}></Image><Text>23회</Text></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.content}><Text>2순위</Text><Image style={styles.img}
              source={require('./img/성판악.jpg')}></Image><Text>22회</Text></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.content}><Text>3순위</Text><Image style={styles.img}
              source={require('./img/성판악.jpg')}></Image><Text>21회</Text></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.content}><Text>4순위</Text><Image style={styles.img}
              source={require('./img/성판악.jpg')}></Image><Text>20회</Text></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.content}><Text>5순위</Text><Image style={styles.img}
              source={require('./img/성판악.jpg')}></Image><Text>19회</Text></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.content}><Text>6순위</Text><Image style={styles.img}
              source={require('./img/성판악.jpg')}></Image><Text>18회</Text></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.content}><Text>7순위</Text><Image style={styles.img}
              source={require('./img/성판악.jpg')}></Image><Text>17회</Text></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.content}><Text>8순위</Text><Image style={styles.img}
              source={require('./img/성판악.jpg')}></Image><Text>16회</Text></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.content}><Text>8순위</Text><Image style={styles.img}
              source={require('./img/성판악.jpg')}></Image><Text>16회</Text></View>
            </TouchableOpacity>
            {/* <View style={styles.footer}><Text>footer</Text></View> */}
          </ScrollView>
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
    width:'100%',
    height:'5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    fontWeight: "bold",
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
    justifyContent: 'center',
    alignItems: 'center',
    height:'7%',
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  content: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
});