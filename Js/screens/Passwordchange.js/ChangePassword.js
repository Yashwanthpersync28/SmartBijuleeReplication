import React from 'react'
import { View } from 'react-native'
import { heightValue, widthValue , fontSize , styles , flex , } from '../../../styles/Styles'

export const ChangePassword = () => {
  return (
    <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack]}>     
    <View style={[flex(2),styles.allCenter]}>
        <Buttonx navigation={navigation}/>
    </View>
     <View style={[flex(3)]}>
         <Logincards inputvalueOTP={inputvalueOTP} name={'Enter'} secondname={''} showpassword={false} showmobile={true} showotp={true} onChangeText={(val)=>setinputvalueOTP(val)} keyboardType="numeric"/>
     </View>
     <View style={[flex(2),styles.centerHorizontal]}>

        <TouchableOpacity onPress={otp}>
          <View style={[styles.bggreyish,{height:heightValue(18),width:widthValue(3.3)},styles.allCenter,radius(30),marginPosition(10)]}>
            <Text style={[fontSize(20),styles.white]}>Sign In</Text>
          </View>
        </TouchableOpacity>
     </View>   
</View>
  )
}


