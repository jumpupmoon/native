import React from 'react';
import {Container, Content, Text, Button} from 'native-base';
import Footer from './Footer';

export default function Course({navigation}) {
  return (
    <Container>
      <Content>
        <Button onPress={() => navigation.navigate('SelectCourse')}>
          <Text>탐험 정보</Text>
        </Button>
      </Content>

      <Footer navigation={navigation} />
    </Container>
  );
}
