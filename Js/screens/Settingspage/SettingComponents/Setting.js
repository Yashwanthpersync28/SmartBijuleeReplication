import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import { flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../../styles/Styles';
import Menu from '../../CommonComponents/Cards/Menu';
import Header from '../../CommonComponents/Cards/Header';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// import { Appdata, General, Profiledata } from '../SettingsData/Settingsdatas';
import UiSettings from './UiSettings';
import { Appdata, General, Profiledata } from '../SettingsData/Settingsdatas';
// import { Appdata, General, Profiledata } from '../SettingsData/Settingsdatas';
const Setting = ({navigation}) => {
   
  return (
   <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)}]}>
   <Menu navigation={navigation} />
      <ScrollView>
        <View style={[styles.allCenter,marginPosition(0,0,20)]}>
              <View style={[{height:heightValue(16),width:widthValue(1.1)},styles.centerVertical,]}>
                    <Text style={[styles.white,fontSize(35)]}>Settings</Text>
              </View>
              <UiSettings arr={Profiledata} name='Profile' secondname="Settings"/>
              <UiSettings arr={Appdata} name='App' secondname="Settings"/>
              <UiSettings arr={General} name='General' secondname="Settings"/>
              

             
          </View>
      </ScrollView>
       
   </View>
  )
}

export default Setting
