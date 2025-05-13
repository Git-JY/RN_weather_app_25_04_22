import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  return (
    <View style={{borderWidth: 2}}>
      <View style={{height:120, backgroundColor: 'red'}}></View>
      <View style={{height:100, backgroundColor: 'darkorange'}}></View>
      <View style={{height:10, backgroundColor: 'green'}}></View>
      <StatusBar style='auto'/>
    </View>

    
  );
}

const styles = StyleSheet.create({

});
