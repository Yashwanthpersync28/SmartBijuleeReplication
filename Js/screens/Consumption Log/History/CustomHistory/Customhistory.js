import React, { useState } from 'react'
import {View,Text} from 'react-native'
import DatePicker from "react-native-modern-datepicker";
import { flex, fontSize, heightValue, heightwidth, marginPosition, radius, styles, widthValue } from '../../../../../styles/Styles';
import { TouchableOpacity } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {getToday,getFormatedDate} from 'react-native-modern-datepicker';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Calendar } from 'react-native-calendars';
import Calendarcomp from './Calendars/Calendarcomp';
const Customhistory = () => {
    const today= new Date();
    const maxdate=getFormatedDate(today.setDate(today.getDate())+7,'YYYY/MM/DD');
    const startDate=getFormatedDate(today.setDate(today.getDate()-7),'YYYY/MM/DD');
   
    
    const [date,setDate]=useState(maxdate)
    let [clickedcalender,setclickedcalender]=useState(false)
  return (
    <View style={[flex(1),{marginTop:heightValue(70),height:heightValue(5)}]}>
        <View style={[{height:heightValue(29),width:widthValue(1.1)},styles.row]}>
            <Text style={[styles.white,fontSize(20)]}>Start</Text>
            <Text style={[styles.green,{marginLeft:5},fontSize(20)]}>Date {maxdate}</Text>
        </View>
        { clickedcalender ? 
        <Calendarcomp/>
        // <View style={[flex(1)]}>
        //   <Text>hello</Text>
        //   <Calendar  style={{
        //   width: 200, // Set the width of the calendar
        //   height: 200, // Set the height of the calendar
        // }}/>
        /* <DatePicker style={{height:'50%',width:'100%'}} mode='calendar' minimumDate={startDate} options={{
            backgroundColor:"#29292e",
            textHeaderColor:"#ffffff",
            textDefaultColor:"#ffffff",
            mainColor:"#ffffff",
            textSecondaryColor:"purple",
            
        }}  customStyles={{
            dateInput: {
              // Adjust the height here
              height: 20,
              borderColor: '#ccc',
              borderRadius: 0,
            },
          }}/> */  

          // </View>
          :

        <View style={[{height:heightValue(18),width:widthValue(1.1)},styles.bgdashblue,styles.row,radius(5),styles.centerHorizontal]}>
           <TouchableOpacity style={[styles.centerHorizontal]} onPress={()=>setclickedcalender(true)}>
           {/* <MaterialIcons name='today' style={[styles.white,marginPosition(0,'5%',0,'7%')]}/> */}

           <FontAwesome5Icon name='calendar' style={[styles.white,marginPosition(0,'5%',0,'7%'),fontSize(15)]}/>
           </TouchableOpacity>
           {/* <Image style={[heightwidth(20,30)]} src="https://img.icons8.com/material-outlined/24/FFFFFF/calendar--v1.png" alt="calendar--v1"/> */}
            <Text style={[styles.white,{marginLeft:5},fontSize(20)]}>Start Date {""}</Text>
        </View>}
        <ScrollView>
        <View style={[{height:heightValue(27),width:widthValue(1.1)},styles.allCenter]}>
            <Text style={[styles.red,fontSize(16)]}>Note: Please select the Start Date prior to 7 days</Text>
            
        </View>
        <View style={[{height:heightValue(18),width:widthValue(1.1)},styles.bgdashblue,styles.row,radius(5),styles.centerHorizontal]}>
           <FontAwesome5Icon name='calendar' style={[{color:"grey"},marginPosition(0,'5%',0,'7%'),fontSize(15)]}/>
           {/* <Image style={[heightwidth(20,30)]} src="https://img.icons8.com/material-outlined/24/FFFFFF/calendar--v1.png" alt="calendar--v1"/> */}
            <Text style={[{color:"grey"},{marginLeft:5},fontSize(20)]}>End Date {startDate}</Text>
        </View>
        <View style={[{height:heightValue(20),width:widthValue(1.1),marginTop:heightValue(20)},styles.allCenter]}>
          <TouchableOpacity style={[{height:heightValue(20),width:widthValue(4)},styles.dashboardcolour,styles.allCenter,radius(25)]}>
            <Text style={[styles.white]}>Submit</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        
    </View>
  )
}

export default Customhistory