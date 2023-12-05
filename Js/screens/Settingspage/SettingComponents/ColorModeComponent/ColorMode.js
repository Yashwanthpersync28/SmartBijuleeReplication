import React from 'react'
import {View,Text} from 'react-native'
import BackButton from '../CommonComp/BackButton'
import SettingsHeader from '../CommonComp/SettingsHeader'
import { heightValue, styles, widthValue } from '../../../../../styles/Styles'

const ColorMode = () => {
  return (
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
       <View style={[{width:widthValue(1.1)}]}>
         
        <BackButton/>
        <SettingsHeader/>
        </View>
    </View>
  )
}

export default ColorMode
