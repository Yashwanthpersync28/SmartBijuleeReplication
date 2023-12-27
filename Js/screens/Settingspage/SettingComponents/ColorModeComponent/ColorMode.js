import React, { useState } from 'react'
import {View,Text,SafeAreaView, TouchableOpacity} from 'react-native'
import BackButton from '../CommonComp/BackButton'
import SettingsHeader from '../CommonComp/SettingsHeader'
import { fontSize, heightValue, radius, styles, widthValue } from '../../../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from '../../../../Redux/SystemReducer/darkModeReduder'
import { TouchableNativeFeedback } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const ColorMode = () => {
  const dispatch=useDispatch()
  const darkMode = useSelector((state)=>state.system.darkMode)
  const [mode,setmode]=useState(true)
  const handledarkMode=()=>{
   dispatch(setDarkMode(!darkMode))
   setmode(!mode)
  }
  return (
    <SafeAreaView>
    <View style={[darkMode ? styles.bglightWhite : styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
       <View style={[{width:widthValue(1.1)}]}>
         
             <BackButton/>
             <SettingsHeader name={'Change'} heading={'Color Mode'} details={'Change Color Mode between light and dark as per your interest'}/>
            <View style={[styles.allCenter,styles.column]}>
              <Text style={[styles.gray,fontSize(22)]}>{mode ? 'Dark Mode' : 'LightMode'}</Text>
              
              <View style={[{height:heightValue(2),width:widthValue(1.2)},styles.allCenter]}>
                <TouchableWithoutFeedback style={[styles.allCenter]} onPress={handledarkMode}>  
              <View style={[{height:180,width:180,backgroundColor:darkMode?"#e1f5f5":"#636161",shadowColor:'black',shadowOpacity:0.4,shadowOffset: { width: 4, height: 4 },shadowRadius:4,elevation: 8,},radius(100),styles.allCenter]}>
                  <View style={[{height:140,width:140,backgroundColor:darkMode?"#e1f5f5":"#a69d9d",shadowColor:'black',shadowOpacity:0.4,shadowOffset: { width: 4, height: 4 },elevation: 8},radius(80),styles.allCenter]}>
                      <View style={[{height:100,width:100,backgroundColor:darkMode?"#e1f5f5":"#c9b9b9",shadowColor:'black',shadowOpacity:0.4,shadowOffset: { width: 4, height: 4 },elevation: 8},radius(60),styles.allCenter]}>
                        <FontAwesome5Icon name='power-off' style={[fontSize(30),styles.white]}/>
                      </View>
                  </View>
               </View>
               </TouchableWithoutFeedback>
              </View>
              <View style={[styles.column,styles.allCenter]}>
                <Text style={[styles.gray,fontSize(22)]}>Click the button to enable</Text>
                <Text style={[styles.green,fontSize(22)]}>{mode ? 'Light Mode' : 'Dark Mode'}</Text>
              </View>
            </View>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default ColorMode
