import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';


function BodySection(){
  
  return (
    <View style={styles.container}>
      <View style={styles.AchivementsHeader}>
        <Text style={styles.sectionTitle}>Achivements</Text>
        <Text style={styles.seeAll} >See all</Text>
      </View>

      <View  style={{flex: 1, width: '95%',}}>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.cardsContainer}>
              <View style={[styles.card, {backgroundColor: '#2bad5b'}]}>
                <Image source={require('../assets/images/valve.png')} />
                <Text>1 Week Steak</Text>
              </View>
              <View style={[styles.card, {backgroundColor: '#2ba9ad'}]}>
                <Image source={require('../assets/images/valve.png')} />
                <Text>1 Week Steak</Text>
              </View>
              <View style={[styles.card, {backgroundColor: '#ad2b6c'}]}>
                <Image source={require('../assets/images/valve.png')} />
                <Text>1 Week Steak</Text>
              </View>
              <View style={[styles.card, {backgroundColor: '#adab2b'}]}>
                <Image source={require('../assets/images/valve.png')} />
                <Text>1 Week Steak</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  AchivementsHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    paddingVertical: 5,
    margin: 10
  },
  sectionTitle:{
    fontSize: 16,
    fontFamily: 'monospace'
  },
  seeAll:{
    color: '#ff7d1f',
    fontFamily: 'monospace'
  },
  cardsContainer:{
    flex: 1,
    flexDirection: 'row',
  },
  card:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default BodySection;
