import React from 'react';
import { View,Text,ScrollView } from 'react-native';
import { borderColor, borderWidth,fontSize, heightValue, marginPosition, radius, styles, widthValue } from '../../../styles/Styles';
import Consumptioncomp from '../ConsumptionComp/Consumptioncomp';

import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';
import Exampledashboard from './Exampledashboard';
import Header from '../CommonComponents/Cards/Header';
import Menu from '../CommonComponents/Cards/Menu';
import { VictoryLabel } from 'victory-native';
import { Svg } from 'react-native-svg';
import Pychart from './component/Pychart';

const Dashboardone = ({navigation}) => {
  return (
    <DrawerScreenWrapper>
   <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack]}>
    <Menu navigation={navigation}/>
    <ScrollView>
    {/* display={false} */}
    <Header  heading={'Welcome'} continueprop={'Esyasoft'} details={'Consumer ID:12345'} columnwise={true} />
    
    <View style={[styles.red,{height:heightValue(8),width:widthValue(1)},styles.centerVertical,styles.spaceBetweenVertical,marginPosition('5%',0,0,'0%')]}>
        <ScrollView horizontal={true}>
        <View style={[styles.row]}>
        <View style={[styles.bgdashblue,{height:heightValue(8),width:widthValue(1.1)},radius(15),marginPosition(0,'5%',0,'20%'),{marginLeft:heightValue(40),marginRight:heightValue(100)}]} >
       <Consumptioncomp heading={'Last Month Consumption'}/> 
       </View>
       <View style={[styles.bgdashblue,{height:heightValue(8),width:widthValue(1.1)},radius(15),{marginLeft:heightValue(300),marginRight:heightValue(100)}]} >
       <Consumptioncomp heading={'Monthly Consumption'} />    
       </View>
       <View style={[styles.bgdashblue,{height:heightValue(8),width:widthValue(1.1)},radius(15),{marginLeft:heightValue(200),marginRight:heightValue(100)}]} >
       <Consumptioncomp heading={'Monthly Forecast:'}/> 
       </View>
       <View style={[styles.bglightblack,{height:heightValue(8),width:widthValue(13)},radius(15),{marginLeft:heightValue(200),marginRight:heightValue(100)}]} >
        </View>
        </View>
        </ScrollView>
    </View>
    <View style={[{height:heightValue(2),width:widthValue(1.1)},styles.bgdashblue,,radius(15),marginPosition('3%',0,0,'5%'),styles.allCenter]}>
        <Exampledashboard showpagination={true} showCustom={false} sendtochild={false}/>
        <View style={[styles.white,marginPosition('-6%',0,'3%',0)]}>
            <Text style={[styles.white,fontSize(11)]}>(Click on the chart to see the value)</Text>
        </View>
    </View>
    <View style={[{height:heightValue(7),width:widthValue(1.1)},styles.bgdashblue,marginPosition('3%',0,'10%','5%'),styles.row,radius(15)]}>
       <View style={[styles.allCenter,{height:heightValue(7),width:widthValue(1.8)}]}>
        <Text style={[styles.white]}>Today's Consumption</Text>
         <View style={[styles.row,styles.allCenter]}>
           <Text style={[styles.green,fontSize(30)]}>0</Text>
           <Text style={[styles.green,marginPosition('3%',0,0,'2%')]}>Units</Text>
         </View>

       </View>
       <View style={[styles.allCenter,{height:heightValue(7),width:widthValue(2.8)}]}>
        <Pychart/>
        </View>

    </View>
    </ScrollView>
</View>
</DrawerScreenWrapper>

  )
}

export default Dashboardone

