import React from 'react';
import {Container, Content, Text, Button} from 'native-base';
import Footer from './Footer';

export default function CourseDetail({navigation}) {
  return (
    <Container>
        <Content>
            <Button onPress={() => navigation.navigate('CourseNFC')}>
                <Text>태깅하기</Text>
            </Button>
        </Content>
        
        <Footer navigation={navigation} />
    </Container>
  );
};