import React, {Component} from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import { StyleProvider } from 'native-base';
import getTheme from './themes/components';
import ecommerce from './themes/variables/ecommerce';
import LoginScene from './scenes/LoginScene'
import MainScene from './scenes/MainScene'
import CameraScene from './scenes/CameraScene'
import MapsScene from './scenes/MapsScene'
import FirebaseScene from './scenes/FirebaseScene'
import WebViewScene from './scenes/WebViewScene'
import AnimatedScene from './scenes/AnimatedScene'
import firebase from 'react-native-firebase'
import crossroads from 'crossroads'
import carrito from './reducers';
import { createStore } from 'redux';

let store = createStore(carrito);

export default class App extends Component {

  handleOpenURL = (url) => {
    const scheme = 'https://www.google.com'
    if(url && url.includes(scheme)){
      let index = url.indexOf(scheme)
      let slice = url.slice(index+scheme.length+1)
      crossroads.resetState()
      crossroads.parse(slice)
    }
  }

  componentDidMount(){
    firebase.links().getInitialLink().then(this.handleOpenURL)
    this.unsuscribe = firebase.links().onLink(this.handleOpenURL)
  }

  componentWillUnmount(){
    this.unsuscribe()
  }

  render() {
    return (
      <StyleProvider style={getTheme(ecommerce)}>
      <Router>
        <Stack key="root">
          <Scene key="login" component={(props)=><LoginScene {...props} store={store} />} hideNavBar initial/>
          <Scene key="main" component={(props)=><MainScene {...props} store={store} />} hideNavBar />
          <Scene key="camera" component={(props)=><CameraScene {...props} store={store} />} hideNavBar />
          <Scene key="maps" component={(props)=><MapsScene {...props} store={store} />} hideNavBar />
          <Scene key="firebase" component={(props)=><FirebaseScene {...props} store={store} />} hideNavBar />
          <Scene key="webview" component={(props)=><WebViewScene {...props} store={store} />} hideNavBar />
          <Scene key="animated" component={(props)=><AnimatedScene {...props} store={store} />} hideNavBar />
        </Stack>
      </Router>
      </StyleProvider>
    );
  }
}

crossroads.addRoute('main/{id}', id => Actions.reset('main', {id}))
