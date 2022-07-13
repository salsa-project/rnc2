import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import Card from './card_investesement.js'

function InvestmentSection(){

  const [investementCards, setInvestementCards] = useState([
                                                            {logoFileName: 'apple', companyName: 'Apple', funds: '18.031'},
                                                            {logoFileName: 'blizard', companyName: 'Activision Blizard', funds: '35.110'},
                                                            {logoFileName: 'valve', companyName: 'Valve', funds: '00.00'},
                                                            {logoFileName: 'amd', companyName: 'AMD', funds: '56.39'},
                                                            ])
  
  return (
      <View style={styles.container}>
        <View style={styles.InvestmentSectionHeader}>
          <Text style={styles.sectionTitle}>Investement Portfolio</Text>
          <Text style={styles.seeAll} >See all</Text>
        </View>
        <View style={styles.cardsList}>
          {investementCards.map(cardInfo=>{
            return <Card logoFileName={cardInfo.logoFileName} companyName={cardInfo.companyName} funds={cardInfo.funds}/>
          })}
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex:2,
    alignItems: 'center',
  },
  InvestmentSectionHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    paddingVertical: 5,
  },
  sectionTitle:{
    fontSize: 16,
    fontFamily: 'monospace'
  },
  seeAll:{
    color: '#ff7d1f',
    fontFamily: 'monospace'
  },
  cardsList:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '95%',
    paddingVertical: 10,
  },
  
});

export default InvestmentSection;
