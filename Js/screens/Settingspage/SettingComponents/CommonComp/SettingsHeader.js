import React from 'react'
import { View ,Text} from 'react-native'
import { flex, fontSize, marginPosition, styles } from '../../../../../styles/Styles'

const SettingsHeader = () => {
  return (
    <View>
        <View style={[styles.row]}>
            <Text style={[styles.white,fontSize(18)]}>Manage</Text>
            <Text style={[styles.green,fontSize(18),marginPosition(0,0,0,5)]}>Multiple Accounts</Text>
        </View>
        <View>
            <Text style={[styles.white,fontSize(14),marginPosition(10)]}>Add here your different accounts linked with your mobile Number</Text>
        </View>
    </View>
  )
}

export default SettingsHeader
