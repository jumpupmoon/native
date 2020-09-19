import React, {useState} from 'react';
import {Platform,Text,View, StyleSheet,TouchableOpacity} from 'react-native';
import Styled from 'styled-components';

const ImageBackground = Styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export default function Intro({navigation}) {
  const [includeFontPadding, setIncludeFontPadding] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/2.jpg')} style={styles.bg}>
        <View style={styles.title}>
          <Text style={styles.title1}>안녕하우꽈?</Text>
          <Text style={styles.title2}>산 오쿠과!</Text>      
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contents}> '산에 오시겠습니까'라는 뜻의 제주도 사투리입니다.</Text>
          <Text style={styles.contents}>{"\n"}한라산을 방문한 등산 초보를 위해{"\n"}
              한라산에 좀 더 쉽고 재밌게 다가갈 수 있기를{"\n"}
              바라는 뜻에서 출발했습니다.</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonTitle}>시작하기</Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    ...Platform.select({
      ios: { fontFamily: 'AppleSDGothicNeo-Regular' },
      android: {
        fontFamily: 'NotoSansKR-Bold',
        fontWeight: 'bold',
          includeFontPadding: false
      }
    }),
    
  },
  bg:{
    paddingHorizontal: 10
  },
  title:{    
    marginTop: 250,
    marginBottom:50,
    padding: 3
    
  },
  title1:{
    fontSize :32,
    color : '#404040',
    fontWeight: 'bold',
    
  },
  title2:{
    fontSize :32,
    color : '#FFFFFF',
    fontWeight: 'bold',
    
  },
  contentView:{   
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 100,
    
   
  },
  contents:{
    fontSize :16,
    color : '#47525E',
    fontWeight: 'bold',
    alignItems: "center",
    textAlign: 'center'
  },
  button: {    
    marginTop: 100,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: '#2c3e50',
    borderWidth: 3,
   
    marginBottom: 250,
    padding: 5,
    marginHorizontal: 80
    
  },
  buttonTitle: {
    padding: 0,
    fontSize: 28,
    color: '#2c3e50',
    fontWeight: 'bold',
    
  },
});