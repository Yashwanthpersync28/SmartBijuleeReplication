import React, { useState } from 'react'
import { View,Text,ScrollView  } from 'react-native'
import Inputbox from '../../Loginpage/CommonCards/Inputbox';
import { flex } from '../../../../styles/Styles';
import Email from './Email';
import Passwordinputbox from '../../Loginpage/CommonCards/Passwordinputbox';

const SignupCardcomponents = () => {
    let [focusid,setfocusid]=useState(false);
    let [focusmobile,setfocusmobile]=useState(false)
   let  [focusemail,setfocusemail]=useState(false)
   let [passid,setpassid]=useState(false)
  return (
    <View style={[flex(1)]}>
      <Text>hello</Text>
            {/* <Inputbox name={'CONSUMER ID'} val={false} onFocus={()=>setfocusid(!focusid)} onBlur={()=>setfocusid(!focusid)} focuss={focusid}/>
            <Inputbox name={'MOBILE NUMBER'} val={false} onFocus={()=>setfocusmobile(!focusmobile)} onBlur={()=>setfocusmobile(!focusmobile)} focuss={focusmobile}/>
            <Inputbox name={'Enter Name'} val={false} onFocus={()=>setfocusid(!focusid)} onBlur={()=>setfocusid(!focusid)} focuss={focusid}/>
            <Email name={'Email ID'} onFocus={()=>setfocusemail(!focusemail)} onBlur={()=>setfocusemail(!focusemail)} focuss={focusemail}/>
         <Passwordinputbox name={'PASSWORD'} val={false} onFocus={()=>setpassid(!passid)} onBlur={()=>setpassid(!passid)} focuss={passid}/>
         <Passwordinputbox name={'CONFIRM PASSWORD'} val={false} onFocus={()=>setpassid(!passid)} onBlur={()=>setpassid(!passid)} focuss={passid}/>  */}
        
    </View>
  )
}

export default SignupCardcomponents
