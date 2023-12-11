import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import { styles,heightValue,widthValue,padding,marginPosition,radius,bgColor,borderColor,borderWidth,fontSize } from '../../../../styles/Styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const SignupInputbox = ({height , label, secureTextEntry, value, onChangeText, error , onBlur , onFocus , focuss , star , showeye}) => {
  const [eye,seteye]=useState(true);
  return (
    
    <View style={[{height:heightValue(height),width:widthValue(1.6)},padding(0,10,20,10,20),styles.column,marginPosition(0,0,3),radius(20),bgColor(focuss)]}> 
      <View style={[styles.row]}>
      <Text style={[fontSize(13),styles.gr]}>{label}</Text>
     {star ?  <Text style={[styles.red,marginPosition(0,0,0,5)]}>*</Text> : null }
      </View>
      <View>
          <TextInput secureTextEntry={eye} style={[styles.white,borderWidth(0,0,0,1),borderColor('green'),marginPosition(0,0,0),fontSize(18),padding(0),{textAlignVertical:"center"}]} onBlur={onBlur} onFocus={onFocus} onChangeText={onChangeText} value={value}/>
          <View style={[styles.flexEnd,marginPosition(10),styles.bgGray]}>
            {showeye ? 
            <FontAwesome5Icon name={eye ? 'eye-slash' : 'eye'} onPress={()=>seteye(!eye)} style={[styles.gray,fontSize(15),marginPosition(-40,0,0,0)]}/>:null}
            </View>
            
       </View>
       <View style={[marginPosition(-5)]}>
     {error && <Text style={[fontSize(12),styles.red]}>{error}</Text>} 
     </View>
    

    </View>






  );
};

export default SignupInputbox

