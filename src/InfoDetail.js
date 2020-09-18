import React from 'react';
import {Container, Content, Text} from 'native-base';
import Footer from './Footer';

export default function InfoDetail({navigation}) {
  return (
    <Container>
        <Content>
            <Text>탐험 정보 상세</Text>
        </Content>
        
        <Footer navigation={navigation} />
    </Container>
  );
};