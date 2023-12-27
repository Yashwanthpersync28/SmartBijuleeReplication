import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native';
import {styles,radius,heightValue,widthValue, marginPosition } from '../../../../styles/Styles';
import { useSelector } from 'react-redux';


const Faqbuttons = ({buttonname,handlebuttons,reducewidth}) => {

  const darkMode = useSelector((state)=>state.system.darkMode);

  return (
    <TouchableOpacity style={[styles.allCenter]} onPress={()=>handlebuttons()}>
        <View style={[darkMode?styles.bggreycolor:styles.bgdashblue, { height: heightValue(18), width: reducewidth ? widthValue(6) : widthValue(4),marginLeft:reducewidth ? 0 : 25 }, styles.allCenter, radius(30),]}>
                 <Text style={[darkMode?styles.black:styles.white]}>{buttonname}</Text>
        </View>
        </TouchableOpacity>
  )
}

export default Faqbuttons
