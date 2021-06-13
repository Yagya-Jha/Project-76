import * as React from 'react';
import{Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default class Home extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {{color: "white"}}>Home Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent:"center",
    }
});
  