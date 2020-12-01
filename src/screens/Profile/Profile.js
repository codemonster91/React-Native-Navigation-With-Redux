import React,{Component} from 'react';
import {View,SafeAreaView,StyleSheet,Text} from 'react-native';

class Profile extends Component {
    render(){
        return(
            <SafeAreaView style={{flex:1}} >
            <View style={{flex:1}} >
        <Text>{'User Profile Data here'}</Text>
            </View>
            </SafeAreaView>
        );
    }
}

export default Profile;