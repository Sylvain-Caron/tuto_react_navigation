import Home from '../components/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../components/Profile';
import StackNotificationsNavigation from './StackNotificationsNavigation';
import Icon from 'react-native-vector-icons/FontAwesome'


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator  screenOptions={({route}) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: ({focused}) => {
        let iconName

        if(route.name == "HOME_TAB") {
          iconName = focused ? "plug" : "plug"
        } else if(route.name == "NOTIFICATION_NAVIGATOR") {
          iconName = focused ? "envelope" : "envelope-open-o"
        } else if(route.name == "Profile") {
          iconName = focused ? "user" : "user-o"
        }
        return <Icon name={iconName} size={22} color={'blue'}/>
      }
      
    })}>
        <Tab.Screen name="HOME_TAB" component={Home}/>
        <Tab.Screen name='NOTIFICATION_NAVIGATOR' component={StackNotificationsNavigation} options={{tabBarLabel: 'Notifications'}}/>
        <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  );
}