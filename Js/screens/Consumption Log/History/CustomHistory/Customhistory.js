import React, { useState,useEffect } from 'react'
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
import { useSelector } from 'react-redux';
const Customhistory = () => {

  const [selecteddate, setselecteddate] = useState('');
  const [enddate, setenddate] = useState('');
  const [changebg,setchangebg]=useState(false)
  const darkMode = useSelector((state)=>state.system.darkMode)
  
    let [clickedcalender,setclickedcalender]=useState(false)
  
    let togglecalendar = (selecteddate) => {
      setclickedcalender(false);
      setchangebg(true)
      setselecteddate(selecteddate);
      // console.warn(selecteddate)
      const endDate = new Date(selecteddate);
      endDate.setDate(endDate.getDate() + 7);
      const formattedEndDate = endDate.toISOString().split('T')[0];
      setenddate(formattedEndDate);
    };
  return (
    <View style={[flex(1),{marginTop:heightValue(70),height:heightValue(3)}]}>
        <View style={[{height:heightValue(29),width:widthValue(1.1)},styles.row]}>
            <Text style={[darkMode?styles.black:styles.white,fontSize(17)]}>Start</Text>
            <Text style={[styles.green,{marginLeft:5},fontSize(17)]}>Date</Text>
        </View>
        { clickedcalender ? 
        <Calendarcomp onClose={(selecteddate,today,a) => togglecalendar(selecteddate, new Date().toISOString().split('T')[0], false)}/>
          :
      <TouchableOpacity onPress={()=>setclickedcalender(true)}>
        <View style={[{height:heightValue(18),width:widthValue(1.1)},styles.bgdashblue,styles.row,radius(5),styles.centerHorizontal]} >
           <TouchableOpacity style={[styles.centerHorizontal]}>
           <FontAwesome5Icon name='calendar' style={[styles.white,marginPosition(0,'5%',0,'7%'),fontSize(15)]}/>
           </TouchableOpacity>
            <Text style={[styles.white, { marginLeft: 5 }, fontSize(17)]}>Start Date {selecteddate}</Text>
        </View>
        </TouchableOpacity>}
        <View style={[{height:heightValue(27),width:widthValue(1.1)},styles.allCenter,marginPosition(5)]}>
            <Text style={[{color:'#d64d09'},fontSize(14)]}>Note: Please select the Start Date prior to 7 days</Text>   
        </View>
        <View style={[{height:heightValue(29),width:widthValue(1.1)},styles.row]}>
            <Text style={[{color: darkMode ? 'grey':'rgba(255, 255 , 250, 0.4)'},fontSize(17)]}>End</Text>
            <Text style={[{color:'rgba(0, 255 , 0, 0.2)'},{marginLeft:5},fontSize(17)]}>Date</Text>
        </View>
        <View style={[{height:heightValue(18),width:widthValue(1.1)},styles.bgdashblue,styles.row,radius(5),styles.centerHorizontal]}>
           <FontAwesome5Icon name='calendar' style={[{color:"grey"},marginPosition(0,'5%',0,'7%'),fontSize(15)]}/>
            <Text style={[{ color: "grey" }, { marginLeft: 5 }, fontSize(17)]}>End Date {enddate}</Text>
        </View>
        <View style={[{height:heightValue(20),width:widthValue(1.1),marginTop:heightValue(20)},styles.allCenter]}>
          <TouchableOpacity style={[{height:heightValue(20),width:widthValue(4),backgroundColor:changebg ? '#64ad64':'#282f42'},styles.allCenter,radius(25)]}>
            <Text style={[styles.white]}>Submit</Text>
          </TouchableOpacity>
        </View>
        
        
    </View>
  )
}

export default Customhistory
