import React, {Component} from 'react';
import { Alert } from 'react-native';
import { Container, Content, Text, Button, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import HeaderApp from './../components/HeaderApp';
import CardProduct from './../components/CardProduct';
import firebase from 'react-native-firebase';

class CameraScene extends Component{
  
  constructor(props){
    super(props)
    this.store = this.props.store;
    this.state = {avatarSource: null};
    this.onPress = this.onPress.bind(this);
  }

  onPress(){
    firebase.database().ref('/').set({
      email: 'essenwanger@gmail.com',
      nombre : 'vic'
    });
  }

  render(){
    return (
      <Container>
        <HeaderApp title={'E-Commerce'} cart />
        <Content>
          <Button block onPress={this.onPress}>
            <Text>Primary</Text>
          </Button>
        </Content>
      </Container>     
    )
  }
}

export default CameraScene