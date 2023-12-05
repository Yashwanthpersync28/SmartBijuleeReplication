// import "react-native-gesture-handler"
import React from 'react';
// import Appp from './Js/Appp';
import MainAppp from './Js/MainAppp';

// import Onboardingone from './Js/Onboardingone';
import Signup from './Js/Signup';
import Login from './Js/Login';
 import Forgotpassword from './Js/Forgotpassword';
import Otp from './Js/Otp';
import Splash from './Js/Splash';
import Appp from './Js/Appp';
import Example from './Js/Example';
import codePush from "react-native-code-push";
import LoginComponent from './Js/screens/Loginpage/LoginComponent';
import SignupPage from './Js/screens/SignUp/SignupPage';
import Profile from './Js/screens/Settingspage/SettingComponents/ProfileInformation/Profile';



function App() {
  
  return (
    // <Splash/>
  //  <Example/>
    //  <Appp/>
  // <MainAppp/>
  // <Onboardingone/>
  // <Signup/>
  // <Forgotpassword/>
  // <Login/>
  // <Otp/>
  // <Signup/>
  // <LoginComponent/>  
  // <SignupPage/>
  <Profile/>
  );
} 



export default codePush(App);
