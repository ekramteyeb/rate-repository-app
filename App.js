import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text style={styles.button} onMouseOver={() => alert('this is clicked')}>Buttoon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button: {
    fontSize:24,
    padding:10,
    width:'50%',
    borderRadius:50,
    backgroundColor: 'cyan',
    alignItems: 'center',
    textAlign:'center'
  },
});
