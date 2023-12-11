import React from 'react'
import { View,Text } from 'react-native'
import { heightValue, styles, widthValue,marginPosition, padding, fontSize, borderColor, borderWidth, flex, radius } from '../../../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
const Analysis = () => {
    const data=[{heading:'Name',value:"Yashwanth"},{heading:'Contact Number',value:"7904712345"},{heading:'Relation',value:"Family"}]
  return (
    <View style={[{height:heightValue(1.8),width:widthValue(1.1)}]}>
       <View style={[{width:widthValue(1.1),height:heightValue(2.6)},marginPosition(20),padding(30),styles.bgdashblue,radius(20)]}>
       <View style={[styles.row]}>
        <Text style={[styles.white,fontSize(17)]}>Confirm the</Text>
        <Text style={[styles.green,marginPosition(0,0,0,5),fontSize(17)]}>Details</Text>
       </View>
       <View style={[styles.column,marginPosition(30)]}>
           
            {data.map((list,index)=>{
                return(
                    <View key={index} style={[styles.column,borderColor('green'),borderWidth(0,0,0,1),marginPosition(0,0,10)]}>
                       <Text style={[styles.white,marginPosition(0,0,5)]}>{list.heading}</Text>
                        <View style={[styles.row]}>
                            <Text style={[styles.green,marginPosition(0,0,5),flex(1)]}>{list.value}</Text>
                             <FontAwesome5Icon name='check-circle' style={[styles.green,fontSize(17)]}/>
                       </View>
                    </View>
                )
            })}
           
           
       </View>
       </View>
      
   </View>
  )
}

export default Analysis
