import React,{useState} from 'react'
import { View ,Text, TextInput, TouchableOpacity} from 'react-native'
import { bgColor,borderColor, borderWidth, flex, fontSize, marginPosition, padding, paddingPosition, position, radius, styles  } from '../../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
const Passwordinputbox = ({val,name,onFocus,focuss,onBlur}) => {
  let [eyeshow,seteyeshow]=useState(true);
    
  return (
    <View style={[flex(1),padding(15),styles.column,marginPosition(0,0,0),radius(20),bgColor(focuss)]}> 
      <Text style={[fontSize(13),styles.gr]}>{name}</Text>
      <TextInput secureTextEntry={eyeshow} style={[borderWidth(0,0,0,1),borderColor('green'),marginPosition(0,0,10)]} onBlur={onBlur} onFocus={onFocus}/>
      <TouchableOpacity>
        <FontAwesome5Icon name={eyeshow ?'eye-slash':'eye'} style={[styles.gray,fontSize(20),position(-40,0,0,200)]} onPress={()=>seteyeshow(!eyeshow)}/>
   </TouchableOpacity>
   </View>
  )
}

export default Passwordinputbox
