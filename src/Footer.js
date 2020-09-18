import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';

export default function Layout({navigation}) {
  return (
        <Footer>
            <FooterTab>
                <Button onPress={() => navigation.navigate('Home')}>
                    <Text>홈</Text>
                </Button>
                <Button onPress={() => navigation.navigate('Info')}>
                    <Text>탐험 정보</Text>
                </Button>
                <Button onPress={() => navigation.navigate('Course')}>
                    <Text>내 탐방</Text>
                </Button>
                <Button>
                    <Text>랭킹</Text>
                </Button>
                <Button>
                    <Text>마이페이지</Text>
                </Button>
            </FooterTab>
        </Footer>
  );
};