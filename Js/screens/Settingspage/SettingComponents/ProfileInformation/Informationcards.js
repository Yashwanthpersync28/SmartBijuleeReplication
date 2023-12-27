import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { position, flex, widthValue, heightValue, styles, marginPosition, fontSize, radius } from '../../../../../styles/Styles';
import { useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Informationcards = ({ height, logo , name , loginId , showCamera}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [show,setshow]=useState(false)
  const darkMode = useSelector((state)=>state.system.darkMode)
  
///alert box with image select functionality
const handlealert = () => {
    Alert.alert('Select Image', 'Choose an Option to update image.', [
      { text: 'CANCEL' },
      { text: 'SELECT FROM GALLERY', onPress: ()=>{
  
        let options={
          storageOptions:{
            path:'image',
          },
        };
        launchImageLibrary(options,response => {
          setSelectedImage(response.assets[0].uri);
          console.log(response.assets[0].uri);
          setshow(true)
        })
      } },
      { text: 'TAKE PHOTO', onPress: ()=>{
  
        let options={
          storageOptions:{
            path:'image',
          },
        };
        launchCamera(options,response => {
          setSelectedImage(response.assets[0].uri);
          console.log(response.assets[0].uri);
          setshow(true)
        })
      } }
    ]);
  };

  return (
    <View style={[flex(1), { width: widthValue(1.1) }, styles.positionRelative, marginPosition(35)]}>
      <View style={[styles.allCenter, { height: heightValue(height) },darkMode?styles.bgWhite:styles.bgdashblue, marginPosition(0, 0, 10), radius(20)]}>
      {showCamera ? 
      <View  style={[styles.bggreenish,{width:widthValue(12),height:widthValue(12)},radius(widthValue(4.5)),styles.allCenter,styles.positionAbsolute,{top:-40,zIndex:99,left:widthValue(1.9)}]}>
       {/* <View  style={[styles.bggreenish,{width:widthValue(9),height:widthValue(9)},radius(widthValue(4.5)),styles.allCenter,styles.positionAbsolute,{top:-50,zIndex:99,left:widthValue(2)}]}> */}
      
         <Feather  name='camera' style={[fontSize(20), marginPosition(0)]} onPress={handlealert}/> 
        {/* <TouchableWithoutFeedback ><Feather name='camera-off' style={[fontSize(45),styles.fontwhite]} /></TouchableWithoutFeedback> */}
      {/* </View > */}
      </View>: null}



        <TouchableWithoutFeedback style={[styles.allCenter, marginPosition(0, 0, 20)]}>
          {show ? (
            <Image source={{ uri: selectedImage}} style={[position(-100), { height: logo, width: logo }, styles.positionAbsolute , radius(70)]} />
          ) : (
            <Image source={require('../../../Assetslottie/Images/LoginLogo2.png')} style={[position(-100), { height: logo, width: logo }, styles.positionAbsolute]} />
          )}
        </TouchableWithoutFeedback>
        <Text style={[darkMode?styles.black:styles.white, fontSize(19), marginPosition(10)]}>{name}</Text>
        <View style={[styles.row]}>
          <Text style={[styles.green, fontSize(13)]}>ConsumerID :</Text>
          <Text style={[styles.green, fontSize(13), marginPosition(0, 0, 0, 5)]}>{loginId}</Text>
        </View>
        <View style={[styles.red, { width: 80 }]}></View>
      </View>
    </View>
    // npx code-push release-react Smart-Bijulee-Replication-Staging android -d Staging
  );
};

export default Informationcards;
