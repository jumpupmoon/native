import React from 'react';
import { Container, Content, Text, View } from 'native-base';
import Footer from './Footer';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import NfcTag from './popup/NfcTag';
import Popup from './popup/Popup1';

export default function Profile({ navigation }) {
    return (
        <Container>
            <Content>
                <View style={styles.header}><Text>프로필 정보 수정</Text></View>
                <View style={styles.profile}><Text>hi</Text></View>
                <View style={styles.header}><Text>개인 정보 관리</Text></View>
                <View style={styles.lineT} />
                <TouchableHighlight style={styles.header}  underlayColor="green"><Text>프로필 사진 변경</Text></TouchableHighlight>
                <View style={styles.lineT} />
                <TouchableHighlight style={styles.header}  underlayColor="green"><Text>프로필 정보 수정</Text></TouchableHighlight>
                <View style={styles.lineB} />
                <View style={styles.header}><Text>포인트 관리</Text></View>
                <View style={styles.lineT} />
                <TouchableHighlight style={styles.header}  underlayColor="green"><Text>포인트 충전</Text></TouchableHighlight>
                <View style={styles.lineT} />
                <TouchableHighlight style={styles.header}  underlayColor="green"><Text>포인트 내역 확인</Text></TouchableHighlight>
                <View style={styles.lineB} />
            </Content>
            <NfcTag></NfcTag>
            <Footer navigation={navigation}/>
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
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    profile: {
        flex: 1,
        height: hp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    other: {
        flex: 3,
        backgroundColor: 'white',
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