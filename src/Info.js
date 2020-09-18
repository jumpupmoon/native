import React from 'react';
import {Container, Content, Button, Text} from 'native-base';
import Footer from './Footer';

export default function Course({navigation}) {
  return (
    <Container>
        <Content>
          <Button onPress={() => navigation.navigate('InfoDetail')}> 
            <Text>어리목 코스</Text>
          </Button>
        </Content>
        
        <Footer navigation={navigation} />
    </Container>
  );
};