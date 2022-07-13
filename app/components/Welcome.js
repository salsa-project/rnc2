import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


function Welcome(){
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTxt}>Welcome To Your Project</Text>
      <Text style={styles.editTxt}>Start Your Project By Editing This File At : </Text>
      <Text style={styles.text}>/app/Main.js</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeTxt:{
    color: 'yellowgreen',
    fontSize: 20,
    textAlign: 'center'
  },
  editTxt:{
    padding: 16,
    fontSize: 16,
    textAlign: 'center'
  },
  text:{
    color: 'red',
    fontSize: 18,
  }
});

export default Welcome;
