import React,{useState} from 'react'
import { View ,Text, TextInput, TouchableOpacity} from 'react-native'
import { bgColor,borderColor, borderWidth, flex, fontSize, marginPosition, padding, paddingPosition, position, radius, styles  } from '../../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
const Passwordinputbox = ({val,name,onFocus,focuss,onBlur}) => {
  let [eyeshow,seteyeshow]=useState(true);
  let handlepassword=(pass)=>{
    
    const hasLetter = /[a-zA-Z]/.test(pass);
    const hasNumber = /\d/.test(pass);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    const uppercaseRegex = /[A-Z]/.test(pass);
     if(pass.length>8){
      setpasslength(true)
     }
     else{
      setpasslength(false)
     }
      if(hasLetter && uppercaseRegex){
        setpasswordcase(true)
      }
      else{
        setpasswordcase(false)
      }
      if(hasNumber && hasSpecialChar){ 
        setpasswordsymbol(true) 
        
      }
      else{
        setpasswordsymbol(false)
      }
    
  }
  return (
    <View style={[flex(1),padding(15),styles.column,marginPosition(0,0,0),radius(20),bgColor(focuss)]}> 
    <View style={[styles.row]}>
      <Text style={[fontSize(13),styles.gr]}>{name}</Text>
      
      </View>
      <TextInput secureTextEntry={eyeshow} style={[borderWidth(0,0,0,1),borderColor('green'),marginPosition(0,0,10)]} onBlur={onBlur} onFocus={onFocus}/>
      
      <TouchableOpacity>
        <FontAwesome5Icon name={eyeshow ?'eye-slash':'eye'} style={[styles.gray,fontSize(20),position(-40,0,0,200)]} onPress={()=>seteyeshow(!eyeshow)}/>
   </TouchableOpacity>
     <Text></Text>
   </View>
  )
}

export default Passwordinputbox
