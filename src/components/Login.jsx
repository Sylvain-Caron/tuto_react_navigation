import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


export default function Login(props) {

  const navigation = useNavigation()
  return (
    <View>
        <Text>Login</Text>
        <TouchableOpacity onPress={() => navigation.navigate('OTHER_ROUTE')}>
            <Text >GO TO Other</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text >GO TO Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text >GO TO Home</Text>
        </TouchableOpacity>
    </View>
  );
}