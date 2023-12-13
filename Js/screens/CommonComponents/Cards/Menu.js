import React from 'react'
import { View,TouchableOpacity } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { heightValue,widthValue,styles,fontSize } from '../../../../styles/Styles'
const Menu = ({navigation}) => {
  return (
    <View style={[{ height: heightValue(15), width: widthValue(1) }, styles.centerVertical]}>
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <FontAwesome5Icon name='bars' style={[fontSize(24), { marginLeft: widthValue(13) }, styles.white]} />
          </TouchableOpacity>
        </View>
  )
}

export default Menu
