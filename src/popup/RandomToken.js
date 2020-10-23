import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {Button } from 'native-base';


const Point = ({modalView, setModalView}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalView}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.button}>

              <Image source={require('../img/gift.jpg')}></Image>
              
              <View><Text style={styles.First}>태그 성공!</Text></View>
              <View><Text style={styles.Second}>1백록 증정!</Text></View>

              <Button onPress={() => setModalView(false)} style={styles.giveupBtn}>
                <Text style={styles.giveupText}>닫기</Text>
              </Button>
              {/* <TouchableHighlight onPress={() => {
                setModalVisible(!modalVisible);
              }} ><Text style={{textAlign:'center'}}>아니오</Text></TouchableHighlight> */}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  First:{
    justifyContent:'center',
    textAlign:'center',
    fontSize:26,
    marginTop:50
    // backgroundColor:'blue'
    // fontStyle:''
  },
  Second:{
    justifyContent:'center',
    textAlign:'center',
    fontSize:30,
    marginTop:50,
    // fontStyle:'bold'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    marginTop:25,
    // borderColor:'Black'
  },
  button:{
    flex:2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  giveupBtn: {
    textAlign: 'center',
    backgroundColor: '#1E824C',
    alignSelf: 'center',
    marginVertical: 40,
    paddingHorizontal: 20
  },
  giveupText: {
    fontSize: 20,
    fontFamily: 'DungGeunMo',
    textAlign: 'center',
    color: '#FFF',
  },
});

export default Point;
