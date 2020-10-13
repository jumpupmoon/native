import React, { useState } from 'react';
import { Container, Content, Text, View, ScrollView } from 'native-base';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import Footer from '../Footer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default function PointHistory({ navigation }) {
  const [HeadTable, setHeadTable] = useState(['서비스명',  '결제금액', '상태', '결제일']);
  const [DataTable, setDataTable] = useState([
    ['포인트충전',  '10,000원', '결제완료', '2020.10.01 13:08'],
    ['1', '3', '4', '5'],
    ['1',  '3', '4', '5'],
    ['1',  '3', '4', '5'],
    ['1',  '3', '4', '5'],
    ['1', '3', '4', '5'],
    ['1', '3', '4', '5'],
    ['1', '3', '4', '5'],
    ['1', '3', '4', '5'],
    ['1', '3', '4', '5'],
  ])
  return (
    <Container>
      <Content>
        <View style={styles.header}>
          <Text style={styles.headerText}>포인트 내역</Text>
        </View>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#ffa1d2' }}>
          <Row data={HeadTable} style={styles.HeadStyle} textStyle={styles.HeadStyle, styles.HeadText} />
          <Rows data={DataTable} style={styles.TableStyle} textStyle={styles.TableText} />
        </Table>
      </Content>
      <Footer navigation={navigation} value="5"/>
    </Container>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 30,
    backgroundColor: '#ffffff'
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
  HeadStyle: {
    height: 50,
    alignContent: "center",
  },
  HeadText:{
    fontFamily: 'DungGeunMo',
    fontSize:16,
    textAlign:'center'
  },
  TableStyle:{
    height: 50,
    alignContent: "center",
    
  },
  TableText: {
    fontFamily: 'DungGeunMo',
    fontSize: 14,
    textAlign: 'center'
  },
})