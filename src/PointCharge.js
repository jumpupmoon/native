import React,{useState} from 'react';
import { Container, Content, Text, View } from 'native-base';
import Footer from './Footer';
import {
    StyleSheet,
    TouchableOpacity,
    
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Point from './popup/Point'

export default function PointCharge({ navigation }) {
    const [price,setPrice] = useState({token:0,won:"0"});
    return (
        <Container>
            <Content style={{flex:1}}>
                <View style={styles.header}><Text>포인트 충전</Text></View>
                <View style={styles.lineB} />
                <TouchableOpacity style={styles.list} onPress={() => setPrice({token:10,won:"1,000"})}>
                    <View style={styles.listPoint}>
                        <Text>10 백록</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>1,000원</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineT} />
                <TouchableOpacity style={styles.list}onPress={() => setPrice({token:30,won:"3,000"})}>
                    <View style={styles.listPoint}>
                        <Text>30 백록</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>3,000원</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineT} />
                <TouchableOpacity style={styles.list} onPress={() => setPrice({ token: 50, won: "5,000" })}>
                    <View style={styles.listPoint}>
                        <Text>50 백록</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>5,000원</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineT} />
                <TouchableOpacity style={styles.list} onPress={() => setPrice({ token: 110, won: "10,000" })}>
                    <View style={styles.listPoint}>
                        <Text>110 백록</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>10,000원</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineT} />
                <TouchableOpacity style={styles.list} onPress={() => setPrice({ token: 600, won: "50,000" })}>
                    <View style={styles.listPoint}>
                        <Text>600 백록</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>50,000원</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineT} />
                <TouchableOpacity style={styles.list} onPress={() => setPrice({ token: 1300, won: "100,000" })} >
                    <View style={styles.listPoint}>
                        <Text>1300 백록</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>100,000원</Text>
                    </View>
                </TouchableOpacity>
                
                <View style={styles.lineT} />
                <Point token={price.token} price={price.won} />
            </Content>
            
            <Footer navigation={navigation}/>
        </Container>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }, 
    header: {
        height: hp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    list:{
        height:hp('10%'),
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginLeft:20,
        marginRight:20,
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
    }
})