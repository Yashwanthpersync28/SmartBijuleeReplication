import React, { useState } from 'react'
import { View,Text,TextInput ,KeyboardAvoidingView,ScrollView} from 'react-native';
import { flex,heightValue,widthValue,styles,padding,fontSize,borderColor,borderWidth, marginPosition } from '../../../../../styles/Styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const PassTextInput = ({name,handlepass}) => {
    const [eye,seteye]=useState(true)
  return (
    // <KeyboardAvoidingView
    //         style={[flex(1)]}
    //         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //         keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}>
    //              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          
          <View style={[{height:heightValue(11),width:widthValue(1.3)},padding(0)]}>
            <View>
                <Text style={[styles.white,fontSize(12)]}>{name}</Text>
                <TextInput secureTextEntry={eye} style={[marginPosition(0,0,20),borderColor('green'),borderWidth(0,0,0,0.6),padding(10),styles.white,fontSize(17)]} onChangeText={(val)=>handlepass(val)}/>
                </View>
                <View style={[styles.flexEnd]}>
                <FontAwesome5Icon name={eye ? 'eye-slash' : 'eye'} onPress={()=>seteye(!eye)} style={[styles.gray,fontSize(15),marginPosition(-40,0,0,0)]}/>
                </View>
         </View>
         
        // </ScrollView> 
        // </KeyboardAvoidingView>
  )
}

export default PassTextInput
