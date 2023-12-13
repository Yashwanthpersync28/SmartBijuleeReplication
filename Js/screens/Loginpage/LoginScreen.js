import React, { useState } from 'react'
import { View ,Text,Image, TouchableOpacity,ScrollView} from 'react-native'
import { flex, heightValue , styles , widthValue , heightwidth , marginPosition , radius , fontSize } from '../../../styles/Styles'
import Logincards from './CommonCards/Logincards';
import { useDispatch, useSelector } from 'react-redux';
import { userVerifyApi } from '../../api/authApi';


const LoginScreen = ({navigation}) => {


  const [id, setId] = useState("");
  console.log("sdjvhbsdvadsv", id)
  
  // const dispatch = useDispatch();
  
  // const login= async ()=>{
  //   console.log("kuygf");
  //   const loginResp = await dispatch(userVerifyApi({
  //       "loginID": "C000003",
  //       "password": "Test@321",
  //       "confirmation": "Y",
  //       "deviceInfo": {
  //         "deviceID": "122323",
  //         "deviceMake": "android",
  //         "deviceOS": "android",
  //         "deviceOSVersion": "12.1"
  //       }
      
  //   }));
  //   console.log("loginResp",loginResp);
  //   if(loginResp.payload.status === 201){
  //     navigation.navigate("otp", {data: id})
  //   }
  
  // }
const handlesubmit=()=>{
  navigation.navigate('otp');
  
}



  return (
    <ScrollView>
        <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)}]}>
            <View style={[flex(0.8),{justifyContent:'flex-end',alignItems:"center"},marginPosition(0,0,30)]}>
                  <Image source={require('../Assetslottie/Images/LoginLogo2.png') } style={[heightwidth(140,143),marginPosition(0,0,0)]}/>   
            </View>
            <View style={[flex(1)]}>
                  <Logincards name={'Log'} secondname={'In'} showpassword={true} showconsumer={true} onChangeText={(val) => setId(val)} id={id}/>   
            </View>
           <View style={[flex(1),styles.centerHorizontal]}>
               <View style={[marginPosition(40),flex(0.3),{width:widthValue(2.8)},styles.bggreyish,radius(30),styles.allCenter]}>
                   <TouchableOpacity onPress={handlesubmit}>
                       <Text style={[styles.white,fontSize(20)]}>Send Otp</Text>
                   </TouchableOpacity>
               </View>
                     <TouchableOpacity onPress={()=>navigation.navigate('forgotpassword')}>
                        <Text style={[styles.white,marginPosition(10),fontSize(17)]}>Forgot Password ?</Text>
                    </TouchableOpacity>
              <View style={[styles.row,marginPosition(30)]}>
                      <Text style={[styles.white,fontSize(17)]}>Don't have an account ? </Text>
                      <TouchableOpacity onPress={()=>navigation.navigate('consumer')}>
                           <Text style={[styles.green,fontSize(17)]}>Sign Up</Text>
                      </TouchableOpacity>
              </View> 
          </View>
     
       </View>
   </ScrollView>
  )
}

export default LoginScreen
