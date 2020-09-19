import React, { useEffect, useState } from 'react';
import {Container, Content, Text, Button} from 'native-base';
import axios from 'axios';
import Footer from './Footer';

export default function Course({navigation}) {
  const [count, setCount] = useState(0);

  const forButton = num => {
    let result = [];

    for(let i=0; i<num; i++) {
      result.push(
        <Button key={i} onPress={() => navigation.navigate('CourseDetail', i)}> 
          <Text>등산 기록 {i}</Text>
        </Button>
      )
    }

    return result;
  }

  useEffect(() => {
    axios.get('http://localhost:5000/count')
    .then(({data}) => {
      setCount(data);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <Container>
        <Content>
            {/* <Button onPress={() => navigation.navigate('CourseDetail')}> 
                <Text>성판악 코스</Text>
            </Button> */}

            <Text>현재 등산 수 : {count}</Text>

            {forButton(count)}
        </Content>
        
        <Footer navigation={navigation} />
    </Container>
  );
};