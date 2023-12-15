import React from 'react'
import { View, Image ,} from 'react-native'
import { flex , borderWidth , styles , heightValue , widthValue } from '../../../../styles/Styles'

function Splash({navigation}) {
  return (
    <View style={[flex(1),styles.bglightblack,styles.allCenter]}>
        <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack,styles.allCenter,]}>
        <Image source={require('../../Assetslottie/Images/SplashLogo.png') } style={[{height:'90%',width:'90%'}]}/>
        </View>
    </View>
  )
}

export default Splash
