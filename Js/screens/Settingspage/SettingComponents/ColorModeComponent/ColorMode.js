import React from 'react'
import {View,Text,SafeAreaView} from 'react-native'
import BackButton from '../CommonComp/BackButton'
import SettingsHeader from '../CommonComp/SettingsHeader'
import { fontSize, heightValue, radius, styles, widthValue } from '../../../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

const ColorMode = () => {
  return (
    <SafeAreaView>
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
       <View style={[{width:widthValue(1.1)}]}>
         
             <BackButton/>
             <SettingsHeader name={'Change'} heading={'Color Mode'} details={'Change Color Mode between light and dark as per your interest'}/>
            <View style={[styles.allCenter,styles.column]}>
              <Text style={[styles.gray,fontSize(22)]}>Dark Mode</Text>
              
              <View style={[{height:heightValue(2),width:widthValue(1.2)},styles.allCenter]}>  
              <View style={[{height:120,width:120,backgroundColor:"#a88aab"},radius(60),styles.allCenter]}>
                  <View style={[{height:100,width:100,backgroundColor:"#b291b5"},radius(50),styles.allCenter]}>
                      <View style={[{height:80,width:80,backgroundColor:"#ecc7f0"},radius(50),styles.allCenter]}>
                        <FontAwesome5Icon name='power-off' style={[fontSize(30)]}/>
                      </View>
                  </View>
               </View>
              </View>
              <View style={[styles.column,styles.allCenter]}>
                <Text style={[styles.gray,fontSize(22)]}>Click the button to enable</Text>
                <Text style={[styles.green,fontSize(22)]}>Light Mode</Text>
              </View>
            </View>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default ColorMode
