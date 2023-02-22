import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../components/Profile';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HOME_DRAWER" component={TabNavigation} />
      <Drawer.Screen name="Profile_Drawer" component={Profile} />
    </Drawer.Navigator>
  );
}