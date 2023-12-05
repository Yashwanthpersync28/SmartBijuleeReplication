import React from 'react'
import {View,Text} from 'react-native'
import { borderColor, borderWidth, heightValue, marginPosition, styles } from '../../../../../styles/Styles'
const Cradstwo = () => {
  return (
    <View style={[borderWidth(0,0,0,0.3),marginPosition(0,0,0),{height:heightValue(15),borderColor:"gray"}]}>
        <Text>Sanctioned</Text>
        <Text style={[marginPosition(10),styles.green]}>1</Text>
    </View>
  )
}

export default Cradstwo
