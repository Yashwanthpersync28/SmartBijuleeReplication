import React from 'react'
import {View,Text,Image, SafeAreaView, ScrollView} from 'react-native'
import { borderWidth, flex, fontSize, heightValue, marginPosition, padding, position, radius, styles, widthValue } from '../../../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Informationcards from './Informationcards'
import Cardstwo from './Cardstwo'
import BackButton from '../CommonComp/BackButton'

const Profile = () => {
  return (
    <SafeAreaView>
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
      <View style={[styles.selfStart,marginPosition(0,0,0,20),{height:heightValue(20)}]}>
      <BackButton/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      
       <Informationcards height={3.4} logo={130}/>
       <View style={[styles.bgdashblue,{width:widthValue(1.1)},radius(20),marginPosition(20,0,30),padding(20)]}>
            <Cardstwo name={'Sanctioned Load'} number={1}/>
            <Cardstwo name={'Service Date'} number={'28/02/23'}/>
            <Cardstwo name={'Meter Serial Number'} number={'METER_D1_000003'}/>
            <Cardstwo name={'Contact Number'} number={9407375262}/>
            <Cardstwo name={'Email Id'} number={''}/>

       </View>
       </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default Profile
