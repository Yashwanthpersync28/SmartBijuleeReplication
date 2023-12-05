import React from 'react'
import { StyleSheet, View } from 'react-native'
import { setmargin, setradius, styles } from '../../../styles/Styles'
import Animated,{interpolate, useAnimatedStyle} from 'react-native-reanimated'
import { useDrawerProgress } from '@react-navigation/drawer'
const DrawerScreenWrapper = ({children,open}) => {
    const progress=useDrawerProgress();
    const animatedstyle=useAnimatedStyle(()=>({
        transform:[
            {scale: interpolate(progress.value,[0,1],[1,0.8],'clamp')}
        ],
      borderRadius:5,
        
        width:'200%',
        overflow:'hidden',
        // marginLeft:'35%'
       
        
    }))
    // setmargin(open)
  return (
    <Animated.View style={[styless.container,animatedstyle]}>{children}</Animated.View>
  )
}

export default DrawerScreenWrapper

const styless=StyleSheet.create({
    container:{
        flex:1,
    }
})