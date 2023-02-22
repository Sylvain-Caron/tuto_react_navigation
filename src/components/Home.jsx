import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useState } from 'react';


export default function Home(props) {
    // https://github.com/satya164/react-native-tab-view
    const [index, setIndex] = useState(0);

    const tabs = [
        { key: 'tab1', title: 'Onglet 1', content: () => <View><Text style={styles.text}>Contenu de l'onglet 1</Text></View> },
        { key: 'tab2', title: 'Onglet 2', content: () => <View><Text style={styles.text}>Contenu de l'onglet 2</Text></View> },
        { key: 'tab3', title: 'Onglet 3', content: () => <View><Text style={styles.text}>Contenu de l'onglet 3</Text></View> },
    ];

    const renderScene = SceneMap(
        tabs.reduce((acc, { key, content }) => ({ ...acc, [key]: content }), {})
    );

    const handleIndexChange = (index) => {
        setIndex(index);
    };

    return (
        <TabView
            navigationState={{ index, routes: tabs }}
            renderScene={renderScene}
            onIndexChange={handleIndexChange}
            renderTabBar={() => null}
        />
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
});