import { createStackNavigator } from '@react-navigation/stack';
import Notifications from '../components/Notifications';
import NotificationsDetails from '../components/NotificationsDetails';


const Stack = createStackNavigator();

export default function StackNotificationsNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Notifications'>
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="NotificationsDetails" component={NotificationsDetails} />
    </Stack.Navigator>
  );
}