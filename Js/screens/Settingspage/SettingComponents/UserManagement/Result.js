import React from 'react'
import { borderColor, styles ,heightValue,widthValue,fontSize,marginPosition,padding,borderWidth,radius, flex} from '../../../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { View,Text, TextInput, TouchableOpacity } from 'react-native'
const Result = () => {
  return (
    <View style={[{height:heightValue(1.8),width:widthValue(1.1)}]}>
    <View style={[{width:widthValue(1.1),height:heightValue(2.3)},marginPosition(20),padding(30),styles.bgdashblue,radius(20)]}>
    <View style={[styles.row,borderWidth(0,0,0,0.6),borderColor('green')]}>
     <Text style={[styles.white,fontSize(17)]}>Send the</Text>
     <Text style={[styles.green,marginPosition(0,0,10,5),fontSize(17)]}>Invitation Link</Text>
    </View>
    <View style={[styles.column,marginPosition(30),{width:widthValue(1.4),height:heightValue(4)},styles.bgWhite,padding(20)]}>
        <TextInput placeholder='Hey, the app is fabulous. Especially the design' style={[flex(1),{textAlignVertical:'top',paddingHorizontal:10}]}/>  
    </View>
    </View>
    
</View>

  )
}

export default Result
