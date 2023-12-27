import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import {fontSize, heightValue, marginPosition, styles, widthValue } from '../../../../styles/Styles';
import Menu from '../../CommonComponents/Cards/Menu';
import UiSettings from './UiSettings';
import { Appdata, General, Profiledata } from '../SettingsData/Settingsdatas';
import DrawerScreenWrapper from '../../Drawer/DrawerScreenWrapper';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
const Setting = ({navigation}) => {
  const darkMode = useSelector((state)=>state.system.darkMode)
   
  return (
    <DrawerScreenWrapper>
      <SafeAreaView>
   <View style={[ darkMode?styles.bglightWhite:styles.bglightblack,{height:heightValue(1),width:widthValue(1)}]}>
   <Menu navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.allCenter,marginPosition(0,0,20)]}>
              <View style={[{height:heightValue(16),width:widthValue(1.1)},styles.centerVertical,]}>
                    <Text style={[darkMode?styles.black:styles.white,fontSize(35)]}>Settings</Text>
              </View>
              <UiSettings arr={Profiledata} name='Profile' secondname="Settings" navigation={navigation}/>
              <UiSettings arr={Appdata} name='App' secondname="Settings" navigation={navigation}/>
              <UiSettings arr={General} name='General' secondname="Settings" navigation={navigation}/>
              

             
          </View>
      </ScrollView>
       
   </View>
   </SafeAreaView>
   </DrawerScreenWrapper>
  )
}

export default Setting
