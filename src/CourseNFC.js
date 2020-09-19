import React from 'react';
import {Container, Content, Text, Button} from 'native-base';
import Footer from './Footer';
import Styled from 'styled-components';

const CenterView = Styled.View`
  align-items: center;
`;

const Image = Styled.Image`
  height: 300px;
  resize-mode: contain;
  margin-top: 30px;
`;

const TouchDiv = Styled.TouchableOpacity`
  height: 50px;
`

export default function CourseNFC({navigation}) {
  return (
    <Container>
        <Content>
          <CenterView>
            <Image source={require('./img/3.png')} />

            <Button onPress={() => navigation.navigate('CourseSuccess')}>
              <Text>넘어가기</Text>
            </Button>

            <Text>Now!</Text>        
            <Text>정상(동능)</Text>       
            <Text>IN</Text>       
            <Text>성판악 탐방로</Text>        
            <Text>※ 해당 위치에 NFC를 태그해 주세요</Text>         
          </CenterView>
        </Content>
        
        <Footer navigation={navigation} />
    </Container>
  );
};