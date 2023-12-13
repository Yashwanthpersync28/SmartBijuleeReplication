import React from 'react'
import { View,Text,Image, TouchableOpacity, Alert } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { position,flex,widthValue,heightValue,styles,marginPosition,fontSize,radius } from '../../../../../styles/Styles';
import { launchCamera,launchImageLibrary } from 'react-native-image-picker';
const Informationcards = ({height}) => {

  const choosePhoto =  async ()=>{
    const galleryResult = await launchImageLibrary({mediaType:'photo',quality:1});
    console.log(galleryResult)
  }
  
  const takePhoto = async ()=>{
    const cameraResult = await launchCamera({mediaType:'photo',quality:1});
    console.log(cameraResult)
  }
  const ImageSelect = ()=>{
    Alert.alert('Select Image','Choose an Option to update image.',[
      {text:'CANCEL'},
      {text:'SELECT FROM GALEERY',onPress:choosePhoto},
      {text:'TAKE PHOTO',onPress:takePhoto}
    ])
  }
  return (
    <View style={[flex(1),{width:widthValue(1.1)},styles.positionRelative,marginPosition(30)]}>
   {/* <BackButton/> */}
    <View style={[styles.allCenter,{height:heightValue(height)},styles.bgdashblue,marginPosition(0,0,10),radius(20)]}>
            <TouchableOpacity onPress={ImageSelect} style={[styles.allCenter]}>
            <Image  source={require('../../../Assetslottie/Images/LoginLogo2.png')} style={[position(-100),{height:120,width:120},styles.positionAbsolute]}/>
            </TouchableOpacity>
          <Text style={[styles.white,fontSize(19),marginPosition(20)]}>Esyatest3</Text>
         <View style={[styles.row]}>
            <Text style={[styles.green,fontSize(13)]}>ConsumerID :</Text>
            <Text style={[styles.green,fontSize(13),marginPosition(0,0,0,5)]}>C0000003</Text>
        </View>
        <View style={[styles.red,{width:80}]}>

        </View>
    </View>

</View>
  )
}

export default Informationcards
