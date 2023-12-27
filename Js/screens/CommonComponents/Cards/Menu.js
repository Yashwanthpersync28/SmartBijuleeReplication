import React from 'react'
import { View,TouchableOpacity } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { heightValue,widthValue,styles,fontSize } from '../../../../styles/Styles'
import { useSelector } from 'react-redux'
const Menu = ({navigation}) => {
  const darkMode = useSelector((state)=>state.system.darkMode)
  return (
    <View style={[{ height: heightValue(15), width: widthValue(1) }, styles.centerVertical]}>
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <FontAwesome5Icon name='bars' style={[fontSize(24), { marginLeft: widthValue(13) }, darkMode?styles.black:styles.white]} />
          </TouchableOpacity>
        </View>
  )
}

export default Menu
