import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// create a component
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>HomeScreen is coming ♻️</Text>
        </View>
    );
    
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

