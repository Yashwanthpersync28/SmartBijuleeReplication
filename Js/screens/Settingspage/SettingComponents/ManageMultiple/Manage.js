import React, { useState } from 'react'
import { View,Text, TouchableOpacity,SafeAreaView } from 'react-native'
import BackButton from '../CommonComp/BackButton'
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, position, radius, styles, widthValue } from '../../../../../styles/Styles'
import SettingsHeader from '../CommonComp/SettingsHeader'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import ListofMembers from '../CommonComp/ListofMembers'
import Logincards from '../../../Loginpage/CommonCards/Logincards'

const Manage = () => {
    const [showconsumerpage,setconsumerpage]=useState(false)
    const Consumernav=(a)=>{
           setconsumerpage(a)
    }
  return (
    <SafeAreaView>
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal,]}>
        <View style={[{width:widthValue(1.1),height:heightValue(12)}]} >
               <BackButton/>
              <SettingsHeader name={'Manage'} heading={'Multiple Accounts'} details={"Add here your different accounts linked with your same mobile number"}/>
        </View>
            <View style={[{width:widthValue(1.1),height:heightValue(1.4)},styles.allCenter,marginPosition(30)]}>
              {showconsumerpage ? <Logincards showconsumer={true} name={'Consumer'}  heightval={true}/> :  <ListofMembers Goto={Consumernav}/>}
              {showconsumerpage ? <>
               <View style={[styles.bggreyish,radius(30),{height:heightValue(18),width:widthValue(2.8)},styles.allCenter,marginPosition(20)]}>
                <TouchableOpacity>
                    <Text style={[styles.white]}>Generate OTP</Text>
                </TouchableOpacity>
               </View>
               </> : null}
           </View>
    </View>
    </SafeAreaView>
  )
}

export default Manage
