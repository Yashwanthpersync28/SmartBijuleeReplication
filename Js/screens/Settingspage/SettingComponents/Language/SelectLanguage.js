import React, { useState } from 'react'
import { View,Text, TouchableOpacity, SafeAreaView } from 'react-native'
import BackButton from '../CommonComp/BackButton'
import SettingsHeader from '../CommonComp/SettingsHeader'
import { heightValue,widthValue,styles, radius, marginPosition, fontSize ,setdisplaytofalse} from '../../../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux'

const SelectLanguage = () => {
  const [language,setlanguage]=useState(true);
  const[hindi,sethindi]=useState(false)
  const darkMode = useSelector((state)=>state.system.darkMode)


  let handlehindi=()=>{
    setlanguage(false);
    sethindi(!hindi)
  }
  let handleenglish=()=>{
    setlanguage(!language);
    sethindi(false)
  }
  
  return (
    <SafeAreaView>
    <View style={[darkMode?styles.bglightWhite:styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
       <View style={[{width:widthValue(1.1)}]}>
        <BackButton/>
        <SettingsHeader name={'Change'} heading={'Language'} details={'Select between your regional Assamese and English to view the App'}/>
        <View style={[{height:heightValue(1.5)},styles.allCenter,styles.column]}>
          <TouchableOpacity onPress={handleenglish}>
            <View style={[radius(30),{height:heightValue(8),width:widthValue(2)},styles.bgdarkgreen,styles.allCenter,marginPosition(0,0,20)]}>
                <Text style={[styles.white,fontSize(16)]}>Select Language</Text>
                <Text style={[styles.white,fontSize(16)]}>English</Text>
                <View style={[styles.flexEnd,{height:20,width:20},radius(30),styles.bgWhite,styles.allCenter,marginPosition(3),setdisplaytofalse(language)]}>
                     {language ?  <FontAwesome5Icon name='check' style={[styles.green]}/>:null}
                 </View>

            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlehindi}>
            <View style={[radius(30),{height:heightValue(8),width:widthValue(2)},styles.bgWhite,styles.allCenter,marginPosition(0,0,20)]}>
                <Text style={[styles.green,fontSize(16)]}>Select Language</Text>
                <Text style={[styles.green,fontSize(16)]}>हिंदी</Text>
                <View style={[styles.flexEnd,{height:20,width:20},radius(30),styles.bggreen,styles.allCenter,marginPosition(3),setdisplaytofalse(hindi)]}>
                     {hindi ?  <FontAwesome5Icon name='check' style={[styles.white]}/>:null}
                 </View>

            </View>
            </TouchableOpacity>
            
        </View>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default SelectLanguage
