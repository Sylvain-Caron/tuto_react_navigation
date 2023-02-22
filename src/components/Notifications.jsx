import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function Notifications(props) {

  const {navigation} = props

  return (
    <View>
        <Text>Notifications</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationsDetails')}>
            <Text >GO TO Notifications details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text >LOGOUT</Text>
        </TouchableOpacity>
    </View>
  );
}