import React from 'react';
import {Container, Content, Text, Button, View} from 'native-base';
import {StyleSheet, TouchableHighlight} from 'react-native';
import Footer from './Footer';
import Check from './component/Check';

export default function Prepare({navigation}) {
  return (
    <Container>
      <Content>
        <View style={styles.borderBox}>
          <View style={styles.Header}>
            <Text style={styles.Title}>산행 준비물</Text>
          </View>
          <View style={styles.List}>
            <Text style={styles.ListText}>
              <Check />
              물병
            </Text>
          </View>
          <View style={styles.List}>
            <Text style={styles.ListText}>
              <Check />
              선글라스
            </Text>
          </View>
          <View style={styles.List}>
            <Text style={styles.ListText}>
              <Check />
              핫팩
            </Text>
          </View>
          <View style={styles.List}>
            <Text style={styles.ListText}>
              <Check />
              비상 의약품
            </Text>
          </View>
          <View style={styles.List}>
            <Text style={styles.ListText}>
              <Check />
              간단한 간식
            </Text>
          </View>
        </View>
      </Content>
      <View style={styles.centeredView}>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => navigation.navigate('Guide')}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>확인</Text>
        </TouchableHighlight>
      </View>
      <Footer navigation={navigation} />
    </Container>
  );
}

const styles = StyleSheet.create({
  Header: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#969FAA',
    marginBottom: 20,
    marginTop: 30,
  },
  Title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  List: {
    paddingTop: 0,
    paddingBottom: 10,
    borderColor: '#181817',
    borderTopWidth: 2,
    borderRadius: 1,
    borderStyle: 'dotted',
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
    borderRadius: 1,
    borderColor: '#181817',
    margin: 20,
    //borderTopWidth: 1,
    borderWidth: 2,
    borderStyle: 'dotted',
  },
});
