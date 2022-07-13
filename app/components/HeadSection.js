import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


function HeadSection(){
  
  return (
    <View style={styles.container}>
      <View style={{width: '95%', paddingTop: 10, alignSelf: 'center'}}>
          <Image source={require('../assets/images/menu2.png')} />
        </View>
      <View style={{width: '95%', alignSelf: 'center'}} >
        <View>
          <Text style={styles.hello}>Hello, MrSalsa</Text>
        </View>

        <View style={styles.card}>
          <View style={{padding: 10, backgroundColor: 'gray', borderRadius: 50}} >
            <Image style={{height: 30, width: 30}} source={require('../assets/images/mypic.png')} />
            <View style={{position: 'absolute', bottom: 0, right: -3, padding: 6, backgroundColor: 'yellowgreen', borderRadius: 50, borderWidth: 2, borderColor: 'white'}} ></View>
          </View>
          <View style={styles.cardInfo}>
            <Text style={{color: '#ff7d1f', paddingVertical: 3}}>Your Balance</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', fontFamily: 'monospace'}} >$23,052.82</Text>
          </View>
          <Image style={{width: 15, height: 15}} source={require('../assets/images/arrowR.png')} />
        </View>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1.5,
  },
  hello:{
    paddingVertical: 15,
    fontSize: 30,
    fontFamily: 'monospace'
  },
  card:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingVertical: 20,
    backgroundColor: '#313138',
    borderRadius: 10,
  },
  cardInfo:{
    flex: 0.9,
  }
});

export default HeadSection;
