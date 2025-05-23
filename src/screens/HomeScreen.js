import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go To Components Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go To List Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go To Image Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go To Counter Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Color')}
        title="Go To Color Demo" 
      />
    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
