import React from 'react'
import { View ,Text} from 'react-native'
import { flex, fontSize, heightValue, lineHeight, marginPosition, styles } from '../../../../../styles/Styles'
import { useSelector } from 'react-redux'

const SettingsHeader = ({name,heading,details}) => {
  const darkMode = useSelector((state)=>state.system.darkMode)
  
  return (
    <View style={[{height:heightValue(8)}]}>
        <View style={[styles.row]}>
            <Text style={[darkMode?styles.black:styles.white,fontSize(18)]}>{name}</Text>
            <Text style={[styles.green,fontSize(18),marginPosition(0,0,0,5)]}>{heading}</Text>
        </View>
        <View>
            <Text style={[darkMode?styles.black:styles.white,fontSize(15),marginPosition(10),lineHeight(20)]}>{details}</Text>
        </View>
    </View>
  )
}

export default SettingsHeader
