import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const navigator = createStackNavigator(
    {
        Search: {
            screen: SearchScreen,
            navigationOptions: { title: 'Business Search'}
        },
        ResultsShow:{
            screen: ResultShowScreen,
            navigationOptions:{
                title: 'Restaurant Photos',
                headerBackTitle: 'back'
            }
        }

    }, {
        initialRouteName: 'Search'
    });



export default createAppContainer(navigator)
