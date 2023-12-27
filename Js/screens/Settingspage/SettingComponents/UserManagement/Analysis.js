import React from 'react'
import { View,Text } from 'react-native'
import { heightValue, styles, widthValue,marginPosition, padding, fontSize, borderColor, borderWidth, flex, radius } from '../../../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux'
const Analysis = ({name,number,dropdownval}) => {
  const darkMode = useSelector((state)=>state.system.darkMode)

    const data=[{heading:'Name',value:''},{heading:'Contact Number',value:"7904712345"},{heading:'Relation',value:"Family"}]
  return (
    <View style={[{height:heightValue(1.8),width:widthValue(1.1)}]}>
       <View style={[{width:widthValue(1.1),height:heightValue(2.6)},marginPosition(20),padding(30),darkMode?styles.bgWhite:styles.bgdashblue,,radius(20)]}>
       <View style={[styles.row]}>
        <Text style={[darkMode?styles.black:styles.white,fontSize(17)]}>Confirm the</Text>
        <Text style={[styles.green,marginPosition(0,0,0,5),fontSize(17)]}>Details</Text>
       </View>
       <View style={[styles.column,marginPosition(30)]}>
           
                  <View style={[styles.column,borderColor('green'),borderWidth(0,0,0,1),marginPosition(0,0,10)]}>
                       <Text style={[darkMode?styles.black:styles.white,marginPosition(0,0,5)]}>Name</Text>
                        <View style={[styles.row]}>
                            <Text style={[styles.green,marginPosition(0,0,5),flex(1)]}>{name}</Text>
                             <FontAwesome5Icon name='check-circle' style={[styles.green,fontSize(17)]}/>
                       </View>
                    </View>
                    <View  style={[styles.column,borderColor('green'),borderWidth(0,0,0,1),marginPosition(0,0,10)]}>
                       <Text style={[darkMode?styles.black:styles.white,marginPosition(0,0,5)]}>Contact Number</Text>
                        <View style={[styles.row]}>
                            <Text style={[styles.green,marginPosition(0,0,5),flex(1)]}>{number}</Text>
                             <FontAwesome5Icon name='check-circle' style={[styles.green,fontSize(17)]}/>
                       </View>
                    </View>
                    <View  style={[styles.column,borderColor('green'),borderWidth(0,0,0,1),marginPosition(0,0,10)]}>
                       <Text style={[darkMode?styles.black:styles.white,marginPosition(0,0,5)]}>Relation</Text>
                        <View style={[styles.row]}>
                            <Text style={[styles.green,marginPosition(0,0,5),flex(1)]}>{dropdownval}</Text>
                             <FontAwesome5Icon name='check-circle' style={[styles.green,fontSize(17)]}/>
                       </View>
                    </View>
           
           
       </View>
       </View>
      
   </View>
  )
}

export default Analysis
