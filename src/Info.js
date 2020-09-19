import React from 'react';
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

export default function Course({navigation}) {
  return (
    <Container>
      <Content>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#FFFFFF',
            }}>
            코스 선택하기
          </Text>
        </View>
        <ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate('Prepare')}>
            <Image
              style={styles.img}
              source={require('./img/성판악탐방로.jpg')}></Image>
          </TouchableOpacity>
          <ImageBackground
            source={require('./img/성판악탐방로.jpg')}
            style={styles.img}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.text}>>성판악 코스 시작</Text>
            </View>
          </ImageBackground>
          <TouchableHighlight>
            <Image
              style={styles.img}
              source={require('./img/관음사탐방로.jpg')}
            />
          </TouchableHighlight>
          <TouchableHighlight>
            <Image
              style={styles.img}
              source={require('./img/어리목탐방로.jpg')}
            />
          </TouchableHighlight>
        </ScrollView>
      </Content>

      <Footer navigation={navigation} />
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
  img: {
    height: 250,
    width: 350,
    alignItems: 'center',
    borderRadius: 3,
    resizeMode: 'contain',
    marginLeft: 30,
  },
  header: {
    padding: 30,
    marginBottom: 20,
    backgroundColor: '#87D37C',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'right',
    textAlignVertical: 'bottom',
    fontSize: 20,
    fontWeight: '100',
  },
});
