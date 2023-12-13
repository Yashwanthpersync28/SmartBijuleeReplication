import React from 'react'
import { View ,Text, TextInput} from 'react-native'
import { bgColor, borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, paddingPosition, radius, styles, widthValue } from '../../../../styles/Styles'


const Inputbox = ({name,onFocus,focuss,onBlur, onChangeText, id,showstar}) => {
  return (
    <View style={[{height:heightValue(12),width:widthValue(1.6)},padding(0,10,20,10,20),styles.column,marginPosition(0,0,3),radius(20),bgColor(focuss)]}> 
      <View style={[styles.row]}>
      <Text style={[fontSize(13),styles.gr]}>{name}</Text>
      {showstar ? <Text style={[styles.red,marginPosition(0,0,0,5)]}>*</Text>:null}
      </View>
      
      <TextInput style={[styles.white,borderWidth(0,0,0,1),borderColor('green'),marginPosition(0,0,15),fontSize(18),padding(0),{textAlignVertical:"center"}]} onBlur={onBlur} onFocus={onFocus} onChangeText={onChangeText} value={id}/>
        
    </View>
  )
}

export default Inputbox
