import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


export default function Login(props) {

  const navigation = useNavigation()
  return (
    <View>
        <Text>Écran : Login</Text>
        <TouchableOpacity onPress={() => navigation.navigate('OTHER_ROUTE')}>
            <Text style={styles.text}>GO TO Other</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.text}>GO TO Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.text}>GO TO Home</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
      textAlign: 'center'
  }
})