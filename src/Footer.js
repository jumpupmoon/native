import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
export default function Layout({navigation}) {
  return (
        <Footer>
             <FooterTab style={{backgroundColor:"#87D37C"}}>
                <Button  onPress={() => navigation.navigate('Home')}>
                    <Icon name="mountains" size={30} color='#fff'/>
                    
                </Button>
                <Button onPress={() => navigation.navigate('Info')}>
                    <Icon name="trees" size={30} color='#fff'/>
                </Button>
                <Button onPress={() => navigation.navigate('Course')}>
                <Icon name="marker" size={30} color='#fff'/>
                </Button>
                <Button>
                    <Icon name="trophy" size={30} color='#fff'/>
                </Button>
                <Button>
                 <Icon name="torso" size={30} color='#fff'/>
                </Button>
            </FooterTab>
        </Footer>
  );
};

const styles = StyleSheet.create({
    text:{
        color: '#FFFFFF',
    }
});