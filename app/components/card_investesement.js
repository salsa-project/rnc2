import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


function Card(props){

  const [n, setN] = useState(50)

  const {logoFileName, companyName, funds} = props

  let fullLogoFileName = ''

  switch (logoFileName) {
        case 'apple':
            fullLogoFileName =  require('../assets/images/apple.png')
            break;
        case 'blizard':
            fullLogoFileName =  require('../assets/images/blizard.png')
            break;
        case 'valve':
            fullLogoFileName =  require('../assets/images/valve.png')
            break;
        case 'amd':
            fullLogoFileName =  require('../assets/images/amd.png')
            break;
        }



  return (
    <View style={styles.container}>
      
      <View style={styles.headerWrapper}>
        <View>
          <Image style={styles.logoImg} source={fullLogoFileName} />
        </View>
        <View>
          <Image style={styles.menuImg} source={require('../assets/images/menu.png')} />
        </View>  
      </View>

      <View style={styles.infoWrapper}>
        <Text style={styles.cardTitle}>{companyName}</Text>
        <Text style={styles.cardFund}>${funds}</Text>
      </View>

      <View style={styles.footerWrapper}>
        <View style={styles.progressBar} >
          <View style={[styles.progress, {width: n}]} ></View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    height: 120,
    width: '48.5%',
    padding: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#313138',
    borderRadius: 10,
  },
  headerWrapper:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImg:{
    height: 23,
    width: 23,
  },
  menuImg:{
    height: 15,
    width: 10,
  },
  infoWrapper:{
    flex: 0.7,
    alignItems: 'baseline',
  },
  cardTitle:{
    fontSize: 13,
  },
  cardFund:{
    color: 'gray',
    fontSize: 11,
  },
  footerWrapper:{
    flex: 0.5,
    justifyContent: 'center',
  },
  progressBar:{
    width: '100%',
    backgroundColor: '#444',
    borderRadius: 10,
  },
  progress:{
    padding: 3,
    backgroundColor: '#ff7d1f',
    borderRadius: 10,
  }
});

export default Card;
