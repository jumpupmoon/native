import { Button } from 'react-native-elements';
import React, { Component } from 'react';

class StartButton extends Component {
  render() {
    return (
      <Button
      title="시작하기"
      type="outline"
      onPress={() => this.props.navigation.navigate('Home')}     
    />
    );
  }
}

export default StartButton;