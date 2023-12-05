import React from 'react'
import { useState ,useEffect} from 'react';
import { View,Text,TextInput } from 'react-native'
import { screenHeight,borderWidth,styles ,screenWidth,radius,marginPosition,heightwidth,fontSize,fontFamily,row,borderColor, bgColor, display, setheight} from '../../../styles/Styles'
// {cc,setChildData}
const ConsumerTextinputComp = () => {
    ///consumer//
    
    let [con,setcon]=useState(true);
    let [focusss,setfocusss]=useState(false);
    let [consumerlength,setconsumerlength]=useState(0);
     let[dummy,setdummy]=useState('')
   
    
    let handleconsumer=(val)=>{
      
        // console.log(conval);
        if (isNaN(val)) {
            //if input is not a number then here
            setcon(false)
            // setChildData(val,con);
          } else {
            //if input is number then here
            setcon(true);
            // setChildData(val,con);
          }
          
        
      }
     
  return (
    <View style={[setheight(con),screenWidth(1.5),styles.column,marginPosition(0,0,"0%"),styles.selfCenter,bgColor(focusss),radius(15)]}>
            <View style={{...styles.row}}>
            <Text style={[fontSize(13),styles.gr,marginPosition('5%',0,0,'7%')]}>CONSUMER ID</Text>
           
            {con ? <Text></Text> :
            <Text style={{...fontSize(19),...styles.red,...marginPosition('4%',0,'0%',10)}}>*</Text>}
            </View>
           
            <TextInput keyboardType="numeric" style={[marginPosition(0,0,0,'8%'),screenHeight(22),screenWidth(1.7),borderWidth(0,0,0,1),borderColor("#39763b"),fontSize(14),styles.white]} onFocus={()=>setfocusss(!focusss)} onBlur={()=>setfocusss(!focusss)} onChangeText={(val)=>{handleconsumer(val)
                  setconsumerlength(val.length);
                  setdummy(val)
                 }}></TextInput>
            {
             con ?<Text></Text> : <Text style={[marginPosition('2%',0,0,'8%'),fontSize(11),styles.red]}>Must be Number Only</Text>
             }
             
        </View>
  )
}

export default ConsumerTextinputComp
