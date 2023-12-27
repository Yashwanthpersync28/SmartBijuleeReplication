import React from 'react'
import { View ,Text} from 'react-native'
import { flex, fontSize, heightValue, marginPosition, styles } from '../../../../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
const Thankyoupage = () => {
  return (
      <View style={[flex(1),styles.allCenter,{height:heightValue(3.7)}]}>
           <FontAwesome5Icon name='smile-beam' style={[fontSize(70),styles.green,marginPosition(0,0,30)]} />
           <Text style={[styles.white,marginPosition(10,0,5),fontSize(18)]}>Thank you for sharing</Text>
           <View style={[styles.row,marginPosition(0,0,10),]}>
           <Text style={[styles.white,fontSize(18)]}>Your</Text>
           <Text style={[styles.green,fontSize(18)]}> Experience</Text>
           </View>
           <Text style={[styles.white,fontSize(13),marginPosition(10)]}>Visit Esyasoft.co for more information</Text>
      </View>
  )
}

export default Thankyoupage
