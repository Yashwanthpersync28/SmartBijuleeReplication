import React from 'react'
import { styles,flex,heightValue,widthValue,radius,marginPosition,heightwidth } from '../../../../styles/Styles'
import { View,TouchableOpacity,Image } from 'react-native'
const Buttonx = ({navigation}) => {
    let handlelogin=()=>{
        navigation.navigate('login')
      }
      
  return (
    
    <View style={[flex(2),styles.allCenter]}>
          <View style={[heightwidth(60,60),styles.bggreen,radius(100),styles.allCenter]}>
            <TouchableOpacity onPress={handlelogin}>
             <Image style={[heightwidth(40,40),marginPosition(0)]} src="https://img.icons8.com/metro/26/FFFFFF/multiply.png" alt="multiply"/>
             </TouchableOpacity>
          </View>
       </View>
  )
}

export default Buttonx
