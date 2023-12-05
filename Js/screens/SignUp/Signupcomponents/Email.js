import React, { useState } from 'react'
import {View,Text,TextInput} from 'react-native'
import { flex, marginPosition, styles,padding,radius,fontSize,bgColor,borderWidth,borderColor,display} from '../../../../styles/Styles'

const Email = ({name,onFocus,onBlur,focuss}) => {
    let [email,setemail]=useState(true)
    let [emailsubmit,setemailsubmit]=useState(false)
    let handleemail=(a)=>{
        const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailTest.test(a)) {
      // Valid email address
          setemail(true);
    } else {
      // Invalid email address
      setemail(false)
    }}
  return (
  
       <View style={[flex(1.6),padding(10),styles.column,marginPosition(0,0,3),radius(20),bgColor(focuss)]}> 
       <View style={[styles.row]}>
      <Text style={[fontSize(13),styles.gr]}>{name}</Text>
      {emailsubmit ?null: <Text style={[styles.red,marginPosition(0,0,0,5)]}>*</Text>}
      </View>
      <TextInput keyboardType="email-address" style={[borderWidth(0,0,0,1),borderColor('green'),marginPosition(0,0,0),fontSize(15)]} onBlur={onBlur} onFocus={onFocus} onChangeText={(val)=>{handleemail(val)
      }}/>
      {
             email ?<Text style={[display('none')]}></Text> : <Text style={[fontSize(11),styles.red]}>Must be Valid Email</Text>
             }
         
    </View>
  
  )
}

export default Email
