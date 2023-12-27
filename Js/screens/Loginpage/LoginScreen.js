import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import { flex, heightValue, styles, widthValue, heightwidth, marginPosition, radius, fontSize } from '../../../styles/Styles';
import Logincards from './CommonCards/Logincards';
import {useDispatch, useSelector} from 'react-redux';
import { userVerifyApi } from '../../api/authApi';
import LottieView from 'lottie-react-native';
import DeviceInfo from 'react-native-device-info';

const LoginScreen = ({navigation}) => {
  const [id, setId] = useState('');
  const [password, setpasword] = useState('');
  const [loading,setloading]=useState('Send otp')
  const [showbtn,setshowbtn]=useState(false);
  const dispatch = useDispatch();
  const globalVariable = useSelector((state)=>state)
  console.log('globalVariable',globalVariable);

  const userSelector=useSelector((state)=>state.auth.userVerify)
  const [showloading,setshowloading]=useState(false);
  
  const login = async () => {
    const deviceID = await DeviceInfo.getUniqueId();
    const deviceMake = await DeviceInfo.getManufacturer();
    const deviceOS = await DeviceInfo.getSystemName();
    const deviceOSVersion = await DeviceInfo.getSystemVersion();
    
    console.log('dxfcgvhbjnkl',deviceID,deviceMake,deviceOS,deviceOSVersion);
    setloading('Loading');
    setshowloading(true)
    const loginresp = await dispatch(userVerifyApi(
      {
            "LoginID": id,
            "password": password,
            "confirmation": "N",
            "deviceInfo": {
            "deviceID": deviceID,
            "deviceMake": deviceMake,
            "deviceOS": deviceOS,
            "deviceOSVersion": deviceOSVersion
          } 

    }
    ));
   
    console.log("login",loginresp);


    if(loginresp.payload.status === 201){
      const CustomerDetails = loginresp.payload.data.MobileNumber
      const loginId = loginresp.meta.arg.LoginID;
      navigation.navigate('otp',{
        data:CustomerDetails,
        Id:loginId,
      })
    setloading('Send Otp');
    setshowloading(false)
      setLoginError('')
      console.log(CustomerDetails,);
      console.log('loginId',loginId);
      console.log('checkload',loginresp.meta.requestStatus);
      
    }
    else{
      setloading('Send Otp')
      setshowloading(false)

    } 
    const confirmResp= await dispatch(
      userVerifyApi({
        "LoginID": id,
            "password": password,
            "confirmation": "Y",
            "deviceInfo": {
            "deviceID": deviceID,
            "deviceMake": deviceMake,
            "deviceOS": deviceOS,
            "deviceOSVersion": deviceOSVersion}
      })
    )
    console.log('confirmRespone', confirmResp);
    const CMobileNum = confirmResp.payload.data.MobileNumber;
   const  CLoginId =  confirmResp.meta.arg.LoginID;
   console.log('phone:',CMobileNum)
   console.log('id:',CLoginId)
 const deviceError = loginresp.payload.data.ErrorDescription;
 if (deviceError === 'Login device is different') {
   Alert.alert(
     'Login device is different',
     'Do you want to login on this device and logout from all other devices?',
     [
       {
         text: 'CANCEL',
       },
       {
         text: 'CONFIRM',
         onPress: () => {
           navigation.navigate('otp',{
             data: CMobileNum,
             Id: CLoginId,

           });
           setloading('Send Otp');
           setshowloading(false)
         },
       },
      ])}
      else{
        setloading('Send Otp')
        setshowloading(false)
      }
    
    
  };
  ///THIS IS FOR CHANGING BUTTON COLORS
  useEffect(()=>{
    if(id.length>=2 && password.length>=2){
      setshowbtn(true)
    }
    else{
      setshowbtn(false)
    }
 },[id,password])
  
      // if(loginresp.payload.status === 201){
      //   navigation.navigate("otp", {data: id, mobileNumber: loginresp.payload.data.MobileNumber})
      //   seterror('')
      //   }
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
             {userSelector?.error}
            </Text>
          </View>
          <TouchableOpacity disabled={!showbtn} onPress={login} style={[styles.row,styles.allCenter, flex(0.4), marginPosition(20),]}>
          <View
            style={[
              {width:widthValue(2.8),height:heightValue(17), backgroundColor: showbtn ? '#39763b' : '#262f40'},
              radius(30),
              styles.allCenter,
              styles.row
            ]}>
              <Text style={[styles.white, fontSize(18)]}>{loading}</Text>
              {showloading ? 
            <LottieView style={{height:25,width:25}} source={require('../Assetslottie/loadingtwo.json')} autoPlay />:null}
           
          </View>
          </TouchableOpacity>
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
