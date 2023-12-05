import React from 'react'
import { View,Text,Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { position,flex,widthValue,heightValue,styles,marginPosition,fontSize,radius } from '../../../../../styles/Styles';
import BackButton from '../CommonComp/BackButton';
const Informationcards = ({height}) => {
  return (
    <View style={[flex(1),{width:widthValue(1.1)},styles.positionRelative,marginPosition(30)]}>
   {/* <BackButton/> */}
    <View style={[styles.allCenter,{height:heightValue(height)},styles.bgdashblue,marginPosition(0,0,10),radius(20)]}>
            <Image source={require('../../../Assetslottie/Images/LoginLogo2.png')} style={[position(-50),{height:100,width:100},styles.positionAbsolute]}/>
          
          <Text style={[styles.white,fontSize(18)]}>Esyatest3</Text>
         <View style={[styles.row]}>
            <Text style={[styles.green,fontSize(15)]}>ConsumerID :</Text>
            <Text style={[styles.green,fontSize(15),marginPosition(0,0,0,5)]}>C0000003</Text>
        </View>
        <View style={[styles.red,{width:80}]}>

        </View>
    </View>

</View>
  )
}

export default Informationcards
