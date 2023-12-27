import React, { useState , useEffect } from 'react'
import { TouchableOpacity, View ,Text,SafeAreaView} from 'react-native'
import { flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../../../styles/Styles'
import BackButton from '../CommonComp/BackButton'
import Informationcards from '../ProfileInformation/Informationcards'
import SettingsHeader from '../CommonComp/SettingsHeader'
import CheckPassword from './CheckPassword'
import { useDispatch, useSelector } from 'react-redux'
import { profileApi } from '../../../../api/userApi'
import { ScrollView } from 'react-native-gesture-handler'

const Changepass = () => {
  const dispatch=useDispatch()
  const globalVariableProfile = useSelector(state => state);
  console.log('globalVariableProfile', globalVariableProfile);
  const userSelector = useSelector(state => state.auth.userVerify);
  const [loginId,setLoginId] = useState('');
  const LoginId = globalVariableProfile.auth.user.data.CANumber;
  const [name,setname]=useState('')
  const darkMode = useSelector((state)=>state.system.darkMode)

  ///enrgy tips Api
  const Profilefunc = async ()=>{
      try{
          
      const ProfileResp =  await dispatch(profileApi(
          {
              "loginID":LoginId,
            }
      ))
      console.log('profileresp',ProfileResp)
       setname(ProfileResp.payload.data.fullName)
       setLoginId(ProfileResp.payload.data.loginID)
          }catch(error){
              console.error('EnergyTipsFetch',error)
          }
  }
  useEffect(()=>{
    Profilefunc()
  },[])
  return (
    <SafeAreaView>
       <ScrollView showsVerticalScrollIndicator={false}>
   <View style={[darkMode?styles.bglightWhite:styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
   {/* <ScrollView showsVerticalScrollIndicator={false}> */}
    <View style={[{width:widthValue(1.1)},flex(1)]}>
   
          <View style={[{height:heightValue(2)}]}>         
                   <BackButton/>
                  <Informationcards height={5.2} logo={100} name={name} loginId={loginId} showCamera={false}/>
                  <SettingsHeader name={'Reset'} heading={'Password'} details={'Please change your password every months for your account safety and security'} />
         </View>
         
         <View style={[{height:heightValue(3)},padding(20),marginPosition(0)]}>
        

         
             <CheckPassword/>
             
         </View>
         <View style={[{height:heightValue(10)},styles.allCenter]}>
            <TouchableOpacity style={[{height:40,width:120},styles.bggreyish,styles.allCenter,radius(30)]}>
                <Text style={[styles.white,fontSize(17)]}>Submit</Text>
            </TouchableOpacity>
         </View> 
       
     </View> 
    
   </View>
   </ScrollView> 
   </SafeAreaView>
  )
}

export default Changepass
