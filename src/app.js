/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { configureStore,initialState } from './redux/store';
import {NAVIGATOR_OPTIONS } from '@constants';
import { persistStore } from 'redux-persist';

import * as Animatable from 'react-native-animatable';
import {Navigation} from 'react-native-navigation';
import {reduxProvider,Screens} from './screens/index'
import Profile from './screens/Profile/Profile';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

class App {
  constructor() {    
    this.locked = false;
    this.currentAppState = '';
    this.store = null;

    
  }  
  static setRoot({ screen = '', passProps = {} }) {
    try {
      Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: 'HomeScreen'
                }
              }
            ]
          }
        }
      });
    } catch (error) {
      console.log(error);
    } 
  }


  static _startApp(){
    this.store = configureStore()
    Screens.forEach((C, key) => {
      Navigation.registerComponent(key,() => gestureHandlerRootHOC(reduxProvider(C,this.store,Provider)),() => C);
  });
    Navigation.events().registerAppLaunchedListener(()=>{

     //
     

      //Navigation.setDefaultOptions(NAVIGATOR_OPTIONS);
     // registerScreenComponents(this.store,Provider)
      this.setRoot('HomeScreen')
    //   persistStore(this.store, null, () => {
    //     this.setRoot('HomeScreen')
              
    //   });
      
    })
  }
}

export default App;
