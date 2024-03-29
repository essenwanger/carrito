import React, {Component} from 'react';
import { Card, CardItem, Body, Text, Right, Thumbnail } from 'native-base';

class CardProduct extends Component{

  constructor(props){
    super(props)
  }

  render(){
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Card>
        <CardItem button onPress={this.props.onPress}>
          <Body>
            <Text>
               {this.props.producto.nombre}
            </Text>
          </Body>
          <Right>
            <Thumbnail source={{uri: uri}} />
          </Right>
        </CardItem>
      </Card>
    )
  }
}

export default CardProduct