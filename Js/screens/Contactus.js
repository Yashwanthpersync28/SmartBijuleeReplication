import React from 'react'
import { View,Text } from 'react-native'
import { marginPosition } from '../../styles/Styles'
import DrawerScreenWrapper from './Drawer/DrawerScreenWrapper'

const Contactus = () => {
  return (
    <DrawerScreenWrapper>
    <View style={[marginPosition('5%')]}>
        <Text>welcome to contact page</Text>
    </View>
    </DrawerScreenWrapper>
  )
}

export default Contactus
