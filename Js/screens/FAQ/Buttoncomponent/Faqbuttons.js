import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native';
import {styles,radius,heightValue,widthValue, marginPosition } from '../../../../styles/Styles';
const Faqbuttons = ({buttonname,handlebuttons,reducewidth}) => {
  return (
        
        <View style={[styles.bgdashblue, { height: heightValue(16), width: reducewidth ? widthValue(6) : widthValue(4),marginLeft:reducewidth ? 0 : 25 }, styles.allCenter, radius(30),]}>
            <TouchableOpacity style={[styles.allCenter]} onPress={()=>handlebuttons()}>
                 <Text style={[styles.white]}>{buttonname}</Text>
            </TouchableOpacity>
        </View>
      
  )
}

export default Faqbuttons
