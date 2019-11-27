import React, {Component} from 'react';
import { Alert } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import HeaderApp from './../components/HeaderApp';
import CardProduct from './../components/CardProduct';

class MainScene extends Component{
  
  constructor(props){
    super(props)
    this.store = this.props.store;
    this.state = {productos: []};
  }

  componentDidMount(){
    this.setState({productos: this.cards()});
  }

  onPress(nombre){
    Alert.alert(nombre);
  } 

  onActualizar(){
    Actions.refresh({nombre: 'Juan'});
  } 

  cards(){
    let productos = [{
      nombre: 'Producto 1',
      descripcion: 'Descripcion 1',
      tipo: '1',
      stock: '10',
      precio: '10'
    },{
      nombre: 'Producto 2',
      descripcion: 'Descripcion 2',
      tipo: '1',
      stock: '20',
      precio: '15'
    },{
      nombre: 'Producto 3',
      descripcion: 'Descripcion 3',
      tipo: '2',
      stock: '30',
      precio: '10'
    },{
      nombre: 'Producto 4',
      descripcion: 'Descripcion 4',
      tipo: '2',
      stock: '20',
      precio: '30'
    },{
      nombre: 'Producto 5',
      descripcion: 'Descripcion 5',
      tipo: '2',
      stock: '10',
      precio: '40'
    }]
    return productos;
  }

  render(){
    let productos = this.state.productos===null? null : this.state.productos.map((producto, index)=>
      <CardProduct key={index} producto={producto}/>
    );
    return (
      <Container>
        <HeaderApp title={'E-Commerce'} cart />
        <Content>
          <Text>{this.props.id}</Text>
          {productos}
        </Content>
      </Container>     
    )
  }
}

export default MainScene