import React from 'react'
import {View,Text} from 'react-native'
import { borderColor, borderWidth, fontSize, heightValue, marginPosition, styles } from '../../../../../styles/Styles'
const Cradstwo = ({name,number}) => {
  return (
    <View style={[borderWidth(0,0,0,0.3),marginPosition(0,0,20),{height:heightValue(12),borderColor:"gray"}]}>
        <Text style={[styles.white,fontSize(18)]}>{name}</Text>
        <View style={[styles.centerVertical]}>
        <Text style={[marginPosition(10),styles.green,fontSize(16)]}>{number}</Text>
        </View>
    </View>
  )
}

export default Cradstwo
