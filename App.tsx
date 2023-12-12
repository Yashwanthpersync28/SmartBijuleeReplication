import React from 'react';
import Appp from './Js/Appp';
import Dummy from './Js/screens/Loginpage/Dummy';
import CodePush from 'react-native-code-push';




function App() {
  
  return (
     <Appp/>
    // <Dummy/>
    // <SignupPage/>
    // <Logoutscreen/>
  )
} 



export default CodePush(App);
