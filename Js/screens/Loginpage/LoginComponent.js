import React from 'react'
import { View ,Text,Image, TouchableOpacity} from 'react-native'
import { flex, heightValue, styles, widthValue ,heightwidth,marginPosition, radius, fontSize} from '../../../styles/Styles'
import Logincards from './CommonCards/Logincards';

const LoginComponent = ({navigation}) => {
  return (
   <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)}]}>
     <View style={[flex(0.8),{justifyContent:'flex-end',alignItems:"center"},marginPosition(0,0,30)]}>
          <Image source={require('../Assetslottie/Images/LoginLogo2.png') } style={[heightwidth(140,143),marginPosition(0,0,0)]}/>   
     </View>
     <View style={[flex(1)]}>
         <Logincards name={'Log'} secondname={'In'} showpassword={true} showmobile={true}/>
     </View>
     <View style={[flex(1),styles.centerHorizontal]}>
        <View style={[marginPosition(40),flex(0.4),{width:widthValue(2.6)},styles.bggreyish,radius(30),styles.allCenter]}>
            <TouchableOpacity onPress={()=>navigation.navigate('otp')}>
               <Text style={[styles.white,fontSize(20)]}>Send Otp</Text>
            </TouchableOpacity>
        </View>
            <TouchableOpacity onPress={()=>navigation.navigate('forgotpassword')}>
              <Text style={[styles.white,marginPosition(10),fontSize(17)]}>Forgot Password ?</Text>
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.navigate('consumer')}>
               <Text style={[styles.white,marginPosition(30),fontSize(17)]}>Don't have an account ? Sign Up</Text>
            </TouchableOpacity>
      </View>
     
   </View>
  )
}

export default LoginComponent
