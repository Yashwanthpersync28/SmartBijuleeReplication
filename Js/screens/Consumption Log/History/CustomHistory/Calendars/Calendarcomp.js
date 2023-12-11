import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { styles, widthValue, heightValue, fontSize, flex } from '../../../../../../styles/Styles';

const Calendarcomp = ({onClose}) => {
  const [selectedDate, setSelectedDate] = useState('');
  // const [selectedenddate,setselectedenddate]=useState('');
  const calendarRef = useRef(null);

  // Get the date 7 days ago from the current date
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const handleDateChange = (date) => {
    // Check if the selected date is within the allowed range
    
    const isWithinRange = date <= new Date() && date >= sevenDaysAgo;

    if (isWithinRange) {
      setSelectedDate(date.toISOString().split('T')[0]);
      

      // Close the calendar after a date is selected
      if (calendarRef.current) {
        calendarRef.current.hide();
      }
    } else {
      // Handle the case where the selected date is not within the allowed range
      setSelectedDate('');
    }
    
    onClose(date.toISOString().split('T')[0]);
    // onClose(selectedDate);
  };

  const customDayHeaderStyles = (date, selected, today, marking) => {
    const isWithinRange = date <= new Date() && date >= sevenDaysAgo;

    if (isWithinRange) {
      return selected ? styles.selectedDay : styles.selectableDay;
    } else {
      return styles.nonSelectableDay;
    }
  };

  return (
    <View style={[styles.allCenter, styles.row]}>
      <View style={[{ height: 220, backgroundColor: "#29292e", width: widthValue(10) }, styles.allCenter]}>
        <FontAwesome5Icon name='calendar' style={[styles.white, fontSize(20)]} />
      </View>
      <View style={[{ height: 220, backgroundColor: "#29292e", width: widthValue(1.2) }]}>
        <CalendarPicker
          ref={calendarRef}
          textStyle={{
            color: 'white',
            fontSize: 9
          }}
          maxDate={sevenDaysAgo}
          width={300}
          customDayHeaderStyles={customDayHeaderStyles}
          onDateChange={handleDateChange}
        />
      </View>
      {selectedDate ? (
        <View style={[flex(1), styles.allCenter,styles.bgGray]}>
          <Text style={[styles.red, fontSize(18), { marginTop: 20 }]}>Selected Date: {selectedDate}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Calendarcomp;
