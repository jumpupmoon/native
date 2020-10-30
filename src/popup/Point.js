import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PointYes from './PointYes';


const Point = ({token,price}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const chargeToken =() => {
    AsyncStorage.getItem('address')
    .then(address => {
      console.log(address)
      axios.get(`https://whitedeer.herokuapp.com/charge?address=${address}&amount=${token}`)
      .then(({data}) => {
        console.log(token);
        
      })
      .catch(err => console.log(err));
    })
  }

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
            <Text style={styles.modalText}>선택하신 포인트 충전을</Text><Text> 진행 하시겠습니까?</Text>
            <Text>{"\n"}충전 포인트 : {token}백록</Text>
            <Text styles={[(price) && {color:'red'}]}>{"\n"}결제 금액 : {price}원</Text>
            <View style={styles.button}>
              <TouchableHighlight style={styles.selectBtn} onPress={() => {
                chargeToken();
                setModalVisible(!modalVisible);
                Alert.alert('포인트 충전이 완료되었습니다.');
              }} ><Text style={styles.textStyle}>예</Text></TouchableHighlight>
              <TouchableHighlight style={styles.selectBtn} onPress={() => {
                setModalVisible(!modalVisible);
              }} ><Text style={styles.textStyle}>아니오</Text></TouchableHighlight>
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
  modalView: {
    margin: hp('10%'),
    marginBottom:hp('30%'), 
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
    borderRadius: 15,
    padding: 15,
    elevation: 2,
    marginTop:25,
    // borderColor:'Black'
  },
  selectBtn : {
    backgroundColor: 'green',
    borderRadius: 15,
    padding:10 ,
    margin:hp('3%'),
  },
  button:{
    
    flexDirection : 'row',
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

export default Point;
