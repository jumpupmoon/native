import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Button,
} from 'react-native';
import PointYes from './PointYes';
import NfcTag from './NfcTag';


const RandomToken = ({token,price}) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [nfcSuccess, setNfcSuccess] = useState(false)

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.button}>

              <Image source={require('../img/gift.jpg')}></Image>
              
              <View><Text style={styles.First}>태그 성공!</Text></View>
              <View><Text style={styles.Second}>1백록 증정!</Text></View>
              <TouchableHighlight onPress={() => {
                setModalVisible(!modalVisible);
              }} ><Text style={{textAlign:'center', margin:50, backgroundColor:'green'}}>아니오</Text></TouchableHighlight>
              {/* <Button>asdasd</Button> */}
              {/* <PointYes onPress={() => {setModalVisible(!modalVisible);``}}/>
              <NfcTag onPress={() => {setModalVisible(!modalVisible);``}}/> */}
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>충전하기</Text>
      </TouchableHighlight>
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
});

export default RandomToken;
