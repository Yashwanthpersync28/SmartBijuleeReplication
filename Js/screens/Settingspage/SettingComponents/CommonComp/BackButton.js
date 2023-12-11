import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { marginPosition,fontSize,styles,flex, heightValue } from '../../../../../styles/Styles';
import { View,Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation=useNavigation()
  let handlesetting=()=>{
    navigation.navigate('Setting')
    // let name="hi"
  }
  return (
    <TouchableOpacity onPress={handlesetting}>
    <View style={[styles.row,marginPosition(10,0,5),{height:heightValue(18)},,styles.centerHorizontal]}>
    <FontAwesome5Icon name='chevron-left' style={[fontSize(20),styles.white]}/>
     <Text style={[styles.white,fontSize(17),marginPosition(0,0,0,10)]}>Back</Text>
  </View>
  </TouchableOpacity>
  )
}

export default BackButton
