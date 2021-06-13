import * as React from 'react';
import{Text, View, StyleSheet} from 'react-native';

export default class StarMap extends React.Component{
    render(){
        return(
            <View style = {{flex: 1, justifyContent: "center", alignItems:"center", backgroundColor:"black"}}>
                <Text style = {{color: "white"}}>Star Map Screen</Text>
            </View>
        )
    }
}