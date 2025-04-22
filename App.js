import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>리액트 네이티브</Text>
      <Text style={{...styles.text, color: "pink"}}>리액트 네이티브</Text>
      <StatusBar 
          backgroundColor="#61dafb"
          barStyle="dark-content"
          // hidden={true} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#dee354',

    // borderWidth: 20,
    // borderColor: 'hotpink',

  },
  text: {
    backgroundColor: 'hotpink',
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 10
  }
});
