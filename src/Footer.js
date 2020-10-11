import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
export default function Layout({navigation, value}) {
    return (
        <Footer>
            <FooterTab style={{backgroundColor:"#87D37C"}}>
                <Button  onPress={() => navigation.navigate('Home')} active={value == 1 && true}>
                    <Icon name="mountains" size={30} color='#fff' />
                </Button>
                <Button onPress={() => navigation.reset({routes: [{ name: 'Info' }]})} active={value == 2 && true}>
                    <Icon name="trees" size={30} color='#fff'/>
                </Button>
                <Button onPress={() => navigation.reset({routes: [{ name: 'Course' }]})} active={value == 3 && true}>
                    <Icon name="marker" size={30} color='#fff'/>
                </Button>
                <Button onPress={() => navigation.navigate('MtRank')} active={value == 4 && true}>
                    <Icon name="trophy" size={30} color='#fff'/>
                </Button>
                <Button onPress={() => navigation.navigate('Mypage')} active={value == 5 && true}>
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