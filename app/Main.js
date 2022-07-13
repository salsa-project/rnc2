import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import HeadSection from './components/HeadSection.js'
import BodySection from './components/BodySection.js'
import InvestmentSection from './components/InvestmentSection.js'


function Main(){
  
  return (
    <View style={styles.container}>
      <View style={styles.homeScreen}>
        <HeadSection />
        <BodySection />
        <InvestmentSection />
      </View>  
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1c1e24'
  },
  homeScreen:{
    flex: 1,
  }
});

export default Main;
