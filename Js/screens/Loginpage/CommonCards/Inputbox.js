import React from 'react'
import { View ,Text, TextInput} from 'react-native'
import { bgColor, borderColor, borderWidth, flex, fontSize, marginPosition, padding, paddingPosition, radius, styles } from '../../../../styles/Styles'
const Inputbox = ({val,name,onFocus,focuss,onBlur}) => {
  return (
    <View style={[flex(1),padding(10),styles.column,marginPosition(0,0,3),radius(20),bgColor(focuss)]}> 
      <Text style={[fontSize(13),styles.gr]}>{name}</Text>
      <TextInput style={[borderWidth(0,0,0,1),borderColor('green'),marginPosition(0,0,15),fontSize(15)]} onBlur={onBlur} onFocus={onFocus}/>

    </View>
  )
}

export default Inputbox
