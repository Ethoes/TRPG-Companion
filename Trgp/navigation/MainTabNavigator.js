//import screens needed to navigate
import HomeScreen from '../screens/HomeScreen';
import Calculation from '../screens/Calculation';

import {createStackNavigator, createAppContainer} from 'react-navigation';

//Create the navigator between the to screens
const MainNavigator = createStackNavigator(
  {
  Home: {screen: HomeScreen},
  Calculation: {screen: Calculation},
  },
  //hide the tab on top so its a clean screen
  {headerMode: 'none',}
);

const App = createAppContainer(MainNavigator);

export default App;