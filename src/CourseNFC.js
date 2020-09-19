import React from 'react';
import {Container, Content, Text, Button} from 'native-base';
import Footer from './Footer';

export default function CourseNFC({navigation}) {
  return (
    <Container>
        <Content>
          <Button onPress={() => navigation.navigate('CourseSuccess')}>
            <Text>NFC</Text>
          </Button>
        </Content>
        
        <Footer navigation={navigation} />
    </Container>
  );
};