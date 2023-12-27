import LottieView from 'lottie-react-native';
import React from 'react';
import { View, Text } from 'react-native';
import { heightValue , heightwidth, styles, widthValue , marginPosition , fontSize , radius, padding  } from '../../../../styles/Styles';

const Lotti = ({ animationSource, title , name}) => {
  
  return (
               <View style={[{height:heightValue(3.3),width:widthValue(1.7)},styles.bgdashblue,radius(15),padding(20),marginPosition(0,0,0,-10)]}>
                  <Text style={[fontSize(20),styles.green]}>{title}</Text>
                <View style={[styles.allCenter]}>
                    <LottieView style={[heightwidth('70%', '70%')]} source={animationSource} autoPlay />
                </View>
                   <Text style={[marginPosition(0,0,0,30),fontSize(15),styles.white]}>{name}</Text>   
               </View>    
  );
};

export default Lotti;
