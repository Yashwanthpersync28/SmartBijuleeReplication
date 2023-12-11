import React, { useState } from 'react'
import {  Text,  TouchableOpacity, View } from 'react-native';
import { styles,flex,radius,marginPosition,fontSize, heightValue, widthValue } from '../../../styles/Styles';
import Buttonx from '../Loginpage/CommonCards/Buttonx';
import Logincards from '../Loginpage/CommonCards/Logincards';

function Forgotpassword({navigation}) {
    let handledashboard=()=>{
      navigation.navigate('drawernavigation')
    }
  return (
    <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack]}>
      <View style={[flex(2),{width:widthValue(1)}]}>
            <Buttonx navigation={navigation}/>
      </View>
      <View style={[flex(3),{width:widthValue(1)}]}>
           <Logincards name={'Forgot'} secondname={'Password'} showconsumer={true} heightval={true}/>
      </View>
      <View style={[flex(2),{width:widthValue(1)},styles.allCenter]}>
           <TouchableOpacity onPress={handledashboard}>
              <View style={[styles.bggreyish,{height:heightValue(14),width:widthValue(3.1)},styles.allCenter,radius(30),marginPosition(30)]}>
              <Text style={[fontSize(20),styles.white]}>Submit</Text>
               </View>
          </TouchableOpacity>
            <View style={[styles.row,marginPosition(40)]}>
                 <Text style={[styles.white]}>Aldready have an account ?</Text>
                 <Text style={[styles.green,marginPosition(0,0,0,5)]}>Sign In</Text>
            </View>
       </View>
    </View>
  )
}

export default Forgotpassword
