import React from 'react'
import { flex,heightValue,borderColor,borderWidth,fontSize,marginPosition ,styles} from '../../../../../../styles/Styles'
import {View,Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Commonheading = ({name}) => {
  return (

        <View style={[{height:heightValue(13.5)},styles.row,styles.allCenter,borderWidth(0,0,0,1),borderColor('green')]}>
           <FontAwesome5Icon name='smile-beam' style={[fontSize(50),styles.green,marginPosition(0,0,5)]}/>
                <Text style={[styles.white,fontSize(18),marginPosition(0,0,0,5)]}>What Made You</Text>
                 <Text style={[styles.green,fontSize(18),marginPosition(0,0,0,5)]}>{name}</Text>
            </View>
      
  )
}

export default Commonheading
