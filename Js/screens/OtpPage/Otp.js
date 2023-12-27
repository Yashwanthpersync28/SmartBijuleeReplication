import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  flex,
  styles,
  radius,
  marginPosition,
  fontSize,
  heightValue,
  widthValue,
  heightwidth,
  padding,
} from '../../../styles/Styles';
import Logincards from '../Loginpage/CommonCards/Logincards';
import Buttonx from '../Loginpage/CommonCards/Buttonx';
// import {otpVerifyApi} from '../../Constants';
import {useDispatch, useSelector} from 'react-redux';
import {otpVerifyApi, userotpVerifyApi} from '../../api/authApi/loginApi';
import LottieView from 'lottie-react-native';

export const Otp = ({navigation, route}) => {
  
  console.log('kjhbdvcjkhbsdfvblsjkdhf', route.params.data);
  const [inputvalueOTP, setinputvalueOTP] = useState('');
  const [number,setnumber]=useState(route.params.data);
  const transformMobileNumber = (number) => {
        const hiddenPart = 'X'.repeat(number.length - 2);
        const visiblePart = number.slice(-2);
        return hiddenPart + visiblePart;
      };
  
  console.log('fgvbhjn',number);
  console.log('hnjvds', inputvalueOTP);
  const [error,seterror]=useState('');
  const [showbtn,setshowbtn]=useState(false)
  const [loading,setloading]=useState('Sign in')
  const [showloading,setshowloading]=useState(false);
  // setnumber(route.params.data);

  const dispatch = useDispatch();
  const otp = async () => { 
    console.log('kuygf');
    setloading('Loading')
    setshowloading(true)
    const otpResp = await dispatch(otpVerifyApi
      ({
        "LoginID": "C000003",
        "otp": 1111,
        "smsTypeID": 2,
      }),
    );
   
    
    console.log('otpResp', otpResp);
    if (otpResp.payload.status === 200) {
      navigation.navigate('drawer');
      // dispatch(setToken(otpResp.payload.data.token))
      // console.log('tokenis', otpResp.payload.data.token);
    }
    else{
      seterror('INVALID OTP')
      setloading('Sign In')
      setshowloading(false)
    }
  };
  // const handledrawer=()=>{
  //   navigation.navigate('drawer')
  // }
  //  /THIS IS FOR CHANGING BUTTON COLORS
   useEffect(()=>{
    if(inputvalueOTP.length===4){
      setshowbtn(true)
    }
    else{
      setshowbtn(false)
    }
 },[inputvalueOTP])

  return (
    <View
      style={[
        {height: heightValue(1), width: widthValue(1)},
        styles.bglightblack,
      ]}>
      <View style={[flex(2), styles.allCenter]}>
        <Buttonx navigation={navigation} />
      </View>
      <View style={[flex(3)]}>
        <Logincards
          number={transformMobileNumber(number)}
          editable={false}
          name={'Enter'}
          secondname={'OTP'}
          showpassword={false}
          showmobile={true}
          showotp={true}
          onChangeText={val => setinputvalueOTP(val)}
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      <View style={[flex(2), styles.centerHorizontal]}>
      <Text style={[styles.red, fontSize(13), marginPosition(20)]}>
             {error}
            </Text>
        <TouchableOpacity disabled={!showbtn} onPress={otp}>
          <View
            style={[
              {height: heightValue(16), width:showloading ? widthValue(3): widthValue(4),backgroundColor: showbtn ? '#39763b' : '#262f40'},
              styles.centerVertical,
              radius(30),
              marginPosition(10),
              padding(10)
              
            ]}>
              <View style={[styles.row,styles.allCenter]}>
            <Text style={[fontSize(18), styles.white]}>{loading}</Text>
           {showloading ? 
            <LottieView style={{height:25,width:25}} source={require('../Assetslottie/loadingtwo.json')} autoPlay />:null}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
