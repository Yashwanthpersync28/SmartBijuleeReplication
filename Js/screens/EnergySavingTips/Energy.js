import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView , SafeAreaView} from 'react-native';
import { heightValue, widthValue, styles, fontSize, marginPosition, radius, borderWidth, borderColor, heightwidth, flex, margin } from '../../../styles/Styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';
import { obj } from '../GraphData/Graphdatas';
import LottieView from 'lottie-react-native';
import Menu from '../CommonComponents/Cards/Menu';
import Header from '../CommonComponents/Cards/Header';
const Energy = ({ navigation }) => {
  let heading="Energy";
  let comp="Saving Tips";
  let details="Simple methods can help you save a significant amount of energy";
  return (
    <DrawerScreenWrapper>
    <SafeAreaView>
      <View style={[{ height: heightValue(1), width: widthValue(1) }, styles.bglightblack]}>
      <Menu navigation={navigation}/>
    <ScrollView> 
      <Header heading={heading} continueprop={comp} details={details} columnwise={false} display={false}/>
        <View style={[styles.allCenter,marginPosition(30)]}>
           <View style={[{height:heightValue(3.3),width:widthValue(1.7)},styles.bgdashblue,radius(15)]}>
              <Text style={[marginPosition(20,0,0,20),fontSize(20),styles.green]}>Tip 1</Text>
            <View style={[styles.allCenter]}>
            <LottieView style={[heightwidth('60%', '60%')]} source={require('../EnergySavingTips/Energytips.json')} autoPlay />
            </View>
            <Text style={[marginPosition(0,0,0,50),fontSize(15),styles.white]}>Extra Tips</Text>   
          </View>    
        </View>
        <View style={[styles.row,{height:heightValue(25),width:widthValue(1.1)},marginPosition(8,0,0,20)]}>
          <Text style={[fontSize(18),styles.white]}>Saving</Text>
          <Text style={[fontSize(18),styles.green,marginPosition(0,0,0,5)]}>Guidelines</Text>
        </View>
        {obj.energydata.map((ob,index)=>{
          return(
            <View key={index} style={[{width:widthValue(1.1)},marginPosition(0,0,'2.5%','5%'),borderWidth(0,0.8),borderColor('grey')]}>
               <Text style={[styles.white,marginPosition(8,0,2),fontSize(14)]}>{ob.heading}</Text>
               <Text style={[{color:'gray'},marginPosition('0%',0,'3%'),fontSize(13)]} >{ob.Details}</Text>
            </View>
          )
        })}
        <View style={[marginPosition(0,0,'5%')]}></View>
       
       </ScrollView>
      </View>
      </SafeAreaView>
    </DrawerScreenWrapper>
  )
}

export default Energy
