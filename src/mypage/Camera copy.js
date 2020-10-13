import React,{useState} from 'react';
import {Container, Content, Text, View} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import Footer from '../Footer';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Camera({navigation}){
  const options = {
    title: '이미지 가져오기',
    takePhotoButtonTitle: '사진 찍기',
    chooseFromLibraryButtonTitle: '이미지 불러오기',
    cancelButtonTitle : '취소',
    // customButtons: [
    //   { name: 'button_id_1', title: 'CustomButton 1' },
    //   { name: 'button_id_2', title: 'CustomButton 2' }
    // ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const [ImageSource, setImageSource]= useState(null)

  const showImagePicker = () => {
    
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        let src = response;
        setImageSource(src);
      }
    });
  }

  const showCamera =()=>{
    ImagePicker.launchCamera(options, response => {
      if (response.error) {
        console.log('LaunchCamera Error: ', response.error);
      }
      else {
        let src = response;
        setImageSource(src);
      }
    });
  }

  const showCameraRoll = () =>{
    ImagePicker.launchImageLibrary(options, response => {
      if (response.error) {
        console.log('LaunchImageLibrary Error: ', response.error);
      }
      else {
        let src = response;
        setImageSource(src);
      }
    });
  }

  return (
    <Container>
      <Content>
        
        <TouchableOpacity onPress={showImagePicker}>
          <View style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]} >
            {ImageSource === null ? (
              <Text>이미지 가져오기</Text>
            ) : (
                <Image style={styles.avatar}  source={ImageSource} />
              )}
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={showCamera}>
          <Text>사진 찍기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showCameraRoll}>
          <Text>이미지 불러오기</Text>
        </TouchableOpacity> */}
        
      </Content>
      <Footer navigation={navigation} value="5"/>
    </Container>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
  },
})