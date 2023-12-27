import React from 'react'
import { heightValue , styles ,widthValue , fontSize , position, borderColor , borderWidth ,marginPosition , radius, } from '../../../../../styles/Styles'
import { View,Text } from 'react-native'
import { useSelector } from 'react-redux'
export const ToggleBullets = ({count}) => {
  const darkMode = useSelector((state)=>state.system.darkMode)

  return (
    <View style={[{ height: heightValue(7) }, styles.centerVertical]}>
    <View style={[borderColor('green'), borderWidth(1), marginPosition(10), styles.positionRelative]}></View>

    <View style={[styles.column, styles.positionAbsolute, position(30)]}>
        <View style={[styles.allCenter, { height: 50, width: 50 , backgroundColor: count >=1 ? '#64ad64' : '#29292e'}, styles.bggreen, radius(30)]}>
            <Text>01</Text>
        </View>
        <View style={[marginPosition(5)]}>
            <Text style={[fontSize(13), darkMode?styles.black:styles.white]}>FILL DETAILS</Text>
        </View>
    </View>
    <View style={[styles.column, styles.positionAbsolute, position(30, 0, 0, 150)]}>
        <View style={[styles.allCenter, { height: 50, width: 50 , backgroundColor: count >=2 ? '#64ad64' : '#29292e'}, radius(30)]}>
            <Text>02</Text>
        </View>
        <View style={[marginPosition(5)]}>
            <Text style={[fontSize(13), darkMode?styles.black:styles.white]}>ANALYSE</Text>
        </View>
    </View>
    <View style={[styles.column, styles.positionAbsolute, position(30, 0, 0, 290),]}>
        <View style={[styles.allCenter, { height: 50, width: 50 , backgroundColor: count >=3 ? '#64ad64' : '#29292e'}, radius(30)]}>
            <Text>03</Text>
        </View>
        <View style={[marginPosition(5)]}>
            <Text style={[fontSize(11), darkMode?styles.black:styles.white]}>RESULTS</Text>
        </View>
    </View>


</View>
  )
}


