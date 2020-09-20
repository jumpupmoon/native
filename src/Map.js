import React from 'react';
import {Container, Content, Text, View} from 'native-base';
import Footer from './Footer';
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Popup1 from './popup/Popup1';

export default function Map({navigation}) {
  return (
    <Container>
      <Content>
        <ImageBackground
          style={{height: 605, width: 415, position: 'relative'}}
          source={require('./img/map.png')}>
          <View>
            <View style={styles.centeredView}>
              <TouchableOpacity>
                <Popup1 style={styles.circle}></Popup1>
              </TouchableOpacity>
              <View style={styles.circle2} />
              <View style={styles.circle3} />
              <View style={styles.circle4} />
              <View style={styles.circle5} />
              {/* <Icon
                onPress={Popup1}
                name="controller-record"
                color="#969FAA"
                size={30}
                style={styles.icon1}
              /> */}

              <TouchableOpacity style={styles.openButton}>
                <Text style={{color: 'white', fontWeight: '100'}}>
                  포기하기
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Content>

      <Footer navigation={navigation} />
    </Container>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 500,
  },
  openButton: {
    backgroundColor: '#DE4132',
    borderRadius: 10,
    padding: 32,
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 15,
    elevation: 1,
  },
  circle: {
    left: 309,
    top: -11,
    marginTop: 50,
    position: 'absolute',
  },
  circle1: {
    width: 24,
    height: 24,
    borderRadius: 30,
    backgroundColor: '#969FAA',
    position: 'absolute',
    left: 309,
    top: -11,
  },
  circle2: {
    width: 24,
    height: 24,
    borderRadius: 30,
    backgroundColor: '#969FAA',
    position: 'absolute',
    padding: 0,
    left: 260,
    top: -120,
  },
  circle3: {
    width: 24,
    height: 24,
    borderRadius: 30,
    backgroundColor: '#969FAA',
    position: 'absolute',
    padding: 0,
    left: 176,
    top: -214,
  },
  circle4: {
    width: 24,
    height: 24,
    borderRadius: 30,
    backgroundColor: '#969FAA',
    position: 'absolute',
    padding: 0,
    left: 161,
    top: -321,
  },
  circle5: {
    width: 24,
    height: 24,
    borderRadius: 30,
    backgroundColor: '#969FAA',
    position: 'absolute',
    padding: 0,
    left: 127,
    top: -404,
  },
});
