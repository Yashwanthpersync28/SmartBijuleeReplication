import React from 'react'
import { View,Text, ScrollView, SafeAreaView } from 'react-native';
import { heightValue,widthValue,flex,styles, marginPosition, fontSize } from '../../../../../styles/Styles';
import BackButton from '../CommonComp/BackButton';
import SettingsHeader from '../CommonComp/SettingsHeader';
import { useSelector } from 'react-redux';
import { Style } from 'victory-core';
const Terms = () => {
  const darkMode = useSelector((state)=>state.system.darkMode)
  
  let data=[{detail:"The Smart Bijulee mobile application of Assam Power Distribution Company Liited (APDCL) has been developed and deployed for consumers having smart meters installed at their premises.The figures and other information displayed in this app are for reference purposes only does not purport to bbe legal document"},
  {detail:"Through all efforts have been made to ensure the accuracy of the content on the smart bijulee app, the same should not be constructed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are adviced to verify/check with the company and/or other souces wherever applicable so as to obtain appropriate information"},
  {detail:"In case of any variance between what has been started in the app and that contained in the relevent Acts, Rules, Regulations, Policy Statements etc., the latter shall prevail"},
  {detail:"Certain links on the App, placed for the convienience of visitors, leads to resources located on other websites maintained by third parties over whom APDCL has no control. These websites are external to APDCL.APDCL nether endorses in any way nor offers any judjement or warranty and accepts no responsibility or liablity for the authenticity, availablility of any of the goods or services or for any damage,loss or harm,direct or consequential or for any voilent of local or international laws that may result or may be incurred while visiting or transacting on these external websites"}]
  return (
    <SafeAreaView>
    <View style={[darkMode?styles.bglightWhite:styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal,]}>
        <View style={[{width:widthValue(1.1)},flex(1),marginPosition(0,0,40)]} >
               <BackButton/>
               <ScrollView showsVerticalScrollIndicator={false}> 
              <SettingsHeader name={'Terms And'} heading={'Conditions'}/>
              <View style={[styles.row,marginPosition(-60)]}>
                   <Text style={[darkMode?styles.black:styles.white,fontSize(18)]}>GENERAL</Text>
                   <Text style={[styles.green,fontSize(18),marginPosition(0,0,0,5)]}>INFORMATION</Text>
              </View>
               <View>
                 {data.map((list,index)=>{
                     return(
                      <View style={[marginPosition(10)]} key={index}>
                      <Text  style={[darkMode?styles.black:styles.white,fontSize(17)]}>{list.detail}</Text>
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
