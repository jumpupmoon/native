import React,{useState} from 'react';
import {Container, Content, Text, CheckBox, View} from 'native-base';
import {StyleSheet, Image,TouchableHighlight} from 'react-native';
import Footer from './Footer';
import Check from './component/Check';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Prepare({navigation}) {

  const [isSelected, setSelection] = useState(false);

  return (
    <Container style={{backgroundColor: '#1E824C'}}>
      <Content style={{borderWidth:3, margin:20, borderColor:'#87D37C'}}>
      <View style={styles.Header}>
            <Text style={styles.Title}>산행 준비물</Text>
            <Text style={styles.detail}>안전하고 즐거운 산행을 위해 체크해보세요!</Text>
      </View> 
      <View style={styles.list}>
        <View style={styles.item}>
        
        
       
        <View style={styles.imgView}>
          <Image style={styles.img}source={require('./img/간식.png')} />
        </View>  
          <Text style={{fontSize: 30,
    fontFamily: 'DungGeunMo',
    textAlignVertical: 'center',
    marginLeft: 80,
    color:'#FFF',
    textDecorationLine:'line-through'}}>간식</Text>
        </View>

        <View style={styles.item}>
        <View style={styles.imgView}>
          <Image style={styles.img}source={require('./img/물.png')} />
        </View>  
          <Text style={styles.imgTitle}>물</Text>
        </View>

        <View style={styles.item}>
        <View style={styles.imgView}>
          <Image style={styles.img}source={require('./img/선그라스.png')} />
        </View>  
          <Text style={styles.imgTitle}>선글라스</Text>
        </View>

        <View style={styles.item}>
        <View style={styles.imgView}>
          <Image style={styles.img}source={require('./img/부츠.png')} />
        </View>  
          <Text style={styles.imgTitle}>등산화</Text>
        </View>

        <View style={styles.item}>
        <View style={styles.imgView}>
          <Image style={styles.img}source={require('./img/반창고.png')} />
        </View>  
          <Text style={styles.imgTitle}>비상의약품</Text>
        </View>

      </View> 

      <View style={styles.buttonView}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate('Guide')}>
          <Text style={{color: '#FFF', textAlign: 'center',fontFamily: 'DungGeunMo',padding:10,fontSize:36}}>확인 완료</Text>
        </TouchableHighlight>
      </View>

      </Content>      
      <Footer navigation={navigation} />
    </Container>
  );
}


//스타일 시트
const styles = StyleSheet.create({
  
  Title: {
    fontSize: 36,   
    color: '#FFF',
    textAlign: 'center',   
    fontFamily: 'DungGeunMo',
    paddingTop: 10,
    paddingBottom: 4,
    
  },
  detail: {
    fontSize: 14,   
    color: '#87D37C',
    textAlign: 'center',   
    fontFamily: 'DungGeunMo',
   
  },
  list: {
   marginHorizontal:20,
   marginVertical:40
  },
  item: {    
    
    padding:18,
  },
  
  img: {
    position: 'absolute',   
    width: wp('10%'), 
    height: hp('5%'),
    padding: 10,
    marginLeft: 30,
    
  },
  imgTitle: {
    fontSize: 30,
    fontFamily: 'DungGeunMo',
    textAlignVertical: 'center',
    marginLeft: 80,
    color:'#FFF',
    textDecorationLine:'line-through',
  },
  button: {
    backgroundColor: '#87D37C',
    borderRadius: 3,
    borderColor:'#87D37C',
    marginHorizontal:40,
    marginTop:40
    
  },
  
 
});
