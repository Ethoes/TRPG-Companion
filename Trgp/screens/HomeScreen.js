import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  TouchableNativeFeedback,
  Image,
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
              <Text  style={styles.textCalc}>This is the homeScreen!</Text>

              <TouchableNativeFeedback
              onPress={() => navigate('Calculation', {name: 'Jane'})}>
                <Image 
                  source={
                    require('../assets/calcButton.png')
                  }
                  style={styles.buttonCalc}
                />
              </TouchableNativeFeedback>

              <Text  style={styles.textEdit}>This is the homeScreen!</Text>

              <TouchableNativeFeedback
              onPress={() => navigate('Calculation', {name: 'Jane'})}>
                <Image 
                  source={
                    require('../assets/calcButton.png')
                  }
                  style={styles.buttonEdit}
                />
              </TouchableNativeFeedback>

          </View>
        );
      }
    }
    
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    
    //css-like files start here
    const styles = StyleSheet.create({
      //Main image css
      container: {
        width: width,
        height: height,
      },
      textCalc: {
        textAlign: "center",
        top: height * 0.25,

      },
      buttonCalc:{
        height: height * 0.06,
        width: width * 0.6,
        top: Dimensions.get('window').height * 0.27,
        alignSelf: "center"
      },
      textEdit: {
        textAlign: "center",
        bottom: height * -0.48,

      },
      buttonEdit:{
        height: height * 0.06,
        width: width * 0.6,
        bottom: Dimensions.get('window').height * -0.5,
        alignSelf: "center"
      },
    });