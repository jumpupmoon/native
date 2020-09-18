import React from 'react';
import Styled from 'styled-components';

const Container = Styled.View`
  flex: 1;
`;

const ImageBackground = Styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

const Button = Styled.Button``;

const Text = Styled.Text``;

export default function Intro({navigation}) {
  return (
    <Container>
      <ImageBackground source={require('./img/2.jpg')}>
        <Text>123</Text>
        <Button
          title="시작하기"
          onPress={() => navigation.navigate('Home')}
        />
      </ImageBackground>
    </Container>
  );
};