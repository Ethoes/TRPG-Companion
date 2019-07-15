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

    renderItems() {
      const items = [];
      characters.forEach( ( dataItem ) => {
        items.push( <Text>name : { dataItem.name } {"\n"}hitpoints: {dataItem.HP} {"\n"}strength: {dataItem.strength} {"\n"}endurance: {dataItem.endurance} {"\n"}</Text> );
      } )
      return items;
    }

    render() {
        return (
          <View style={styles.container}>
              {this.renderItems()}
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
        top: Dimensions.get('window').height * 0.1,
        left: Dimensions.get('window').width *0.2,
      },
    });