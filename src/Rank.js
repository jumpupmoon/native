import React from 'react';
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

} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Course({navigation}){
  return ( 
    <View style={styles.container}>
    <View style={styles.header}><Text>한라산 A코스 랭킹</Text></View>
    <View style={styles.fixToText}>
        <Button
          title="개인 랭킹"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="단체 랭킹"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    <View style={styles.title2}><Text>순위</Text><Text>사진</Text><Text>등정횟수</Text></View>
    <View style={styles.title}><Text></Text></View>
    <View style={styles.content}><Text>순위</Text><Text>사진</Text><Text>등정횟수</Text></View>
    <View style={styles.content}><Text>순위</Text><Text>사진</Text><Text>등정횟수</Text></View>
    <View style={styles.content}><Text>순위</Text><Text>사진</Text><Text>등정횟수</Text></View>

    {/* <View style={styles.footer}><Text>footer</Text></View> */}
    <Footer navigation={navigation} value="4" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // flexDirection:'row',
    //alignItems: 'center',
    backgroundColor: 'black'
  },
  header: {
    width:'100%',
    height:'9%',
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // justifyContent: 'center',
    // alignItems: 'center',
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
  
});