import React from 'react'
import { View,Text } from 'react-native'
import BackButton from '../CommonComp/BackButton'
import SettingsHeader from '../CommonComp/SettingsHeader'
import { heightValue,widthValue,styles, radius, marginPosition, fontSize } from '../../../../../styles/Styles'

const SelectLanguage = () => {
  return (
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
       <View style={[{width:widthValue(1.1)}]}>
        <BackButton/>
        <SettingsHeader/>
        <View style={[{height:heightValue(1.5)},styles.allCenter,styles.column]}>
            <View style={[radius(30),{height:heightValue(8),width:widthValue(2)},styles.bgdarkgreen,styles.allCenter,marginPosition(0,0,20)]}>
                <Text style={[styles.white,fontSize(18)]}>Select Language</Text>
                <Text style={[styles.white,fontSize(18)]}>English</Text>

            </View>
            <View style={[radius(30),{height:heightValue(8),width:widthValue(2)},styles.bgWhite,styles.allCenter]}>
                <Text style={[styles.green,fontSize(18)]}>Select Language</Text>
                <Text style={[styles.green,fontSize(18)]}>English</Text>

            </View>
            
        </View>
        </View>
    </View>
  )
}

export default SelectLanguage
