import React from 'react'
import { View ,Text, TextInput} from 'react-native'
import { bgColor, borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, paddingPosition, radius, styles, widthValue } from '../../../../styles/Styles'


const Inputbox = ({editable,maxLength,name,onFocus,focuss,onBlur, onChangeText, id,showstar , keyboardType, number}) => {
 
  return (
    <View style={[{height:heightValue(11),width:widthValue(1.6)},padding(0,10,20,10,20),styles.column,marginPosition(0,0,3),radius(20),bgColor(focuss)]}> 
      <View style={[styles.row]}>
      <Text style={[fontSize(10),styles.gr]}>{name}</Text>
      {showstar ? <Text style={[styles.red,marginPosition(0,0,0,5)]}>*</Text>:null}
      </View>
      <View style={[borderColor('green'),borderWidth(0,0,0,1)]}>
      
      <TextInput editable={editable} maxLength={maxLength} keyboardType={keyboardType} style={[styles.white,(0,0,0,1),marginPosition(0,0,0),fontSize(22),padding(0),{textAlignVertical:"center"}]} onBlur={onBlur} onFocus={onFocus} onChangeText={onChangeText} value={number}/>
       </View> 
    </View>
  )
}

export default Inputbox
