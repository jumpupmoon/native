import React, { useState } from 'react';
import { Container, Content, Text, View } from 'native-base';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import Footer from './Footer';
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default function PointHistory({ navigation }) {
  const [HeadTable, setHeadTable] = useState(['서비스명',  '결제금액', '상태', '결제일']);
  const [DataTable, setDataTable] = useState([
    ['포인트충전',  '10,000원', '결제완료', '2020.10.01 13:08'],
    ['a', 'c', 'd', 'e'],
    ['1',  '3', '4', '5'],
    ['a',  'c', 'd', 'e'],
    ['1',  '3', '4', '5']
  ])
  return (
    <Container>
      <Content>
        <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#ffa1d2' }}>
            <Row data={HeadTable} style={styles.HeadStyle} textStyle={styles.HeadStyle, styles.HeadText} />
          <Rows data={DataTable} style={styles.TableStyle} textStyle={styles.TableText} />
        </Table>
        </View>
      </Content>
      <Footer navigation={navigation} />
    </Container>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: '#ffffff'
  },
  HeadStyle: {
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
    
  },
  HeadText:{
    fontSize:16,
    textAlign:'center'
  },
  TableStyle:{
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: {
    fontSize: 14,
    textAlign: 'center'
  },
})