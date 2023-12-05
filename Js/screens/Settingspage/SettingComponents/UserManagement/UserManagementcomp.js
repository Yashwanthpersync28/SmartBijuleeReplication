import React from 'react'
import { View,Text } from 'react-native';
import BackButton from '../CommonComp/BackButton';
import SettingsHeader from '../CommonComp/SettingsHeader';
import { heightValue,widthValue,styles } from '../../../../../styles/Styles';
import ListofMembers from '../CommonComp/ListofMembers';
const UserManagementcomp = () => {
  return (
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
    <View style={[{width:widthValue(1.1)}]}>
     <BackButton/>
     <SettingsHeader/>
     <ListofMembers/>
     </View>
     </View>
  )
}

export default UserManagementcomp
