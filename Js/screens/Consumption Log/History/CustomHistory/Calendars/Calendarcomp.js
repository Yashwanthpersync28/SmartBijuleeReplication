import React from 'react'
import {View,Text, Modal} from 'react-native'
import { flex, fontSize, heightValue, styles, widthValue } from '../../../../../../styles/Styles';
// import { Calendar } from 'react-native-calendars';
import CalendarPicker from 'react-native-calendar-picker';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const Calendarcomp = () => {
  

  return (
 

  <View style={[{  padding: 0 ,},styles.allCenter,styles.row]}>
    <View style={[{height:220,backgroundColor:"#29292e",width:widthValue(10)},styles.allCenter]}>
        <FontAwesome5Icon name='calendar' style={[styles.white,fontSize(20)]}/>
    </View>
      <View style={[{ height: 220 ,backgroundColor:"#29292e",width:widthValue(1.2)}]}>
        <CalendarPicker 
         textStyle={{
          color: 'white',
          fontSize:9
        }}
        
        maxDate={'2023-11-23'}
          width={300} // Optional: Set the width of the calendar
         
       />
      </View>
      
  </View>
  
  )
}

export default Calendarcomp
