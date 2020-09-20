import React from 'react';
import {Container, Content, Text, Button} from 'native-base';
import Footer from './Footer';

export default function InfoDetail({navigation}) {
  return (
    <Container>
      <Content>
        <Button onPress={() => navigation.navigate('Prepare')}>
          <Text>탐험 정보 상세</Text>
        </Button>
      </Content>

      <Footer navigation={navigation} />
    </Container>
  );
}
