import React, { useState } from 'react'
import { TouchableOpacity,View,Text,ScrollView, StyleSheet,SafeAreaView, Dimensions } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { borderColor, borderWidth, flex, fontSize, heightValue, lineHeight, marginPosition, padding, position, radius, styles, widthValue } from '../../../../styles/Styles';
import DrawerScreenWrapper from '../../Drawer/DrawerScreenWrapper';
import SmallCards from './SmallCards';
import Todaycomp from '../../Dashboardd/Todaycomp';
import { obj } from '../../GraphData/Graphdatas';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryTheme,VictoryLabel,VictoryScatter } from 'victory-native';
import MainCard from '../../CommonComponents/Cards/MainCard';
import Menu from '../../CommonComponents/Cards/Menu';
import Header from '../../CommonComponents/Cards/Header';
import { weekly } from '../../CommonComponents/Cards/DataWeekly/DataMonthly';

const Comparison = ({navigation}) => {
     let abc='<0 Units'   
     let data=[{month:'November',earnings:5},{month:'December',earnings:6}]
     let {height,width}=Dimensions.get('window') ;
     let details="Compare Your daily, weekly & monthly consumption to keep a tab on electricity usage";
     let heading="Unit";
     let comp="Comparison"
  return (
    
    <DrawerScreenWrapper >
   <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack]}>
   <Menu navigation={navigation}/>
   <ScrollView>
    <Header details={details} heading={heading} continueprop={comp} columnwise={false} display={false}/>
    
    <View style={[styles.row,{height:heightValue(10),width:widthValue(1.1)},styles.spaceBetweenVertical,marginPosition('3%',0,0,'5%')]}>
       <SmallCards day={'Today'} progress={true}/>
       <SmallCards day={'Yesterday'} progress={false}/>
    </View>
    <MainCard name={"Weekly"} secondname={'Comparison'} showsingleline={false} data={weekly} xaxis={'day'} yaxis={'bill'}/>
    <View style={[{height:heightValue(6),width:widthValue(1.1)},styles.bgdashblue,marginPosition(14,0,50,20),styles.column,radius(15),padding(20),styles.selfStart]}>
         <View style={[styles.column]}>
          <Text style={[styles.white,marginPosition(0,0,5,5),fontSize(13)]}>December</Text>
          <View style={[{backgroundColor:"#3c3c42",height:heightValue(50),width:widthValue(1.3)},radius(20),marginPosition(0,0,5)]}></View>
         </View>
         <View style={[styles.column]}>
          <Text style={[styles.white,marginPosition(0,0,5,5),fontSize(13)]}>November</Text>
          <View style={[{backgroundColor:"#3c3c42",height:heightValue(50),width:widthValue(1.3)},radius(20)]}></View>
         </View>
    </View>
    </ScrollView>
</View>
</DrawerScreenWrapper>

  )
}

export default Comparison
