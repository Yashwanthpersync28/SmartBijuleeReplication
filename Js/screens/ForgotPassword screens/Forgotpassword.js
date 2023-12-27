import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { styles, flex, radius,marginPosition,fontSize, heightValue,widthValue,} from '../../../styles/Styles';
import Buttonx from '../Loginpage/CommonCards/Buttonx';
import Logincards from '../Loginpage/CommonCards/Logincards';
import { useDispatch, useSelector } from 'react-redux';
import { userpasswordApi } from '../../api/authApi';
import Consumer from '../Consumer/Consumer';

function Forgotpassword({navigation}) {

  const [password, setpasword] = useState('');
  const [confirmpassword,setconfpassword]=useState('')
  const [showbtn,setshowbtn]=useState(false);
  const [button,setbutton]=useState('Submit')
  const [count,setcount]=useState(0);
  const [consumer,setconsumer]=useState('');
  const [otp,setotp]=useState(null);
  const [error,seterror]=useState('')
  const dispatch = useDispatch();
  const globalVariable = useSelector((state)=>state)
  console.log('globalVariable',globalVariable);
  const usernumber=useSelector((state)=>state.auth.user.data.mobilenumber)
  const [number,setnumber]=useState(usernumber);
  const transformMobileNumber = (number) => {
    const hiddenPart = 'X'.repeat(number.length - 2);
    const visiblePart = number.slice(-2);
    return hiddenPart + visiblePart;
  };
  
  const userSelector=useSelector((state)=>state.auth.passwordVerify)
 

  const login = async () => {
   
    const loginresp = await dispatch(userpasswordApi(
      {
        "loginID": consumer,
        "neW_PASSWORD": password,
        "confirM_NEW_PASSWORD": confirmpassword,
        "mobileNumber": "9407375262"
      }
    ));
   
    console.log("login",loginresp);


    if(loginresp.payload.status === 200){
      const CustomerDetails = loginresp.payload.data
      const loginId = loginresp.meta.arg.LoginID;
      Alert.alert('Password Reset Sucessfull', 'Please Login', [
        { text: 'Ok',onPress:()=> navigation.navigate('login')}])
      setLoginError('')
      console.log(CustomerDetails,);
      console.log('loginId',loginId);
      console.log('checkload',loginresp.meta.requestStatus);
      
    }
  }

const handlecount=()=>{
  if(count===0){
    setcount(count+1)
    setshowbtn(false);
    
  }
  else if(count===1){
    setcount(count+1)
    setbutton('Reset')
    setshowbtn(false);

  }
  else if(count===2){
    login();
    
  }
}

useEffect(() => {
  if (count === 0) {
    if (consumer.length > 4) {
      if(consumer != 'C000003'){
        seterror('INVALID ID')
      }
      else{
        setshowbtn(true);
        seterror('')
      }
    }
     else {
      setshowbtn(false);
      
    }
  }
  if(count === 1){
    if(otp.length ===4){
      if(otp != '1111'){
        seterror('INVALID OTP')
      }
      else{
        setshowbtn(true);
        seterror('')
      }
    }
    else setshowbtn(false)
  }
  if(count === 2){
    if(password.length >4 && confirmpassword.length >4){
      setshowbtn(true)
    }
    else setshowbtn(false)
  }
}, [consumer,otp,password,confirmpassword]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View
      style={[
        {height: heightValue(1), width: widthValue(1)},
        styles.bglightblack,
      ]}>
       
      <View style={[flex(3), {width: widthValue(1)}]}>
        <Buttonx navigation={navigation} />
      </View>
     
      <View style={[flex(3), {width: widthValue(1)}]}>
        {count===0 ? <Logincards name={'Forgot'} secondname={'Password'} showconsumerid={true} onChangeText={(val)=>setconsumer(val)}/>:null}
        {count===1 ? <Logincards name={'OTP'} showmobile={true} showotp={true} onChangeText={(val)=>setotp(val)} number={transformMobileNumber(number)}/>:null}
        {count===2 ? 
        <Logincards name={'Set'}
        editable={false}
         secondname={'New Password'} 
         showpassword={true}
         showconfpassword={true} 
         onChangePass={(val)=>setpasword(val)}
          onChangeconfPass={(val)=>setconfpassword(val)}/>:null}
      </View>
      <View style={[styles.allCenter]}>
          {count===2 ? <Text style={[styles.orange, fontSize(13), marginPosition(30)]}>
             {userSelector?.error}
          </Text>:null}
          {count<2 ? <Text style={[styles.orange, fontSize(13), marginPosition(20)]}>{error}</Text>:null}
      </View>
      <View style={[flex(3), {width: widthValue(1)}, styles.allCenter]}>
        <TouchableOpacity disabled={!showbtn} onPress={handlecount}>
          <View
            style={[
              
              {height: heightValue(17), width: widthValue(3.2),backgroundColor:showbtn ? '#39763b' : "#262f40"},
              styles.allCenter,
              radius(30),
              marginPosition(30),
            ]}>
            <Text style={[fontSize(20), styles.white]}>{button}</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.row, marginPosition(40)]}>
          <Text style={[styles.white]}>Aldready have an account ?</Text>
          <Text style={[styles.green, marginPosition(0, 0, 0, 5)]}>
            Sign In
          </Text>
        </View>
      </View>
     
    </View>
    </ScrollView>
  );
}

export default Forgotpassword;
