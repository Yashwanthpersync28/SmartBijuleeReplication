import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { flex, heightValue, styles, widthValue, heightwidth, marginPosition, radius, fontSize } from '../../../styles/Styles';
import Logincards from './CommonCards/Logincards';
import {useDispatch, useSelector} from 'react-redux';
import {userVerifyApi} from '../../api/authApi';
import {eventlistApi} from '../../api/authApi/get/dummy';

const LoginScreen = ({navigation}) => {
  const [error, seterror] = useState('');
  const [id, setId] = useState('');
  const [password, setpasword] = useState('');
  const [count, setcount] = useState(0);
  console.log('sdjvhbsdvadsv', id);
  console.log('fvgbhnjmk', password);
  const dispatch = useDispatch();

  const login = async () => {
    console.log('kuygf');
    // const loginResp = await dispatch(userVerifyApi());
    // console.log('hgfjndkm',loginResp);
    const loginresp = await dispatch(
      userVerifyApi({
        loginID: id,
        password: password,
        confirmation: 'Y',
        deviceInfo: {
          deviceID: '122323',
          deviceMake: 'android',
          deviceOS: 'android',
          deviceOSVersion: '12.1',
        },
      }),
    );
    console.log('loginResp', loginresp);
    if(loginresp.payload.status === 201){
    navigation.navigate("otp", {data: id, mobileNumber: loginresp.payload.data.MobileNumber})
    seterror('')
    }
    else{
     if(count === 0){
      setcount(count+1)
      seterror('You have made 1 login failed attempts left with 2 Retry')
     }
     else if(count===1){
      setcount(count+1)
      seterror("You have made 2 login failed attempts left with 1 Retry")
     }
     else if(count===2){
      setcount(count+1)
      seterror("You Account is blocked due to 3 failed attempts please try after 24hours or reset the password for instant login")
     }

    }
      }
  

  return (
    <ScrollView>
      <View
        style={[
          styles.bglightblack,
          {height: heightValue(1), width: widthValue(1)},
        ]}>
        <View
          style={[
            flex(0.8),
            {justifyContent: 'flex-end', alignItems: 'center'},
            marginPosition(0, 0, 30),
          ]}>
          <Image
            source={require('../Assetslottie/Images/LoginLogo2.png')}
            style={[heightwidth(140, 143), marginPosition(0, 0, 0)]}
          />
        </View>
        <View style={[flex(1)]}>
          <Logincards
            name={'Log'}
            secondname={'In'}
            showpassword={true}
            showconsumer={true}
            onChangeText={val => setId(val)}
            id={id}
            onChangePass={val => setpasword(val)}
            password={password}
          />
        </View>
        <View style={[flex(1), styles.centerHorizontal]}>
          <View style={[styles.allCenter, {width: widthValue(1.4)}]}>
            <Text style={[styles.red, fontSize(13), marginPosition(20)]}>
              {error}
            </Text>
          </View>
          <View
            style={[
              marginPosition(20),
              flex(0.4),
              {width: widthValue(2.8)},
              styles.bggreyish,
              radius(30),
              styles.allCenter,
            ]}>
            <TouchableOpacity onPress={login}>
              <Text style={[styles.white, fontSize(20)]}>Send Otp</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('forgotpassword')}>
            <Text style={[styles.white, marginPosition(10), fontSize(17)]}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <View style={[styles.row, marginPosition(30)]}>
            <Text style={[styles.white, fontSize(17)]}>
              Don't have an account ?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('consumer')}>
              <Text style={[styles.green, fontSize(17)]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
          } 

export default LoginScreen;
