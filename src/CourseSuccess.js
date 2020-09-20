import React from 'react';
import {Container, Content, Text, Button} from 'native-base';
import Footer from './Footer';

export default function CourseSuccess({navigation}) {
  return (
    <Container>
        <Content>
          <Button onPress={() => navigation.navigate('CourseDetail')}>
            <Text>코스 성공</Text>
          </Button>
        </Content>
        
        <Footer navigation={navigation} />
    </Container>
  );
};