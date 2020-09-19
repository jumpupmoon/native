import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';

const Popup2 = ({nfcSuccess, setNfcSuccess}) => {
  // const [modalVisible, setModalVisible] = useState(nfcSuccess);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={nfcSuccess}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{height: 100, width: 100, resizeMode: 'contain'}}
              source={require('../img/check.png')}
            />
            <Text style={styles.modalText1}>사라오름 입구</Text>
            <Text
              style={
                (styles.modalText2,
                {fontWeight: 'bold', letterSpacing: 1, marginBottom: 20})
              }>
              (성판악 코스 3번째 지점)
            </Text>
            <Text style={{fontSize: 32, color: 'orange', fontWeight: 'bold'}}>
              SUCCESS!
            </Text>
            <Text style={{textAlign: 'left'}}>▶다음코스 안내</Text>
            <Text style={{fontSize: 28, fontWeight: '800', marginBottom: 10}}>
              진달래밭
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: 'yellow',
                marginBottom: 10,
                textAlign: 'center',
              }}>
              B(보통)
            </Text>
            <Text style={styles.modalText3}>약 1시간 소요(1.5Km)</Text>
            <Text style={styles.modalText3}>※다음위치에 유인대피소 위치</Text>

            <TouchableHighlight
              style={{...styles.openButton2, backgroundColor: '#D9D9D9'}}
              onPress={() => {
                setNfcSuccess(false);
              }}>
              <Text style={styles.textStyle}>확 인</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      {/* <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={(styles.textStyle, {color: 'white'})}>확인</Text>
      </TouchableHighlight> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 60,
    paddingTop: 10,
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
    backgroundColor: '#404040',
    borderRadius: 0,
    padding: 32,
    paddingTop: 12,
    paddingBottom: 12,
    elevation: 1,
  },
  openButton2: {
    backgroundColor: '#404040',
    //justifyContent: 'space-around',
    alignItems: 'stretch',
    elevation: 1,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
    textAlign: 'center',
  },
  modalText2: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText3: {
    fontSize: 15,
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Popup2;
