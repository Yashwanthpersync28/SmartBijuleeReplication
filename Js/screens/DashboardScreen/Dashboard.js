import React, { useEffect } from 'react';
import { View,Text,ScrollView } from 'react-native';
import {fontSize, heightValue, marginPosition, radius, styles, widthValue } from '../../../styles/Styles';
import Consumptioncomp from '../ConsumptionComp/Consumptioncomp';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';
import ToggleCard from './ToggleCard';
import Header from '../CommonComponents/Cards/Header';
import Menu from '../CommonComponents/Cards/Menu';
import Pychart from './component/Pychart';
import { SafeAreaView } from 'react-native-safe-area-context';
import { userVerifyApi } from '../../api/authApi';
import { eventlistApi } from '../../api/authApi/get/dummy';
import { useDispatch } from 'react-redux';

const Dashboardone = ({navigation}) => {

  const dispatch = useDispatch();

  // const dashboardData = async () => {
  //     const dashbboardResp = await dispatch(eventlistApi());
  //   console.log('hgfjndkm',dashbboardResp);
  // }


  // useEffect(() => {
  //   dashboardData()
  // }, [])

  return (
    <DrawerScreenWrapper>
      <SafeAreaView>
   <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack]}>
    <Menu navigation={navigation}/>
    <ScrollView>
    {/* display={false} */}
    <Header  heading={'Welcome'} continueprop={'Esyasoft'} details={'Consumer ID:12345'} columnwise={true} />
    
    <View style={[styles.red,{height:heightValue(8.5),width:widthValue(1)},styles.centerVertical,styles.spaceBetweenVertical,marginPosition(17)]}>
        <ScrollView horizontal={true}>
        <View style={[styles.row]}>
        <View style={[styles.bgdashblue,{height:heightValue(8.5),width:widthValue(1.1)},radius(15),marginPosition(0,'5%',0,'20%'),{marginLeft:heightValue(40),marginRight:heightValue(100)}]} >
       <Consumptioncomp heading={'Last Month Consumption'}/> 
       </View>
       <View style={[styles.bgdashblue,{height:heightValue(8.5),width:widthValue(1.1)},radius(15),{marginLeft:heightValue(300),marginRight:heightValue(100)}]} >
       <Consumptioncomp heading={'Monthly Consumption'} />    
       </View>
       <View style={[styles.bgdashblue,{height:heightValue(8.5),width:widthValue(1.1)},radius(15),{marginLeft:heightValue(200),marginRight:heightValue(100)}]} >
       <Consumptioncomp heading={'Monthly Forecast:'}/> 
       </View>
       <View style={[styles.bglightblack,{height:heightValue(8.5),width:widthValue(13)},radius(15),{marginLeft:heightValue(200),marginRight:heightValue(100)}]} >
        </View>
        </View>
        </ScrollView>
    </View>
    <View style={[{height:heightValue(2),width:widthValue(1.1)},styles.bgdashblue,,radius(15),marginPosition(10,0,0,20),styles.allCenter]}>
        <ToggleCard showpagination={true} showCustom={false} />
        <View style={[styles.white,marginPosition('-6%',0,'3%',0)]}>
            <Text style={[styles.white,fontSize(11)]}>(Click on the chart to see the value)</Text>
        </View>
    </View>
    <View style={[{height:heightValue(7),width:widthValue(1.1)},styles.bgdashblue,marginPosition(10,0,20,20),styles.row,radius(15)]}>
       <View style={[styles.allCenter,{height:heightValue(7),width:widthValue(1.8)}]}>
        <Text style={[styles.white]}>Today's Consumption</Text>
         <View style={[styles.row,styles.allCenter]}>
           <Text style={[styles.green,fontSize(30)]}>0</Text>
           <Text style={[styles.green,marginPosition(8,0,0,5)]}>Units</Text>
         </View>

       </View>
       <View style={[styles.allCenter,{height:heightValue(7),width:widthValue(2.8)}]}>
        <Pychart/>
        </View>

    </View>
    </ScrollView>
</View>
</SafeAreaView>
</DrawerScreenWrapper>

  )
}

export default Dashboardone

