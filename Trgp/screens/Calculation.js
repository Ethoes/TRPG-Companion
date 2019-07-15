import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import characters from '../screens/Database/CharacterDatabase'

const SBEVE = characters[0]; 

//This is the object which renders everything in the main screen
export default class Calculation extends React.Component {
    //this disables the header for the stacknavigation
    static navigationOptions = {
      header: null,
    };

    render() {
        return (
          <View style={styles.container}>
              <Text>{SBEVE.HP}</Text>
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
        top: Dimensions.get('window').height * 0.2,
      },
    });