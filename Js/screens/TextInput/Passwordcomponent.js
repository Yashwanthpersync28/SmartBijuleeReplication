import React from 'react'
import { useState } from 'react';
import { View,Text,TextInput } from 'react-native'
// import { styles } from '../../../styles/Styles';
import { screenHeight,borderWidth,styles ,screenWidth,radius,marginPosition,heightwidth,fontSize,fontFamily,row,borderColor, bgColor, display, setheight, setheightPASS} from '../../../styles/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Passwordcomponent = ({confpstar}) => {
    let [eyeshow,seteyeshow]=useState(true);
    let [eyeshowcp,seteyeshowcp]=useState(true);
  
    ///////////////////////////password///////////////////
    let [passwordval,setpasswordval]=useState('');
    let [password,setpassword]=useState(true); 
    let [focuspassword,setfocuspassword]=useState(false);
    let [passwordcase,setpasswordcase]=useState(true);
    let [passwordsymbol,setpasswordsymbol]=useState(true);
    let [passwordstar,setpasswordstar]=useState(true);
    let [passlength,setpasslength]=useState('');


    ////////////////////////////confirm password//////////
//  let [confirmpasswordval,setconfirmpasswordval]=useState('');
 let [confirmpassword,setconfirmpassword]=useState(true); 
 let [focusconfirmpassword,setfocusconfirmpassword]=useState(false);
 let [check,setcheck]=useState(false)
 let [cval,setcval]=useState('')
//  let [confpstar,setconfptar]=useState(true);
 let [conpasslength,setconpasslength]=useState('');

 let handlepassword=(pass)=>{
    
    const hasLetter = /[a-zA-Z]/.test(pass);
    const hasNumber = /\d/.test(pass);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    const uppercaseRegex = /[A-Z]/.test(pass);
    if (pass.length<7) {
        setpassword(false);
        setpasswordstar(false);
      } else {
        setpassword(true); 
      }
      if(hasLetter){
        setpasswordcase(true)
      }
      else{
        setpasswordcase(false)
        setpasswordstar(false);

      }
      if(hasNumber && hasSpecialChar){ 
        setpasswordsymbol(true) 
        
      }
      else{
        setpasswordsymbol(false)
        setpasswordstar(false);
       

      }
      if(uppercaseRegex){
        setpasswordcase(true)
        setpasswordstar(true);

      }
      else{
        setpasswordcase(false)
        setpasswordstar(false);
        

      }
  }
  ////////////////
  let handleconfpassword=(cc,pass)=>{
    setcval(cc)
    if(pass===cc){
      if(passwordstar){
        setconfirmpassword(true);
        if(cc.length>1){
        setcheck(true);
        }
      }
      else{
        setconfirmpassword(false)
      }
    }
    else{
        if(cc.length>4){
          setconfirmpassword(false);
          setcheck(false);
        }
    }
    
    
  }
  return (
    <View style={[styles.column]}>
          <View style={[setheight(passwordsymbol),setheightPASS(passwordcase),screenWidth(1.5),styles.column,marginPosition(0,0,"0%"),styles.selfCenter,bgColor(focuspassword),radius(15)]}>
            <View style={{...styles.row}}>
            <Text style={[fontSize(13),styles.gr,marginPosition('5%',0,0,'7%')]}>PASSWORD</Text>
            {passwordstar ? <Text></Text> :
            <Text style={{...fontSize(19),...styles.red,...marginPosition('4%',0,'0%',10)}}>*</Text>}
            </View>
            <TextInput secureTextEntry={eyeshow} keyboardType="default" style={[marginPosition(0,0,0,'8%'),screenHeight(22),screenWidth(1.7),borderWidth(0,0,0,1),borderColor("#39763b"),fontSize(15),styles.white]} onFocus={()=>setfocuspassword(!focuspassword)} onBlur={()=>setfocuspassword(!focuspassword)}
             onChangeText={(val)=>{handlepassword(val)
             setpasswordval(val)
             setpasslength(val)
             handleconfpassword(cval,val)
            }}></TextInput>
                   <FontAwesome5 name={eyeshow ?'eye-slash':'eye'} style={[marginPosition('-12%',0,'5%','84%'),styles.gr,fontSize(20)]} onPress={()=>seteyeshow(!eyeshow)} />
            {
             password ?<Text style={[display('none')]}></Text> : <Text style={[marginPosition('0%',0,0,'8%'),fontSize(11),styles.red]}>enter 8 or more characters</Text>
             }
             {
             passwordsymbol ?<Text style={[display('none')]}></Text> : <Text style={[marginPosition('0%',0,0,'8%'),fontSize(11),styles.red]}>A Number and a symbol</Text>
             }
              {
             passwordcase ?<Text style={[display('none')]}></Text> : <Text style={[marginPosition('0%',0,0,'8%'),fontSize(11),styles.red]}>An Upper and LowerCase Letter</Text>
             }
        </View>
        <View style={[setheight(confirmpassword),screenWidth(1.5),styles.column,marginPosition(0,0,"0%"),styles.selfCenter,bgColor(focusconfirmpassword),radius(15)]}>
            <View style={{...styles.row}}>
            <Text style={[fontSize(13),styles.gr,marginPosition('5%',0,0,'7%')]}>CONFIRM PASSWORD</Text>
            {confirmpassword ? <Text></Text> :
            <Text style={{...fontSize(19),...styles.red,...marginPosition('4%',0,'0%',10)}}>*</Text>}
            </View>
            <TextInput secureTextEntry={eyeshowcp} keyboardType="default" style={[marginPosition(0,0,0,'8%'),screenHeight(22),screenWidth(1.7),borderWidth(0,0,0,1),borderColor("#39763b"),fontSize(14),styles.white]} onFocus={()=>setfocusconfirmpassword(!focusconfirmpassword)} onBlur={()=>setfocusconfirmpassword(!focusconfirmpassword)} onChangeText={(val)=>{
             handleconfpassword(val,passwordval,)
             setconpasslength(val)
              
            }}></TextInput> 
                   <FontAwesome5 name={eyeshowcp ?'eye-slash':'eye'} style={[marginPosition('-12%',0,'5%','84%'),styles.gr,fontSize(20)]} onPress={()=>seteyeshowcp(!eyeshowcp)} />
                   
            {
             confirmpassword ?<Text style={[display('none')]}></Text>
             : <Text style={[marginPosition('2%',0,0,'8%'),fontSize(11),styles.red]}>Password does not match</Text>
             }
             { check ?
                <FontAwesome5 name={'check'} style={[marginPosition('0%',0,'5%','86%'),styles.green,fontSize(17)]}/>:<Text style={[display('none')]} ></Text>
             }
        </View>
        
    </View>
  )
}

export default Passwordcomponent
