import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { marginPosition,fontSize,styles,flex, heightValue } from '../../../../../styles/Styles';
import { View,Text } from 'react-native';
const BackButton = () => {
  return (
    <View style={[styles.row,marginPosition(10,0,5),{height:heightValue(18)},,styles.centerHorizontal]}>
    <FontAwesome5Icon name='chevron-left' style={[fontSize(20),styles.white]}/>
     <Text style={[styles.white,fontSize(17),marginPosition(0,0,0,10)]}>Back</Text>
  </View>
  )
}

export default BackButton
