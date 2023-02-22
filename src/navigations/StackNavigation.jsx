import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../components/Settings';
import Other from '../components/Other';
import Login from '../components/Login';
import TabNavigation from './TabNavigation';
// import DrawerNavigation from './DrawerNavigation';


const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTHER_ROUTE" component={Other} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Home" component={TabNavigation}/>
    </Stack.Navigator>
  );
}