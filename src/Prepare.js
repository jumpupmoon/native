import React from 'react';
import {Container, Content, Text, Button, View} from 'native-base';
import {StyleSheet, TouchableHighlight} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Footer from './Footer';

export default function Prepare({navigation}) {
  // 코스 등록
  const startCourse = () => {
    AsyncStorage.getItem('address')
    .then(address => {
      axios.get(`http://localhost:5000/start?address=${address}`)
      .then(({data}) => {
        if(data == 1) navigation.navigate('Course');
        else alert('error!');
      })
    })
  }

  return (
    <Container>
      <Content>
        <View style={styles.Header}>
          <Text style={styles.Title}>산행 준비물</Text>
        </View>
        <View style={styles.List}>
          <Text style={styles.ListText}>물병</Text>
        </View>
        <View style={styles.List}>
          <Text style={styles.ListText}>선글라스</Text>
        </View>
        <View style={styles.List}>
          <Text style={styles.ListText}>핫팩</Text>
        </View>
        <View style={styles.List}>
          <Text style={styles.ListText}>비상의약품</Text>
        </View>
        <View style={styles.List}>
          <Text style={styles.ListText}>간단한간식</Text>
        </View>
      </Content>
      <View style={styles.centeredView}>
        <TouchableHighlight
          style={styles.openButton}
          onPress={startCourse}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>확인</Text>
        </TouchableHighlight>
      </View>
      <Footer navigation={navigation} value='2' />
    </Container>
  );
}

const styles = StyleSheet.create({
  Header: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#969FAA',
    marginBottom: 20,
    marginTop: 40,
  },
  Title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  List: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  ListText: {
    fontSize: 24,
    textAlign: 'left',
    textAlignVertical: 'center',
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#404040',
    //borderRadius: 0,
    padding: 32,
    paddingTop: 12,
    paddingBottom: 12,
    elevation: 2,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 50,
  },
  openButton: {
    backgroundColor: '#404040',
    borderRadius: 0,
    padding: 32,
    paddingTop: 12,
    paddingBottom: 12,
    elevation: 1,
  },
  borderBox: {
    borderRadius: 5,
    backgroundColor: '#f4d03f',
    height: '90%',
  },
});
