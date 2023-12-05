import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { flex, fontSize, heightValue, marginPosition, position, radius, styles, widthValue } from '../../../styles/Styles'
import Header from '../CommonComponents/Cards/Header'
import Menu from '../CommonComponents/Cards/Menu'
const Notifications = ({navigation}) => {
    let heading="Be";
    let continueprop="Notified";
    let details="Engage with the Utility via notifictions";
  return (
   <View style={[flex(1),styles.bglightblack]}>
      <Menu navigation={navigation}/>
         <Header heading={heading} continueprop={continueprop} details={details} columnwise={false}/>
         <View style={[flex(8),{width:widthValue(1)},styles.column,styles.allCenter,styles.positionRelative,marginPosition('5%')]}>
            <View style={[{height:heightValue(10),width:widthValue(1.6),transform: [{ rotate: '170deg' }]},styles.bgdarkgreen,radius(30),styles.positionAbsolute,position(13,0,0,50)]}></View>
            <View style={[{height:heightValue(10),width:widthValue(1.3),transform: [{ rotate: '175deg' }]},styles.bglightgreen,radius(30),styles.positionAbsolute,position(24,0,0,34)]}></View>
             <View style={[{height:heightValue(1.6),width:widthValue(1.1)},styles.bgdashblue,radius(30),styles.positionAbsolute,position(35)]}>
                <View style={[flex(1),styles.centerVertical]}>
                   <Text style={[styles.green,fontSize(23),marginPosition('10%',0,0,'10%')]}>Notification</Text>
                </View>
                <View style={[flex(6),styles.allCenter]}>
                   <Text style={[styles.green,fontSize(19)]}>You have no new Notifications </Text>
                   <Text style={[styles.green,fontSize(19)]}>available at this moment.Please check</Text>
                   <Text style={[styles.green,fontSize(19)]}>again later</Text>
                </View>
            </View>
         </View>
         <View style={[flex(1),{width:widthValue(1.1),justifyContent:'center',alignItems:'flex-end'},marginPosition('0%',0,0,'5%')]}>
         <TouchableOpacity style={[styles.bgdashblue,{height:heightValue(17),width:widthValue(4)},radius(30),styles.allCenter]}>
            <Text style={[styles.white]}>Clear</Text>
         </TouchableOpacity>
         </View>
   </View>

  )
}

export default Notifications
