import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View ,ScrollView} from 'react-native';
import { flex,screenHeight,borderWidth,styles ,screenWidth,radius,marginPosition,heightwidth,fontSize,fontFamily,row,borderColor, heightValue, widthValue} from '../../../styles/Styles'
import Textinput from '../TextInput/Textinput';
import ConsumerTextinputComp from '../TextInput/ConsumerTextinputComp';
import Buttonx from '../Loginpage/CommonCards/Buttonx';
import Logincards from '../Loginpage/CommonCards/Logincards';

const Consumer = ({navigation}) => {
  let name=true;
    let [focus,setfocus]=useState(true)
    let [focusss,setfocusss]=useState(false);
    let handlelogin=()=>{
        navigation.navigate('login')
        setfocus(false);
      }
      let handlesignup=()=>{
        navigation.navigate('signup')
      }
  return (
    <ScrollView style={{...styles.bglightblack}}>
       <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack,styles.centerHorizontal]}>
        <View style={[{height:heightValue(2.8),width:widthValue(1)}]}>
            <Buttonx navigation={navigation}/>
      </View>
      <View style={[{height:heightValue(4),width:widthValue(1)}]}>
           <Logincards name={'CONSUMER'} secondname={'ID'} showconsumer={true} heightval={true}/>
      </View>
      <TouchableOpacity onPress={handlesignup}>
      <View style={[{height:heightValue(16),width:widthValue(4)},styles.bggreyish,radius(30),styles.allCenter,marginPosition(30)]}>
         <Text style={[styles.white]}>Next</Text>
       </View>
      </TouchableOpacity>
     
      
      <View style={[styles.row,{height:heightValue(10)},styles.allCenter,marginPosition(0)]}>
          <Text style={{...fontSize(17),...styles.white}}>Already have an account?</Text>
          <TouchableOpacity>
      <View style={{...marginPosition(0,0,0,6)}}>
          <Text style={{...fontSize(17),...styles.green}} onPress={handlelogin}>Sign In</Text>
      </View>
      </TouchableOpacity>
      </View> 
  </View>
  </ScrollView>
  )
}

export default Consumer
