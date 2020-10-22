import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import PointYes from './PointYes';


const Point = ({token,price}) => {
  const [modalVisible, setModalVisible] = useState(false);
  

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
            <Text style={styles.modalText}>선택하신 포인트 충전을 진행 하시겠습니까?</Text>
            <Text>{"\n"}충전 포인트 : {token}백록</Text>
            <Text styles={[(price) && {color:'red'}]}>{"\n"}결제 금액 : {price}원</Text>
            <View style={styles.button}>
              <PointYes onPress={() => {
                setModalVisible(!modalVisible);
              }}/>
              <TouchableHighlight onPress={() => {
                setModalVisible(!modalVisible);
              }} ><Text>아니오</Text></TouchableHighlight>
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

export default Point;
