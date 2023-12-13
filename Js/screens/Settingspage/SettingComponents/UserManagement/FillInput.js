import React, { useState } from 'react'
import { View,Text,TextInput } from 'react-native';
import { heightValue,widthValue,padding,styles,marginPosition,radius,borderColor,borderWidth,fontSize, } from '../../../../../styles/Styles';
const FillInput = ({name,getfromchild}) => {
  const [error,seterror]=useState('');
  // const [num,setnum]=useState(true)
  //  const handleuserinput=(data,val)=>{
  //      if(data<10 || isNaN(val)){
  //       seterror('Please enter the correct Mobile Number')
  //      }
  //      else{
  //       seterror('');

  //      }
  //  }
  return (
    <View style={[{height:heightValue(10),width:widthValue(1.2),paddingVertical: 5,},padding(0,10,20,10,20),styles.column,marginPosition(0,0,0),radius(20)]}> 
      <Text style={[fontSize(13),styles.gr]}>{name}</Text>
      <TextInput maxLength={10} onChangeText={(val)=>getfromchild(val.length,val)} style={[styles.white,borderWidth(0,0,0,1),borderColor('green'),marginPosition(0,0,15),fontSize(15),padding(0),{textAlignVertical:"center"}]}  />  
       <View style={[styles.centerHorizontal]}>
       <Text style={[styles.red,fontSize(12)]}>{error}</Text>
       </View>
    </View>
  )
}

export default FillInput
