import React, { useState } from 'react'
import Buttonx from '../Loginpage/CommonCards/Buttonx'
import {View,Text,TouchableOpacity, ScrollView,TextInput,StyleSheet} from 'react-native'
import {heightValue, styles, widthValue ,radius,padding,marginPosition,fontSize} from '../../../styles/Styles'
import Inputbox from '../Loginpage/CommonCards/Inputbox';
import PassTextInput from '../Settingspage/SettingComponents/ChangePassword/PassTextInput'
import SignupInputbox from './Signupcomponents/SignupInputbox'
const SignupPage = ({navigation}) => {
  const [consumer, setconsumer] = useState('');
  const [focusconsumer, setfocuscoumer]= useState(false);
  const [number, setnumber] = useState('');
  const [focusnumber, setfocusnumber]= useState(false);
  const [email, setEmail] = useState('');
  const [focusemail, setfocusEmail]= useState(false);
  const [password, setPassword] = useState('');
  const [focuspassword, setfocuspassword]= useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [focuscpassword, setfocuscpassword]= useState(false);
  const [fullName, setFullName] = useState('');
  const [focusname, setfocusname]= useState(false);

  const [erroroccured,seterroroccured]=useState(false)
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    // Validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(text) ? '' : 'Invalid email format');
    seterroroccured(emailRegex.test(text));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);

    // Password validation
    const minLength = 6;
    const hasNumber = /\d/.test(text);
    const hasSpecialSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(text);
    const hasUpperCase = /[A-Z]/.test(text);

    let error = '';

    if (text.length < minLength) {
      error = `Password must be at least ${minLength} characters`;
      seterroroccured(false)
    } else if (!hasNumber) {
      error = 'Password must contain at least one number';
      seterroroccured(false)
    } else if (!hasSpecialSymbol) {
      error = 'Password must contain at least one special symbol';
      seterroroccured(false)
    } else if (!hasUpperCase) {
      error = 'Password must contain at least one uppercase letter';
      seterroroccured(false)
    }

    setPasswordError(error);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setConfirmPasswordError(text === password ? '' : 'Passwords do not match');
    seterroroccured(text === password)
  };

  const handleFullNameChange = (text) => {
    setFullName(text);
    setFullNameError(text.trim() !== '' ? '' : 'Full name is required');
    seterroroccured(text.trim() !== '')
  };

  const handleSubmit = () => {
    if(erroroccured){
      alert('Form Submitted sucessfully')
    }
    else{
      alert('Warning... Please validate the form')
    }
   
  };

  return (
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)}]}>  
    <ScrollView> 
    <Buttonx navigation={navigation}/>
      <View style={[{height:heightValue(1.2)},styles.allCenter]}>
            <View style={[styles.bggreenish,{height:heightValue(50),width:widthValue(2.2)},radius(30,30,0,0)]}></View>
            <View style={[styles.bggreen,{height:heightValue(50),width:widthValue(1.7)},radius(30,30,0,0)]}></View>
            <View style={[styles.bggreyish,{width:widthValue(1.3)},radius(30),padding(25)]}>
                <View style={[styles.row,marginPosition(0,0,8)]}>
                    <Text style={[fontSize(20),styles.white]}>Create</Text>
                    <Text style={[fontSize(20),styles.green,marginPosition(0,0,0,5)]}>Account</Text>

                </View>
              
    <View>
    <View style={[styles.allCenter]}>
    <SignupInputbox
        label="CONSUMER ID"
        value={consumer}
        onFocus={()=>setconsumer(!consumer)} 
        onBlur={()=>setconsumer(!consumer)} 
        focuss={consumer}
        height={9.8}
        star={false}
        showeye={false}
      />
      <SignupInputbox
      label="Mobile Number"
      value={number}
      onFocus={()=>setnumber(!number)} 
      onBlur={()=>setnumber(!number)} 
      focuss={number}
      height={9.8}
      star={false}
      showeye={false}
    />
      <SignupInputbox
        label="Email"
        value={email}
        onChangeText={handleEmailChange}
        error={emailError}
        onFocus={()=>setfocusEmail(!focusemail)} 
        onBlur={()=>setfocusEmail(!focusemail)} 
        focuss={focusemail}
        height={9.8}
        star={true}
        showeye={false}
      />

      <SignupInputbox
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
        error={passwordError}
        onFocus={()=>setfocuspassword(!focuspassword)} 
        onBlur={()=>setfocuspassword(!focuspassword)} 
        focuss={focuspassword}
        height={9.3}
        star={true}
        showeye={true}
      />

      <SignupInputbox
        label="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        error={confirmPasswordError}
        onFocus={()=>setfocuscpassword(!focuscpassword)} 
        onBlur={()=>setfocuscpassword(!focuscpassword)} 
        focuss={focuscpassword}
        height={9.8}
        star={true}
        showeye={true}
      />

      <SignupInputbox
        label="Full Name"
        value={fullName}
        onChangeText={handleFullNameChange}
        error={fullNameError}
        onFocus={()=>setfocusname(!focusname)} 
        onBlur={()=>setfocusname(!focusname)} 
        focuss={focusname}
        height={9.8}
        star={true}
        showeye={false}
      />

     
     </View>
  
    </View>
        
                
            </View>
      </View>
     
      <View style={[{height:heightValue(4),width:widthValue(1)},styles.centerHorizontal]}>
           <TouchableOpacity onPress={handleSubmit}>
              <View style={[styles.bggreyish,{height:heightValue(14),width:widthValue(3.1)},styles.allCenter,radius(30),marginPosition(0)]}>
              <Text style={[fontSize(20),styles.white]}>Submit</Text>
               </View>
          </TouchableOpacity>
            <View style={[styles.row,marginPosition(40)]}>
                 <Text style={[styles.white]}>Aldready have an account ?</Text>
                 <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                 <Text style={[styles.green,marginPosition(0,0,0,5)]}>Sign In</Text>
                 </TouchableOpacity>
            </View>
       </View>
       
       </ScrollView>
    </View>

  )
}

export default SignupPage
