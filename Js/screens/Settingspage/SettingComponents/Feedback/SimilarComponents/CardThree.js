import React, { useState } from 'react'
import { flex, styles,heightValue, padding, marginPosition, radius, fontSize, widthValue } from '../../../../../../styles/Styles'
import { View,Text, TextInput } from 'react-native'
import Commonheading from './Commonheading'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
const CardThree = () => {
    let [count,setcount]=useState(0)
  return (
    <View style={[flex(1),styles.centerHorizontal]}>
           <Commonheading/>
           <View style={[{height:heightValue(5),width:widthValue(1.4)},styles.bgWhite,marginPosition(5),radius(15)]}>
            <TextInput placeholder='Write Your feedback in less than 200 words' maxLength={200} style={[{height:120,width:280,textAlignVertical:'top'},padding(20),]} multiline={true} onChangeText={(val)=>setcount(val.length)}></TextInput>
           </View>
           {/* <FontAwesome5Icon name='comment-alt' style={[fontSize(20),styles.white,{transform:[{rotate:'75deg'}]}]}/> */}
                <View style={[styles.centerHorizontal,marginPosition(5,0,0,180)]}>
                <Text style={[styles.white]}>{count}/200</Text>
               </View>
    </View>
  )
}

export default CardThree
