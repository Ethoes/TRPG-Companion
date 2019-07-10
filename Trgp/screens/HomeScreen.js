import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

//This is the object which renders everything in the main screen
export default class HomeScreen extends React.Component {
    //this disables the header for the stacknavigation
    static navigationOptions = {
      header: null,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
          <View style={styles.container}>
              <Text>This is the homeScreen!</Text>

              <Button title="go to calculation"
              onPress={() => navigate('Calculation', {name: 'Jane'})}/>

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