import React, { useState } from 'react'
import Buttonx from '../Loginpage/CommonCards/Buttonx'
import {View,Text,TouchableOpacity, ScrollView,TextInput} from 'react-native'
import {heightValue, styles, widthValue ,radius,padding,marginPosition,fontSize} from '../../../styles/Styles'
import Logincards from '../Loginpage/CommonCards/Logincards'
import Inputbox from '../Loginpage/CommonCards/Inputbox';
import Passwordinputbox from '../Loginpage/CommonCards/Passwordinputbox'
import SignupCardcomponents from './Signupcomponents/SignupCardcomponents'
const SignupPage = () => {
    let [focusid,setfocusid]=useState(false);
    let [passid,setpassid]=useState(false);
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (text) => {
    setName(text);
    setError('');
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setError('');
  };

  const handleMobileChange = (text) => {
    setMobile(text);
    setError('');
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setError('');
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setError('');
  };

  const handleSubmit = () => {
    // Simple name validation
    if (name.trim() === '') {
      setError('Name cannot be empty');
      return;
    }

    // Simple email validation
    if (!email.includes('@')) {
      setError('Invalid email address');
      return;
    }

    // Simple mobile number validation
    if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
      setError('Invalid mobile number');
      return;
    }

    // Simple password length validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Simple password match validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Valid form submission logic here
    console.log('Form submitted successfully');
  };
  return (
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)}]}>  
    <ScrollView> 
    <Buttonx/>
      <View style={[{height:heightValue(1.2)},styles.allCenter]}>
            <View style={[styles.bggreenish,{height:heightValue(50),width:widthValue(2.2)},radius(30,30,0,0)]}></View>
            <View style={[styles.bggreen,{height:heightValue(50),width:widthValue(1.7)},radius(30,30,0,0)]}></View>
            <View style={[styles.bggreyish,{height:heightValue(1.4),width:widthValue(1.3)},radius(30),padding(25)]}>
                <View style={[styles.row,marginPosition(0,0,8)]}>
                    <Text style={[fontSize(20),styles.white]}>Create</Text>
                    <Text style={[fontSize(20),styles.green,marginPosition(0,0,0,5)]}>Account</Text>

                </View>
              
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        placeholder="Mobile Number"
        keyboardType="numeric"
        value={mobile}
        onChangeText={handleMobileChange}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
      />
      {error !== '' && <Text style={{ color: 'red' }}>{error}</Text>}
      <Text  onPress={handleSubmit} style={[styles.red]}>submit</Text>
    </View>
        
                
            </View>
      </View>
     
      <View style={[{height:heightValue(4),width:widthValue(1)},styles.allCenter]}>
           <TouchableOpacity>
              <View style={[styles.bggreyish,{height:heightValue(14),width:widthValue(3.1)},styles.allCenter,radius(30),marginPosition(0)]}>
              <Text style={[fontSize(20),styles.white]}>Submit</Text>
               </View>
          </TouchableOpacity>
            <View style={[styles.row,marginPosition(40)]}>
                 <Text style={[styles.white]}>Aldready have an account ?</Text>
                 <Text style={[styles.green,marginPosition(0,0,0,5)]}>Sign In</Text>
            </View>
       </View>
       
       </ScrollView>
    </View>

  )
}

export default SignupPage
