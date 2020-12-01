import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './homescreen.style'
import { Navigation } from 'react-native-navigation';

class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            userList:[]
        }
    }
    componentDidMount(){
        this.navigationEventListener = Navigation.events().bindComponent(this);

    }
    componentWillUnmount(){
        if (this.navigationEventListener) {
            this.navigationEventListener.remove();  
          }
    }
    render() {
      //  const { safeAreaStyle, containerStyle } = styles;
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <Text>{`You have ${this.props.userData.length} friends`}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default HomeScreen;