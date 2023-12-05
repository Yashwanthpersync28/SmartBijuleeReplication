import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { flex,borderWidth, styles,heightValue,widthValue } from '../../../../styles/Styles'

function Splash({navigation}) {
  return (
    <View style={[flex(4),styles.bglightblack,styles.allCenter]}>
        <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack,borderWidth(0),styles.allCenter,flex(1)]}>
        {/* <Image resizeMode="cover"   source={require('../Images/splashh.png')} style={styless.imgg} ></Image> */}
        <Image source={require('../../../../Images/splashfront.png') } style={styless.imgg}/>
        </View>
    </View>
  )
}
let styless=StyleSheet.create({
  imgg:{
    height:'50%',
    width:'70%',
    resizeMode:"contain"
  }
})
export default Splash
