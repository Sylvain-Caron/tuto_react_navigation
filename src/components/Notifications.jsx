import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function Notifications(props) {

  const {navigation} = props

  return (
    <View>
        <Text>Écran : Notifications</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationsDetails')}>
            <Text style={styles.text}>GO TO Notifications details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}>LOGOUT</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
      textAlign: 'center'
  }
});