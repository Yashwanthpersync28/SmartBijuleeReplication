import React,{useState,useEffect} from 'react'
import {View,Text,Image, SafeAreaView, ScrollView} from 'react-native'
import { borderWidth, flex, fontSize, heightValue, marginPosition, padding, position, radius, styles, widthValue } from '../../../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Informationcards from './Informationcards'
import Cardstwo from './Cardstwo'
import BackButton from '../CommonComp/BackButton'
import { useDispatch, useSelector } from 'react-redux'
import { profileApi } from '../../../../api/userApi'

const Profile = () => {

  const dispatch=useDispatch()
    const globalVariableProfile = useSelector(state => state);
    console.log('globalVariableProfile', globalVariableProfile);
    const userSelector = useSelector(state => state.auth.userVerify);
    const [loginId,setLoginId] = useState('');
    const LoginId = globalVariableProfile.auth.user.data.CANumber;
    const [name,setname]=useState('')
    const [sanctionedload,setsanctioned]=useState('')
    const [service,setservice]=useState('');
    const [meterid,setmeterid]=useState('');
    const [number,setnumber]=useState(0)
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
         setsanctioned(ProfileResp.payload.data.sanctionedLoad);
         setservice(ProfileResp.payload.data.serviceDate);
         setmeterid(ProfileResp.payload.data.msn);
         setnumber(ProfileResp.payload.data.contactNumber);
            }catch(error){
                console.error('EnergyTipsFetch',error)
            }
    }
    useEffect(()=>{
      Profilefunc()
    },[])


  return (
    <SafeAreaView>
    <View style={[darkMode?styles.bglightWhite:styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
      <View style={[styles.selfStart,marginPosition(0,0,0,20),{height:heightValue(20)}]}>
      <BackButton/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={[marginPosition(16)]}>      
         <Informationcards height={4.1} logo={130} name={name} loginId={loginId} showCamera={true}/>
         </View>

       <View style={[darkMode?styles.bgWhite:styles.bgdashblue,{width:widthValue(1.1)},radius(20),marginPosition(20,0,30),padding(20)]}>
            <Cardstwo name={'Sanctioned Load'} number={sanctionedload}/>
            <Cardstwo name={'Service Date'} number={service}/>
            <Cardstwo name={'Meter Serial Number'} number={meterid}/>
            <Cardstwo name={'Contact Number'} number={number}/>
            <Cardstwo name={'Email Id'} number={''}/>

       </View>
       </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default Profile
