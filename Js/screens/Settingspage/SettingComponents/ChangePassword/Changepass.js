import React, { useState } from 'react'
import { TouchableOpacity, View ,Text,SafeAreaView} from 'react-native'
import { flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../../../styles/Styles'
import BackButton from '../CommonComp/BackButton'
import Informationcards from '../ProfileInformation/Informationcards'
import SettingsHeader from '../CommonComp/SettingsHeader'
import CheckPassword from './CheckPassword'

const Changepass = () => {
    
  return (
    <SafeAreaView>
   <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
    <View style={[{width:widthValue(1.1)},flex(1)]}>
          <View style={[{height:heightValue(2)}]}>         
                   <BackButton/>
                  <Informationcards height={5} logo={120}/>
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
   </SafeAreaView>
  )
}

export default Changepass
