import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
    const friends = [
        {name: 'Friend 1', age: '20'},
        {name: 'Friend 2', age: '19'},
        {name: 'Friend 3', age: '36'},
        {name: 'Friend 4', age: '83'},
        {name: 'Friend 5', age: '72'},
        {name: 'Friend 6', age: '21'},
        {name: 'Friend 7', age: '54'},
        {name: 'Friend 8', age: '34'},
    ];
    return (
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 25
    }
});

export default ListScreen;