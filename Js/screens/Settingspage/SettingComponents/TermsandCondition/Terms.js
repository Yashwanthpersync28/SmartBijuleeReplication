import React from 'react'
import { View,Text, ScrollView, SafeAreaView } from 'react-native';
import { heightValue,widthValue,flex,styles, marginPosition, fontSize } from '../../../../../styles/Styles';
import BackButton from '../CommonComp/BackButton';
import SettingsHeader from '../CommonComp/SettingsHeader';
const Terms = () => {
  let data=[{detail:"The Smart Bijulee mobile application of Assam Power Distribution Company Liited (APDCL) has been developed and deployed for consumers having smart meters installed at their premises.The figures and other information displayed in this app are for reference purposes only does not purport to bbe legal document"},
  {detail:"The Smart Bijulee mobile application of Assam Power Distribution Company Liited (APDCL) has been developed and deployed for consumers having smart meters installed at their premises.The figures and other information displayed in this app are for reference purposes only does not purport to bbe legal document"},
  {detail:"The Smart Bijulee mobile application of Assam Power Distribution Company Liited (APDCL) has been developed and deployed for consumers having smart meters installed at their premises.The figures and other information displayed in this app are for reference purposes only does not purport to bbe legal document"},
  {detail:"The Smart Bijulee mobile application of Assam Power Distribution Company Liited (APDCL) has been developed and deployed for consumers having smart meters installed at their premises.The figures and other information displayed in this app are for reference purposes only does not purport to bbe legal document"}]
  return (
    <SafeAreaView>
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal,]}>
        <View style={[{width:widthValue(1.1)},flex(1),marginPosition(0,0,40)]} >
               <BackButton/>
               <ScrollView> 
              <SettingsHeader name={'Terms And'} heading={'Conditions'}/>
              <View style={[styles.row,marginPosition(-40)]}>
                   <Text style={[styles.white,fontSize(18)]}>GENERAL</Text>
                   <Text style={[styles.green,fontSize(18),marginPosition(0,0,0,5)]}>INFORMATION</Text>
              </View>
               <View>
                 {data.map((list,index)=>{
                     return(
                      <View style={[marginPosition(10)]} key={index}>
                      <Text  style={[styles.white,fontSize(17)]}>{list.detail}</Text>
                      </View>
                     )
                 })}
                
               </View>
               </ScrollView>
        </View>
        
        </View>
        </SafeAreaView>
  )
}

export default Terms
