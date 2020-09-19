import React from 'react';
import {Container, Content, Text, Button, View} from 'native-base';
import {StyleSheet, TouchableHighlight} from 'react-native';
import Footer from './Footer';
import Popup1 from './popup/Popup1';
//import Popup2 from './popup/Popup2';

export default function Prepare({navigation}) {
  return (
    <Container>
      <Content>
        <Text style={styles.Title}>성판악 코스1</Text>
        <View style={styles.List}>
          <Text style={styles.ListText}>예상시간 : 4시간 30분</Text>
        </View>
        <View style={styles.List}>
          <Text style={styles.ListText}>거리 : 9.6km(왕복 19.2km)</Text>
        </View>
        <View style={styles.List}>
          <Text style={styles.ListText}>
            탐방안내소-C-속밭-C-사라악샘-B-진달래밭 대피소-A-정상(백록담)
          </Text>
        </View>
        <View style={styles.List}>
          <Text style={styles.ListText}>
            대 피 소 : 속밭대피소(무인), 진달래밭대피소(유인)
          </Text>
        </View>
        <View style={styles.List}>
          <Text style={styles.ListText}>
            매 점 : 성판악
            휴게소(식수,김밥,음료수,국수,해장국,과자류,면장갑,비옷,아이젠 등
            등산 장비)
          </Text>
        </View>
        <View style={styles.List}>
          <Text style={styles.ListText}>
            화 장 실 : 성판악 사무실, 속밭 대피소, 진달래밭 대피소
          </Text>
        </View>
        <View style={styles.List}>
          <Text style={styles.ListText}>성판악 코스 평균 : 4시간 22분</Text>
          <Text style={styles.ListText}>성판악 코스 1등 : 4시간 10분</Text>
        </View>
      </Content>
      <Popup1></Popup1>
      <Footer navigation={navigation} />
    </Container>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#969FAA',
    marginBottom: 20,
    marginTop: 40,
  },
  List: {
    paddingTop: 20,
  },
  ListText: {
    fontSize: 16,
    marginLeft: 15,
    textAlign: 'left',
  },
});
