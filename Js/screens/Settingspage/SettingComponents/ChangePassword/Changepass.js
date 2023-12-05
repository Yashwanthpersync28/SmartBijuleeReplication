import React, { useState } from 'react'
import { TouchableOpacity, View ,Text} from 'react-native'
import { flex, fontSize, heightValue, radius, styles, widthValue } from '../../../../../styles/Styles'
import BackButton from '../CommonComp/BackButton'
import Cradstwo from '../ProfileInformation/Cardstwo'
import Informationcards from '../ProfileInformation/Informationcards'
import SettingsHeader from '../CommonComp/SettingsHeader'
import Passwordinputbox from '../../../Loginpage/CommonCards/Passwordinputbox'

const Changepass = () => {
    
  return (
   <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
    <View style={[{width:widthValue(1.1)},flex(1)]}>
          <View style={[{height:heightValue(2)}]}>         
                   <BackButton/>
                  <Informationcards height={4}/>
                  <SettingsHeader />
         </View>
         <View style={[{height:heightValue(2.8)}]}>
             
         </View>
         <View style={[{height:heightValue(8)},styles.allCenter]}>
            <TouchableOpacity style={[{height:40,width:100},styles.bgdashblue,styles.allCenter,radius(30)]}>
                <Text style={[styles.white,fontSize(15)]}>Submit</Text>
            </TouchableOpacity>
         </View> 
     </View> 
     
   </View>
  )
}

export default Changepass
