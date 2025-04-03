import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'GREETING';
    const element = <Text>STUFF IN BOX</Text>

    return (
        <View>
            <Text style={styles.textStyle}>Components screen</Text>
            <Text>{greeting}</Text>
            {element}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;