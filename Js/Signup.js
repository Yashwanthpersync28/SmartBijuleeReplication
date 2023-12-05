import React from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightcard,screenHeight,borderWidth,styles ,screenWidth,radius,marginPosition,heightwidth,fontSize,fontFamily,row,borderColor, bgColor, display, setheight} from '../styles/Styles'
import { useState } from 'react';
// import Textinput from './screens/TextInput/Textinput';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Passwordcomponent from './screens/TextInput/Passwordcomponent';
import ConsumerTextinputComp from './screens/TextInput/ConsumerTextinputComp';


function Signup({navigation}) {
  let [sign,setsign]=useState(true); 

///consumer// 
     let [con,setcon]=useState(true); 
    // let [focusss,setfocusss]=useState(false);
    let [convv,setconvv]=useState('')
     let [conlength,setconlength]=useState(0);
////
///Mobile number///
let [numval,setnumval]=useState(0);
    let [num,setnum]=useState(true); 
    let [focusnum,setfocusnum]=useState(false);
    let [minnum,setminnum]=useState(true)
    let [numstar,setnumstar]=useState(true);
    let [numlength,setnumlength]=useState(0);


/////////////////full name////
    let [nameval,setnameval]=useState('');
    let [name,setname]=useState(true); 
    let [focusname,setfocusname]=useState(false);
    let [minname,setminname]=useState(true)
    let [namestar,setnamestar]=useState(true);
    let [namelength,setnamelength]=useState(0);



////////////////////email/////////////////
    let [emailval,setemailval]=useState(0);
    let [email,setemail]=useState(true); 
    let [focusemail,setfocusemail]=useState(false);
    let [emailstar,setemailstar]=useState(true);
    let [emaillength,setemaillength]=useState(0);



///////////////////////////password///////////////////
     let [passwordstar,setpasswordstar]=useState(true);
    // let [passlength,setpasslength]=useState('');



 ////////////////////////////confirm password//////////
    let [confpstar,setconfptar]=useState(true);
//     let [conpasslength,setconpasslength]=useState('');


    
    let handlelogin=()=>{
        navigation.navigate('login')
      }

      // let getconsumerdata=(a)=>{
        
      //   setconlength(a)
        
      //     // setconsumerlength(b);
      //   }
          //  setcon(a);
          //  console.log(a)
          //  setconsumerlength(b);
          //  console.log(consumerlength);
      
      
      let handlenumber=(val)=>{
        if (isNaN(val)) {
            //if input is not a number then here
            setnum(false)
            setnumstar(false)
          } else {
            //if input is number then here
            setnum(true);
            setnumstar(true)

          }
          if(val.length<=9){
            setminnum(false)
            setnumstar(false)

          }
          else{
            setminnum(true)
            setnumstar(true)

          }
        
      }
      let handlename=(val)=>{

        if (/\d/.test(val)) {
            //if input is not a number then here
            setname(false)
          } else {
            //if input is number then here
            setname(true); 
          }
          if(val.length<4){
            setminname(false)
          }
          else{
            setminname(true)
          }
        
      }
      let handleemail=(a)=>{
        const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailTest.test(a)) {
      // Valid email address
          setemail(true);
    } else {
      // Invalid email address
      setemail(false)
    }}
    
      //////submit button/////////
      let handlesubmit=()=>{ 
         
        // if(conlength<1){
        //   setcon(false);
        //   }
        //   else{
        //     setcon(true)
        //   }
        if(!num || !minnum || numlength<1 ){
            setnumstar(false)
            setnum(false);
            setminnum(false)
        }
        if(!name || !minname || namelength<1){
            setnamestar(false)
            setname(false);
            setminname(false)
        }
        if(!email || emaillength<1){
            setemailstar(false)
            setemail(false)
        }
        // if(!password || !passwordsymbol || !passwordcase || !passwordstar ){
        //     setpasswordstar(false)
        // }
        // if(!confirmpassword || !confpstar){
        //     setconfptar(false)
        // }
        
      }
      // cc={con} setChildData={getconsumerdata}
  return (
    <ScrollView style={{...styles.bgBlack}}>
    <View style={{...screenHeight(0.8),...screenWidth(1) ,...styles.bglightblack,...styles.centerHorizontal}}>
    <View style={{...screenHeight(6.6),...screenWidth(1.2),...styles.allCenter,...marginPosition('0%')}}>

      <TouchableOpacity onPress={handlelogin}>
      {/* <View style={{...screenHeight(12),...screenWidth(6),...radius(100,100,100,100),...styles.allCenter,...styles.bggreenish}}> */}
      {/* <Image style={[heightwidth(30,30),marginPosition(0)]} src="https://img.icons8.com/metro/26/FFFFFF/multiply.png" alt="multiply"/> */}
        <Image source={require('../Images/Xmark2.png')} style={[heightwidth(70,70),marginPosition(0)]}/>
        {/* <Image style={{...heightwidth(50,50),...marginPosition(0)}} src="https://img.icons8.com/metro/26/FFFFFF/multiply.png" alt="multiply"/> */}
        {/* </View> */}
      </TouchableOpacity>
      
      </View>  
      
      <View style={{...screenHeight(60),...screenWidth(2.2),...styles.bggreenish,...radius(0,30,0,0,30)}}></View>
      <View style={{...screenHeight(60),...screenWidth(1.6),...styles.bggreen,...radius(0,30,0,0,30)}}></View>
      <View style={{...screenHeight(1.1),...screenWidth(1.3),...styles.bggreyish,...radius(30),...styles.allCenter}}>
        <View style={{...screenHeight(22),...screenWidth(1.5),...styles.row,...marginPosition("0%")}}>
            <Text style={{...fontSize(30),...styles.white}}>Create</Text>
            <Text style={{...fontSize(30),...styles.green,...marginPosition(0,0,0,"3%")}}>Account</Text>
        </View>
       <TouchableOpacity onFocus={()=>setcon(true)}>
        <ConsumerTextinputComp/>
        </TouchableOpacity>
        <View style={[setheight(num),screenWidth(1.5),styles.column,marginPosition('0%',0,"0%"),styles.selfCenter,bgColor(focusnum),radius(15)]} sty>
            <View style={{...styles.row}}>
            <Text style={[styles.gr,marginPosition('5%',0,0,'7%'),fontSize(13)]}>Mobile Number</Text>
            {numstar ? <Text></Text> :
            <Text style={{...fontSize(19),...styles.red,...marginPosition('4%',0,'0%',10)}}>*</Text>}
            </View>
            <TextInput keyboardType="numeric" maxLength={10} style={[marginPosition(0,0,0,'8%'),screenHeight(23),screenWidth(1.7),borderWidth(0,0,0,1),borderColor("#39763b"),fontSize(14),styles.white]} onFocus={()=>setfocusnum(!focusnum)} onBlur={()=>setfocusnum(!focusnum)} onChangeText={(val)=>{handlenumber(val)
             setnumval(val);
             setnumlength(val.length);
            }}></TextInput>
            {
             num ?<Text style={[display('none')]}></Text> : <Text style={[marginPosition('2%',0,0,'8%'),fontSize(11),styles.red]}>Must be Number Only</Text>
             }
             
             {
                minnum ? <Text style={[display('none')]}></Text> : <Text style={[marginPosition('0%',0,0,'8%'),fontSize(11),styles.red]}>Minimum 10 Numbers</Text>
             }
             {/* <Text>{numlength}</Text> */}

        </View>
        <View style={[setheight(name),screenWidth(1.5),styles.column,marginPosition(0,0,"0%"),styles.selfCenter,bgColor(focusname),radius(15)]}>
            <View style={{...styles.row}}>
            <Text style={[fontSize(13),styles.gr,marginPosition('5%',0,0,'7%')]}>FULL NAME</Text>
            {name && minname ? <Text></Text> : 
            <Text style={{...fontSize(19),...styles.red,...marginPosition('4%',0,'0%',10)}}>*</Text>}
            </View>
            <TextInput keyboardType="default" style={[marginPosition(0,0,0,'8%'),screenHeight(22),screenWidth(1.7),borderWidth(0,0,0,1),borderColor("#39763b"),fontSize(14),styles.white]} onFocus={()=>setfocusname(!focusname)} onBlur={()=>setfocusname(!focusname)} onChangeText={(val)=>{handlename(val)
             setnameval(val);
             setnamelength(val.length)
            }}></TextInput>
            {
             name ?<Text style={[display('none')]}></Text> : <Text style={[marginPosition('1%',0,0,'8%'),fontSize(11),styles.red]}>Must be Alphabet Only</Text>
             } 
             
             {
                minname ? <Text style={[display('none')]}></Text> : <Text style={[marginPosition('0%',0,0,'8%'),fontSize(11),styles.red]}>Minimum 4 Charaters</Text>
             }

        </View>
        <View style={[setheight(email),screenWidth(1.5),styles.column,marginPosition(0,0,"0%"),styles.selfCenter,bgColor(focusemail),radius(15)]}>
            <View style={{...styles.row}}>
            <Text style={[fontSize(13),styles.gr,marginPosition('5%',0,0,'7%')]}>Email</Text>
            {email ? <Text></Text> :
            <Text style={{...fontSize(19),...styles.red,...marginPosition('4%',0,'0%',10)}}>*</Text>}
            </View>
            <TextInput keyboardType="email-address" style={[marginPosition(0,0,0,'8%'),screenHeight(22),screenWidth(1.7),borderWidth(0,0,0,1),borderColor("#39763b"),fontSize(14),styles.white]} onFocus={()=>setfocusemail(!focusemail)} onBlur={()=>setfocusemail(!focusemail)} onChangeText={(val)=>{handleemail(val)
             setemailval(val);
             setemaillength(val.length)
            }}></TextInput>
            {
             email ?<Text style={[display('none')]}></Text> : <Text style={[marginPosition('2%',0,0,'8%'),fontSize(11),styles.red]}>Must be Valid Email</Text>
             }

        </View>
        <Passwordcomponent passwordstar={passwordstar} confpstar={confpstar}/>  
      </View>
      <TouchableOpacity onPress={handlesubmit} >
      <View style={{...marginPosition("10%"),...screenHeight(19),...screenWidth(3.2),...styles.bggreyish,...radius(30),...styles.allCenter}} >
          <Text style={{...fontSize(18),...styles.white}}>Submit</Text>
      </View>
      </TouchableOpacity>
      
      <View style={{...styles.row,...screenHeight(9),...screenWidth(1),...styles.allCenter,...marginPosition("-5%")}}>
          <Text style={{...fontSize(17),...styles.white}}>Already have an account?</Text>
          <TouchableOpacity>
      <View style={{...marginPosition(0,0,0,6)}}>
          <Text style={{...fontSize(17),...styles.green}} onPress={handlelogin}>Log In</Text>
      </View>
      </TouchableOpacity>
      </View> 
     
      </View> 
      </ScrollView>   
  )
}

export default Signup
