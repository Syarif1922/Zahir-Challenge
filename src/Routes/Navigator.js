import {createStackNavigator} from 'react-navigation';
import Home from '../screen/Home'
import Available from '../screen/Available';
import Room from '../screen/Room'
export default createStackNavigator(
    {
        Home,
        Available,
        Room

    },
    {
        navigationOptions: {
            header: null
    }
    }
    )