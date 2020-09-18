import React from 'react';
import {Container, Content, Text} from 'native-base';
import Footer from './Footer';

export default function Course({navigation}) {
  return (
    <Container>
        <Content>
            <Text>내 탐방</Text>
        </Content>
        
        <Footer navigation={navigation} />
    </Container>
  );
};