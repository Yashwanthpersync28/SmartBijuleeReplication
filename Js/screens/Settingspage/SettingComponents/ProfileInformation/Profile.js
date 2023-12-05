import React from 'react'
import {View,Text,Image} from 'react-native'
import { borderWidth, flex, fontSize, heightValue, marginPosition, padding, position, radius, styles, widthValue } from '../../../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Informationcards from './Informationcards'
import Cardstwo from './Cardstwo'

const Profile = () => {
  return (
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
        
      {/* <View style={[flex(1),{width:widthValue(1.1)},styles.positionRelative]}>
           <View style={[styles.row,marginPosition(10,0,5),flex(1)]}>
             <FontAwesome5Icon name='chevron-left' style={[fontSize(20),styles.white]}/>
              <Text style={[styles.white,fontSize(17),marginPosition(0,0,0,10)]}>Back</Text>
           </View>
           <View style={[styles.allCenter,flex(5),styles.bgdashblue,marginPosition(0,0,10),radius(20)]}>
                   <Image source={require('../../../Assetslottie/Images/LoginLogo2.png')} style={[position(-50),{height:100,width:100},styles.positionAbsolute]}/>
                 
                 <Text style={[styles.white,fontSize(18)]}>Esyatest3</Text>
                <View style={[styles.row]}>
                   <Text style={[styles.green,fontSize(15)]}>ConsumerID :</Text>
                   <Text style={[styles.green,fontSize(15),marginPosition(0,0,0,5)]}>C0000003</Text>
               </View>
               <View style={[styles.red,{width:80}]}>

               </View>
           </View>

       </View> */}
       <Informationcards/>
       <View style={[styles.bgdashblue,flex(1.5),{width:widthValue(1.1)},radius(20),marginPosition(0,0,10),padding(20)]}>
            <Cardstwo/>
       </View>
    </View>
  )
}

export default Profile
