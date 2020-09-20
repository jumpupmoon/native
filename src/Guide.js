import React from 'react';
import {Container, Content, Text, Button, View} from 'native-base';
import {StyleSheet, TouchableHighlight} from 'react-native';
import Footer from './Footer';

//import Popup2 from './popup/Popup2';

export default function Prepare({navigation}) {
  return (
    <Container style={styles.container}>
      <Content>
        <Text style={styles.Title}>성판악 코스</Text>
        <Text style={styles.distance}>9.6km(왕복 19.2km)</Text>
        <View style={styles.List}>
        
        <View style={styles.item}>
          <View  style={styles.trailLine} />
          <View style={styles.circle1}></View>
          <View style={styles.circle2}></View>
          <View style={styles.circle3}></View>
          <View style={styles.circle4}></View>
          <View style={styles.circle5}></View>
          <View style={{marginHorizontal:20,}}>
            <Text style={styles.circleText}>탐방안내소   속밭     사라막샘     진달래밭    백록담</Text>
          </View>
          
        </View>

        <View style={{marginVertical: 5,}}>
          <Text style={styles.itemText}>"약 4시간 30분 소요 예정"</Text>
        </View>
       
        

        <View style={styles.item}>
          <Text style={styles.itemText}>
            - 대 피 소 - 
          </Text>
          <View style={styles.itemDetail}>
          <Text style={styles.itemTextDetail}>
            속밭대피소(무인)-진달래밭대피소(유인)
          </Text>
          </View>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemText}>
           - 매 점 -
          </Text>
          <View style={styles.itemDetail}>
          <Text style={styles.itemTextDetail}>
          성판악 휴게소
          </Text>
          </View>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemText}>
            - 화 장 실 - 
          </Text>
          <View style={{borderWidth:2,
    borderRadius:3,
    marginVertical:10,
    padding:10}}>
          <Text style={styles.itemTextDetail}>
          성판악 사무실-속밭 대피소-진달래밭 대피소
          </Text>
          </View>
        </View>

        <View style={{alignItems:'center'}}>
          <Text style={styles.itemText}>성판악 코스 평균 : 4시간 22분</Text>
          <Text style={styles.itemText}>성판악 코스 1 등 : 4시간 10분</Text>
        </View>
       
        <Button onPress={() => navigation.navigate('Prepare')} 
        style={{
    textAlign: 'center',
    backgroundColor: '#1E824C',alignSelf:'center',marginTop:30}}>
          <Text style={{fontSize: 26,fontFamily: 'DungGeunMo', textAlign: 'center', color: '#FFF',}}>시작하기</Text>
        </Button>
        
        </View>
      </Content>

      <Footer navigation={navigation} value='2' />
    </Container>
  )};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    ...Platform.select({
      ios: { fontFamily: 'AppleSDGothicNeo-Regular' },
      android: {
        fontFamily: 'NotoSansKR-Bold',
        fontWeight: 'bold',
          includeFontPadding: false
      }
    }),
  },
  Title: {
    fontSize: 36,
    fontFamily: 'DungGeunMo',
    textAlign: 'center',
    color: '#1E824C',
    marginBottom: 0,
    marginTop: 40,
  },
  distance: {
    fontSize: 18,
    fontFamily: 'DungGeunMo',
    textAlign: 'center',
    color: '#404040',
  },
  List: {
    margin: 20,
    
  },
  item:{
    marginVertical: 10,
    
  },
  itemText:{
    fontFamily: 'DungGeunMo',
    color:'#181717',
    fontSize: 20,
    textAlign: 'center'
  },
  itemDetail:{
    borderWidth:2,
    borderRadius:3,
    marginTop:10,
    padding:10
  },
  itemTextDetail:{
    fontFamily: 'DungGeunMo',
    color:'#47525E',
    fontSize: 16,
    textAlign: 'center',
  },
  trailLine:{
    borderBottomColor: '#1E824C',
    borderBottomWidth: 5,
    marginHorizontal: 10,
    borderStyle: 'dashed',
    marginTop: 20,
    borderRadius: 1
  },
  circleText:{
    fontFamily: 'NotoSansKR-Regular',
    color:'#181717',
    fontSize: 14
  },
  circle1: {
    width: 18,
    height: 18,
    borderRadius: 18/2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth:4,
    borderColor:'#1E824C',
    marginTop:14,
    marginLeft:40
    
  },
  circle2: {
    width: 18,
    height: 18,
    borderRadius: 18/2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth:4,
    borderColor:'#1E824C',
    marginTop:14,
    marginLeft:100
    
  },
  circle3: {
    width: 18,
    height: 18,
    borderRadius: 18/2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth:4,
    borderColor:'#1E824C',
    marginTop:14,
    marginLeft:160
    
  },
  circle4: {
    width: 18,
    height: 18,
    borderRadius: 18/2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth:4,
    borderColor:'#1E824C',
    marginTop:14,
    marginLeft:220
    
  },
  circle5: {
    width: 18,
    height: 18,
    borderRadius: 18/2,
    backgroundColor: '#F5E51B',
    position: 'absolute',
    borderWidth:4,
    borderColor:'#1E824C',
    marginTop:14,
    marginLeft:280
    
  },
});
