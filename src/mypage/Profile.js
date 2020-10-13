import React,{useState} from 'react';
import { Container, Content, Text, View  } from 'native-base';
import Footer from '../Footer';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
    TextInput
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import NfcTag from '../popup/NfcTag';
// import Popup2 from '../popup/Popup2';

export default function Profile({ navigation }) {
    const [value, onChangeText] = useState('빈칸 입력');

    return (
        <Container>
            <Content>
                <View style={styles.header}><Text style={styles.headerText}>프로필 정보 수정</Text></View>
                <View style={styles.profile}><Text style={styles.contentText}>프로필 간단 정보</Text></View>
                <View style={styles.content}><Text style={styles.contentText}>닉네임 변경</Text>
                    <TextInput style={styles.textInput} onChangeText={text => onChangeText(text)} value={value}
                    /></View>
                <View style={styles.lineT} />
                <View style={styles.content}><Text style={styles.contentText}>이메일 변경</Text>
                    <TextInput style={styles.textInput} onChangeText={text => onChangeText(text)} value={value}
                    /></View>
                <View style={styles.lineT} />
                <View style={styles.content}><Text style={styles.contentText}>자기 소개 변경</Text>
                    <TextInput style={styles.textInput} onChangeText={text => onChangeText(text)} value={value}
                    /></View>
                <View style={styles.lineT} />
            </Content>
            <NfcTag></NfcTag>
            
            <Footer navigation={navigation} value="5"/>
        </Container>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header: {
        padding: 20,
        backgroundColor: '#1E824C',
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'DungGeunMo'
    },
    profile: {
        flex: 1,
        height: hp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    content: {
        height: hp('11%'),
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    contentText:{
        fontFamily: 'DungGeunMo',
        padding:10,
        marginTop:10
    },
    textInput:{
        height: 40,
        marginBottom:10
    },
    lineT: {
        height: hp('0.2%'),
        backgroundColor: 'gray'
    },
    lineB: {
        height: hp('2%'),
        backgroundColor: 'gray'
    }
})