import React from 'react'
import { View,Text } from 'react-native'
import { styles,heightValue,widthValue } from '../../../styles/Styles'
const Ex = () => {
  return (
   <View style={[styles.bgDarkBlue,{height:heightValue(3),width:widthValue(1.2)}]}>
    <Text>please</Text>
   </View>
  )
}

export default Ex
