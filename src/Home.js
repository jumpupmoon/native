import React from 'react';
import {Container, Content, Text} from 'native-base';
import Footer from './Footer';

export default function Layout({navigation}) {
  return (
    <Container>
        <Content>
            <Text>홈 화면</Text>
        </Content>
        
        <Footer navigation={navigation} />
    </Container>
  );
};