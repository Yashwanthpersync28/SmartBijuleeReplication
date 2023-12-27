import React, { useEffect, useState } from 'react';
import { View,Text,ScrollView } from 'react-native';
import {fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../styles/Styles';
import Consumptioncomp from '../ConsumptionComp/Consumptioncomp';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';
import ToggleCard from './ToggleCard';
import Header from '../CommonComponents/Cards/Header';
import Menu from '../CommonComponents/Cards/Menu';
import Pychart from './component/Pychart';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { dashBoardApi } from '../../api/userApi';
import LottieView from 'lottie-react-native';

const Dashboardone = ({navigation}) => {
  const [loader,setLoader]=useState(true);

  // const dispatch = useDispatch();

  const globalVariableDashboard = useSelector((state)=>state.userDetails.DashBoard)
  const darkMode = useSelector((state)=>state.system.darkMode);
  console.log('globalVariableDashboardgalu',globalVariableDashboard);

  const userSelector = useSelector(state => state.auth.user);//to get the user name and login id
  const [name,setname]=useState(userSelector.data.Name)
  const [CANumber,setCAnumber]=useState(userSelector.data.CANumber)

  ////DasboardApi
  const dispatch=useDispatch();
 
  const globalVariableEnergyTips = useSelector(state => state);
  console.log('globalVariableEnergyTips', globalVariableEnergyTips);
  // const userSelector = useSelector(state => state.auth.userVerify);
 
  const [Month,setmonth] = useState([])
  const [Today,settoday] = useState([]);
  const [Week,setweek] = useState([]);
  // const [gen,setgen]=useState([]);
  // const [category,setcategory]=useState([])
  const LoginId = globalVariableEnergyTips.auth.user.data.CANumber;
  const meterID = globalVariableEnergyTips.auth.user.data.MID;
  const PHASEID =globalVariableEnergyTips.auth.user.data.PHASE
  ///enrgy tips Api
  const Dashboardfunc = async ()=>{
      try{
          
      const energyTipsResp =  await dispatch(dashBoardApi(
          {
              "loginID":LoginId,
              "meterID": meterID,
               "phase": PHASEID
            }
      ))
      console.log('tufwyiutoyeupsid[wo',energyTipsResp)
      // console.log('loginID,langId',energyTipsResp.meta.arg.loginID, energyTipsResp.meta.arg.langID)
      console.log('month',energyTipsResp.payload.data.barGraph.month)
      console.log('today',energyTipsResp.payload.data.barGraph.today)
      console.log('week',energyTipsResp.payload.data.barGraph.week)

      // console.log('',energyTipsResp.payload.data.general)
      // console.log('catego',energyTipsResp.payload.data.category);
      setmonth(energyTipsResp.payload.data.barGraph.month);
      settoday(energyTipsResp.payload.data.barGraph.today);
      setweek(energyTipsResp.payload.data.barGraph.week);

      // setgen(energyTipsResp.payload.data.general);
      // setcategory(energyTipsResp.payload.data.category)
      if (energyTipsResp.payload.status === 200) {
        setLoader(false);
      }
          }
          catch(error){ 
              console.error('EnergyTipsFetch',error)
          }
  }
 
    useEffect(()=>{
      Dashboardfunc()
    },[])

    
  return (
    <DrawerScreenWrapper>
      <SafeAreaView>
   <View style={[{height:heightValue(1),width:widthValue(1)},darkMode?styles.bglightWhite:styles.bglightblack,]}>
    <Menu navigation={navigation}/>
    <ScrollView showsVerticalScrollIndicator={false}>
    {/* display={false} */}
    <Header  heading={'Welcome'} continueprop={name} details={`Consumer Id ${CANumber}`} columnwise={true} />
    
    <View style={[styles.red,{height:heightValue(8.5),width:widthValue(1)},styles.centerVertical,styles.spaceBetweenVertical,marginPosition(17)]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.row]}>
        <View style={[darkMode?styles.bgWhite:styles.bgdashblue,{height:heightValue(8.5),width:widthValue(1.1)},radius(15),marginPosition(0,'5%',0,'20%'),{marginLeft:heightValue(40),marginRight:heightValue(100)}]} >
       <Consumptioncomp heading={'Last Month Consumption'}/> 
       </View>
       <View style={[darkMode?styles.bgWhite:styles.bgdashblue,{height:heightValue(8.5),width:widthValue(1.1)},radius(15),{marginLeft:heightValue(300),marginRight:heightValue(100)}]} >
       <Consumptioncomp heading={'Monthly Consumption'} />    
       </View>
       <View style={[darkMode?styles.bgWhite:styles.bgdashblue,{height:heightValue(8.5),width:widthValue(1.1)},radius(15),{marginLeft:heightValue(200),marginRight:heightValue(100)}]} >
       <Consumptioncomp heading={'Monthly Forecast:'}/> 
       </View>
       <View style={[darkMode?styles.bglightWhite:styles.bglightblack,{height:heightValue(8.5),width:widthValue(13)},radius(15),{marginLeft:heightValue(200),marginRight:heightValue(100)}]} >
        </View>
        </View>
        </ScrollView>
    </View>


    <View style={[{height:heightValue(2),width:widthValue(1.1)},darkMode?styles.bgWhite:styles.bgdashblue,radius(15),marginPosition(10,0,0,20),styles.allCenter]}>
    {loader ? <> 
      <LottieView style={{height:30,width:30,marginBottom:20}} source={require('../Assetslottie/loadingtwo.json')} autoPlay /></>:<>
        
        <ToggleCard showpagination={true} showCustom={false} month={Month} today={Today} week={Week}/>
        </>}
        <View style={[marginPosition('-5%',0,'3%',0)]}>
            <Text style={[darkMode ? styles.black : styles.white,fontSize(11)]}>(Click on the chart to see the value)</Text>
        </View> 
    </View>
    <View style={[{height:heightValue(7),width:widthValue(1.1)},darkMode?styles.bgWhite:styles.bgdashblue,marginPosition(10,0,50,20),styles.row,radius(15)]}>
       <View style={[styles.allCenter,{height:heightValue(7),width:widthValue(1.8)}]}>
        <Text style={[darkMode?styles.black:styles.white]}>Today's Consumption</Text>
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

