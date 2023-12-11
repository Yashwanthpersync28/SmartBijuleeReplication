import React from 'react'
import { View ,Text} from 'react-native'
import { flex, fontSize, heightValue, lineHeight, marginPosition, styles } from '../../../../../styles/Styles'

const SettingsHeader = ({name,heading,details}) => {
  return (
    <View style={[{height:heightValue(8)}]}>
        <View style={[styles.row]}>
            <Text style={[styles.white,fontSize(20)]}>{name}</Text>
            <Text style={[styles.green,fontSize(20),marginPosition(0,0,0,5)]}>{heading}</Text>
        </View>
        <View>
            <Text style={[styles.white,fontSize(15),marginPosition(10),lineHeight(20)]}>{details}</Text>
        </View>
    </View>
  )
}

export default SettingsHeader
