import React from 'react'
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { flex,styles,screenWidth ,marginPosition,heightwidth,fontSize,heightValue,widthValue} from '../../../styles/Styles';
function Onboardingone({heading,name,details,lottiedata,number}) {
  
  return (

    <View style={[{height:heightValue(1),width:widthValue(1)} ,styles.bglightblack]}>
       <View style={[marginPosition(50,0,0,40),screenWidth(1.2),flex(2.2)]}> 
           <Text style={[styles.green,fontSize(80),marginPosition(0,0,'3%',0)]}>{number}</Text>
           <Text style={[styles.white,fontSize(32),marginPosition(0,0,'4%',0)]}>{heading}</Text>
           <Text style={[styles.green,fontSize(32)]}>{name}</Text>   
       </View>
       <View style={[flex(3.1),styles.allCenter]}> 
       <LottieView style={[heightwidth('90%','90%')]} source={lottiedata} autoPlay />
       </View>
       <View style={[marginPosition(0,0,95,40),screenWidth(1.3),flex(1.2),styles.allCenter]}> 
        <Text style={[fontSize(17),styles.fontwhite]}>{details}</Text>
       </View>   
    </View>
  
  )
}

export default Onboardingone




