import Home from '../components/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../components/Profile';
import NotificationsNavigation from './NotificationsNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="HOME_TAB" component={Home}/>
        <Tab.Screen name='NOTIFICATION_NAVIGATOR' component={NotificationsNavigation} options={{tabBarLabel: 'Notifications'}}/>
        <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  );
}