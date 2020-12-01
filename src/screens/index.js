import React from 'react';
import registerScreens from 'react-native-navigation-register-screens';
import HomeScreen from './home';
import Profile from './Profile/Profile'
export const Screens = new Map();
Screens.set('Profile', Profile);
Screens.set('HomeScreen', HomeScreen);

 

export const reduxProvider = (Component,store,Provider) => (props) => (
  <Provider store={store}>
     <Component {...props}/>
  </Provider>
);