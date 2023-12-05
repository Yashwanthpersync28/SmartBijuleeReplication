import React from 'react'
import {View,Text, ScrollView} from 'react-native'
import { flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../../styles/Styles'
import Inputbox from './Inputbox'
import { useState } from 'react'
import Passwordinputbox from './Passwordinputbox'
import Textinput from '../../TextInput/Textinput'
const Logincards = ({name,secondname,showpassword,showconsumer,showmobile,showotp}) => {
    let [focusid,setfocusid]=useState(false);
    let [passid,setpassid]=useState(false);
    let [otpid,setotpid]=useState(false);
    let [focus,setfocus]=useState(false);
  return (
    <View style={[flex(1),styles.allCenter]}>
        <View style={[styles.bggreenish,{height:heightValue(50),width:widthValue(2.2)},radius(30,30,0,0)]}></View>
        <View style={[styles.bggreen,{height:heightValue(50),width:widthValue(1.7)},radius(30,30,0,0)]}></View>
        <View style={[styles.bggreyish,{height:heightValue(3.2),width:widthValue(1.3)},radius(30),padding(25)]}>
         <View style={[styles.row,marginPosition(0,0,10)]}>
            <Text style={[styles.white,fontSize(25)]}>{name}</Text>
            <Text style={[styles.green,fontSize(25),marginPosition(0,0,0,10)]}>{secondname}</Text>
         </View>
         {showconsumer?
         <View style={[styles.allCenter,flex(1)]}>
         <Textinput name={'CONSUMER ID'} val={false} onFocus={()=>setfocus(!focus)} onBlur={()=>setfocus(!focus)} focuss={focus}/>
         </View>:null}
        {showmobile ? 
         <Inputbox name={'CONSUMER ID/MOBILE NUMBER'} val={false} onFocus={()=>setfocusid(!focusid)} onBlur={()=>setfocusid(!focusid)} focuss={focusid}/>:null}
         {showpassword ? 
         <Passwordinputbox name={'PASSWORD'} val={false} onFocus={()=>setpassid(!passid)} onBlur={()=>setpassid(!passid)} focuss={passid}/>:null}
         {showotp ?
         <Inputbox name={'OTP'} val={false} onFocus={()=>setotpid(!otpid)} onBlur={()=>setfocusid(!otpid)} focuss={otpid}/>:null}


        
        </View>

    </View>
  )
}

export default Logincards
