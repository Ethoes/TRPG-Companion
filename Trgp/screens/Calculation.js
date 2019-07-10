import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

//This is the object which renders everything in the main screen
export default class Calculation extends React.Component {
    //this disables the header for the stacknavigation
    static navigationOptions = {
      header: null,
    };

    render() {
        return (
          <View style={styles.container}>
              <Text>This is the calculation screen!</Text>
          </View>
        );
      }
    }
    
    
    //css-like files start here
    const styles = StyleSheet.create({
      //Main image css
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });