import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { flex ,styles ,radius,marginPosition,fontSize, heightValue, widthValue} from '../../../styles/Styles';
import Logincards from '../Loginpage/CommonCards/Logincards';
import Buttonx from '../Loginpage/CommonCards/Buttonx';
function Otp({navigation}) {
   
      let handledashboard=()=>{
        navigation.navigate('drawer')
        // drawernavigation
      }
  return (
   
   <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack]}>     
       <View style={[flex(2),styles.allCenter]}>
          <Buttonx navigation={navigation}/>
       </View>
      <View style={[flex(3)]}>
         <Logincards name={'Enter'} secondname={'OTP'} showpassword={false} showmobile={true} showotp={true}/>
      </View>
      <View style={[flex(2),styles.centerHorizontal]}>
        <TouchableOpacity onPress={handledashboard}>
          <View style={[styles.bggreyish,{height:heightValue(14),width:widthValue(3.2)},styles.allCenter,radius(30),marginPosition(10)]}>
            <Text style={[fontSize(20),styles.white]}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
    
</View>

  )
}

export default Otp
