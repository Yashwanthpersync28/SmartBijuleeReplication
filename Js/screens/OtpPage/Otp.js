import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  flex,
  styles,
  radius,
  marginPosition,
  fontSize,
  heightValue,
  widthValue,
} from '../../../styles/Styles';
import Logincards from '../Loginpage/CommonCards/Logincards';
import Buttonx from '../Loginpage/CommonCards/Buttonx';
import {otpVerifyApi} from '../../Constants';
import {useDispatch, useSelector} from 'react-redux';
import {userotpVerifyApi} from '../../api/authApi/loginApi';
import {setToken} from '../../Redux/authReducer/tokenReaducer';

export const Otp = ({navigation, route}) => {
  
  console.log('kjhbdvcjkhbsdfvblsjkdhf', route.params);
  const [inputvalueOTP, setinputvalueOTP] = useState(route.params.mobileNumber);
  console.log('hnjvds', inputvalueOTP);
  // setnumber(route.params.data);

  const dispatch = useDispatch();

  const otp = async () => {
    console.log('kuygf');
    const otpResp = await dispatch(
      userotpVerifyApi({
        loginID: route.params.data,
        otp: 1111,
        smsTypeID: 2,
      }),
    );
    console.log('otpResp', otpResp);
    if (otpResp.payload.status === 200) {
      navigation.navigate('drawer');
      // dispatch(setToken(otpResp.payload.data.token))
      console.log('tokenis', otpResp.payload.data.token);
    }
  };

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
          inputvalueOTP={inputvalueOTP}
          name={'Enter'}
          secondname={'OTP'}
          showpassword={false}
          showmobile={true}
          showotp={true}
          onChangeText={val => setinputvalueOTP(val)}
          keyboardType="numeric"
        />
      </View>
      <View style={[flex(2), styles.centerHorizontal]}>
        <TouchableOpacity onPress={otp}>
          <View
            style={[
              styles.bggreyish,
              {height: heightValue(18), width: widthValue(3.3)},
              styles.allCenter,
              radius(30),
              marginPosition(10),
            ]}>
            <Text style={[fontSize(20), styles.white]}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
