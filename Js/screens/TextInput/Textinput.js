import React, { useEffect, useState } from 'react'
import {View,TextInput,Text,TouchableWithoutFeedback} from 'react-native';
import { screenHeight,screenWidth ,radius,fontSize,marginPosition,borderWidth,borderColor,styles, paddingPosition, bgColor} from '../../../styles/Styles';

const Textinput = ({secureTextEntry,val,name,onFocus,focuss,onBlur}) => {
    let [res,setres]=useState(val)
    // setres(props.val);
    let [focus,setfocus]=useState(focuss);
    // setfocus(false)
    let handlebackground=()=>{
        setfocus(focuss);
    }
  return (
    <TouchableWithoutFeedback onPressIn={onFocus} onPressOut={onBlur}>
            <View style={[screenHeight(11),screenWidth(1.5),radius(15),bgColor(focuss),styles.selfStart]}  >
                <Text style={[fontSize(13),styles.gr,marginPosition('5%',0,0,'8%')]} >{name}</Text>
                  <TextInput onBlur={onBlur} onFocus={onFocus} secureTextEntry={secureTextEntry} style={[marginPosition(0,0,0,'8%'),screenHeight(25),screenWidth(1.8),borderWidth(0,0,0,1),borderColor("#39763b"),fontSize(15),styles.white]}  ></TextInput>

            </View>
            </TouchableWithoutFeedback>
  )
}

export default Textinput
