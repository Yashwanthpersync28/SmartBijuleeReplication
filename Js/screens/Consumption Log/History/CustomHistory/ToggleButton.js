import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { heightValue, widthValue, fontSize, styles, radius } from '../../../../../styles/Styles';
import Customhistory from './Customhistory';
import Swiper from 'react-native-swiper';
import Axisgraph from '../Axisgraph';
import { obj } from '../../../GraphData/Graphdatas';

export const ToggleButton = ({ onchangeCustom }) => {
  const swiper = useRef();

  const [activeIndex, setActiveIndex] = useState(0);
  const [custom, setCustom] = useState(false);
  const [today, setToday] = useState(true);
  const [week, setWeek] = useState(false);
  const [month, setMonth] = useState(false);
//To acheive background color of toggle
  const handleToggle = (index) => {
    onchangeCustom(true);
    setCustom(false);
    setActiveIndex(index);
    if (index === 0) {
      setToday(true);
      setWeek(false);
      setMonth(false);
    } else if (index === 1) {
      setWeek(true);
      setMonth(false);
      setToday(false);
    } else if (index === 2) {
      setMonth(true);
      setToday(false);
      setWeek(false);
    }
  };
//to acheive on click custom button to open calendar
  const handleCustom = () => {
    setCustom(true);
    onchangeCustom(false);
    setToday(false);
    setWeek(false);
    setMonth(false);
  };
///Based on index value when you swipe the background color changes
  const handleSwiperIndexChanged = (index) => {
    setActiveIndex(index);
    handleToggle(index);
  };

  return (
    <View style={[{ height: heightValue(1.9), width: widthValue(1.1) }]}>
      <View style={[{ height: heightValue(14), width: widthValue(1.1) }, styles.allCenter]}>
        <View style={[styles.bgdashblue, styles.allCenter, styles.spaceBetween,styles.row, { height: heightValue(24), width: widthValue(1.1) }, radius(10)]}>
          <TouchableOpacity onPress={handleCustom}>
            <View style={[{ height: heightValue(24), width: widthValue(5) }, styles.allCenter , { backgroundColor: custom ? '#39763b' : '#29292e' },radius(10)]}>
              <Text style={[styles.white]}>Custom</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleToggle(0)}>
            <View style={[{ height: heightValue(24), width: widthValue(5) }, styles.allCenter, { backgroundColor: today ? '#39763b' : '#29292e' },radius(10)]}>
              <Text style={[fontSize(18),styles.white]}>Today</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleToggle(1)}>
            <View style={[{ height: heightValue(24), width: widthValue(5) }, styles.allCenter, { backgroundColor: week ? '#39763b' : '#29292e' },radius(10)]}>
              <Text style={[fontSize(18),styles.white]}>Week</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleToggle(2)}>
            <View style={[{ height: heightValue(24), width: widthValue(5) }, styles.allCenter, { backgroundColor: month ? '#39763b' : '#29292e' },radius(10)]}>
              <Text style={[fontSize(18),styles.white]}>Month</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {custom ? (
        <Customhistory />
      ) : (
        <Swiper
          index={activeIndex}
          onIndexChanged={handleSwiperIndexChanged}
          ref={swiper}
          showsPagination={false}
          loop={false}
          buttonWrapperStyle={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', justifyContent: 'space-around', marginRight: '0%', marginTop: '0%', marginLeft: '0%', marginRight: '0%' }}
          style={styles.wrapper}
          showsButtons={false}
          dot={
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                margin: 3,
                backgroundColor: 'white',
                bottom: 0,
              }}
            ></View>
          }
          activeDot={
            <View
              style={{
                width: 35,
                height: 13,
                borderRadius: 7,
                margin: 5,
                backgroundColor: 'green',
                bottom: 0,
              }}
            ></View>
          }
        >
          <Axisgraph name={obj.digits} xname={'month'} yname={'earnings'} />
          <Axisgraph name={obj.days} xname={'month'} yname={'earnings'} />
          <Axisgraph name={obj.months} xname={'month'} yname={'earnings'} />
        </Swiper>
      )}
    </View>
  );
};
