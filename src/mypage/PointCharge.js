import React,{useState} from 'react';
import { Container, Content, Text, View } from 'native-base';
import Footer from '../Footer';
import {
    StyleSheet,
    TouchableOpacity,
    
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Point from '../popup/Point'

export default function PointCharge({ navigation }) {
    const [state,setState] = useState({token:0,won:"0",color:0});
    return (
        <Container>
            <Content style={{flex:1}}>
                <View style={styles.header}><Text style={styles.headerText}>포인트 충전</Text></View>
                <TouchableOpacity  style={state.color === 1? styles.select : styles.button} 
                onPress={() => setState({token:10,won:"1,000",color:1})}>
                    <View style={styles.listPoint}>
                        <Text style={styles.listText}>10 백록</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>1,000원</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineT} />
                <TouchableOpacity  style={state.color === 2? styles.select : styles.button} 
                onPress={() => setState({token:30,won:"3,000",color:2})}>
                    <View style={styles.listPoint}>
                        <Text style={styles.listText}>30 백록</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>3,000원</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineT} />
                <TouchableOpacity  style={state.color === 3? styles.select : styles.button} 
                onPress={() => setState({token:50,won:"5,000",color:3})}>
                    <View style={styles.listPoint}>
                        <Text style={styles.listText}>50 백록</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>5,000원</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineT} />
                <TouchableOpacity  style={state.color === 4? styles.select : styles.button} 
                onPress={() => setState({token:110,won:"10,000",color:4})}>
                    <View style={styles.listPoint}>
                        <Text style={styles.listText}>110 백록</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>10,000원</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineT} />
                <TouchableOpacity  style={state.color === 5? styles.select : styles.button} 
                onPress={() => setState({token:600,won:"50,000",color:5})}>
                    <View style={styles.listPoint}>
                        <Text style={styles.listText}>600 백록</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>50,000원</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineT} />
                <TouchableOpacity  style={state.color === 6? styles.select : styles.button} 
                onPress={() => setState({token:1300,won:"100,000",color:6})}>
                    <View style={styles.listPoint}>
                        <Text style={styles.listText}>1300 백록</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>100,000원</Text>
                    </View>
                    
                    
                </TouchableOpacity>
                
                <View style={styles.lineT} />
                <Point token={state.token} price={state.won} />
            </Content>
            
            <Footer navigation={navigation} value="5"/>
        </Container>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }, 
    header: {
        padding: 20,
        backgroundColor: '#1E824C',
    },
    headerText:{
        fontSize: 30, 
        textAlign: 'center', 
        color: '#FFF', 
        fontFamily: 'DungGeunMo'
    },
    list:{
        height:hp('10%'),
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginLeft:20,
        marginRight:20,
    },
    listText:{
        fontFamily: 'DungGeunMo'
    },
    listPoint:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    lineT: {
        height: hp('0.2%'),
        backgroundColor: 'gray'
    },
    lineB: {
        height: hp('2%'),
        backgroundColor: 'gray'
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
    },
    price:{
        color:'red',
        fontFamily: 'DungGeunMo'
    },
    select: {
        backgroundColor: '#66FFCC',
        flexDirection : 'row',
        justifyContent: 'space-between',
        padding: 20,
      },
    button: {
        justifyContent: 'space-between',
        flexDirection : 'row',
        padding: 20,
    },
})