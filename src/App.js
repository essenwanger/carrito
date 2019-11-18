import React, {Component} from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import { StyleProvider } from 'native-base';
import getTheme from './themes/components';
import ecommerce from './themes/variables/ecommerce';
import LoginScene from './scenes/LoginScene'
import MainScene from './scenes/MainScene'
import CameraScene from './scenes/CameraScene'
import MapsScene from './scenes/MapsScene'
import carrito from './reducers';
import { createStore } from 'redux';

let store = createStore(carrito);

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(ecommerce)}>
      <Router>
        <Stack key="root">
          <Scene key="login" component={()=><LoginScene store={store} />} hideNavBar initial/>
          <Scene key="main" component={()=><MainScene store={store} />} hideNavBar />
          <Scene key="camera" component={()=><CameraScene store={store} />} hideNavBar />
          <Scene key="maps" component={()=><MapsScene store={store} />} hideNavBar />
        </Stack>
      </Router>
      </StyleProvider>
    );
  }
}
