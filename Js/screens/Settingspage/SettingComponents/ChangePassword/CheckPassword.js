import React, { useState } from 'react'
import { View ,Text, KeyboardAvoidingView} from 'react-native'
import {  flex,  styles, } from '../../../../../styles/Styles'
import PassTextInput from './PassTextInput'
// import { KeyboardAvoidingView } from 'react-native'
const CheckPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    let [password,setPassword]=useState(true)
    let [Error,setError]=useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [current,setcurrent]=useState('')
    
    const handlecurrentpassword=(pass)=>{
          setcurrent(pass)
    }
    // password validation
    let handlepassword=(pass)=>{   
    const lowercaseRegex = /[a-zA-Z]/.test(pass);
    const hasNumber = /\d/.test(pass);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    const uppercaseRegex = /[A-Z]/.test(pass);
        if (pass.length < 8) {
            setError('Enter at least 8 characters');
            setPassword(false);
          } else if (!hasNumber || !hasSpecialChar) {
            setError('Enter at least 1 number and 1 symbol');
            setPassword(false);
          } else if (!uppercaseRegex || !lowercaseRegex) {
            setError('Enter at least 1 uppercase and 1 lowercase');
            setPassword(false);
          } else {
            setError('');
            setPassword(true);
          }
          setNewPassword(pass)
        };
    // confirm password validation
    const handleConfirmPassword = (confirmPass) => {
            if (confirmPass !== newPassword) {
              setConfirmPasswordError("Passwords don't match");
            } else {
              setConfirmPasswordError('');
            }
        
            setConfirmPassword(confirmPass);
          };
  return (
    <KeyboardAvoidingView behavior='position' style={[flex(1), styles.column, styles.allCenter]}>
    <View style={[flex(1),styles.column,styles.allCenter]}>
        <PassTextInput name={'CURRENT PASSWORD'} handlepass={handlecurrentpassword}/>
        <PassTextInput name={'NEW PASSWORD'} handlepass={handlepassword}/>
        <PassTextInput name={'CONFIRM PASSWORD'} handlepass={handleConfirmPassword}/>
        <Text style={[styles.red]}>{Error}</Text>
        <Text style={[styles.red]}>{confirmPasswordError}</Text>
    </View>
    </KeyboardAvoidingView>
  )
}

export default CheckPassword
