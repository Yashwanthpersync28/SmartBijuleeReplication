import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';
import Header from '../CommonComponents/Cards/Header';
import {
  flex,
  heightValue,
  widthValue,
  styles,
  marginPosition,
  radius,
  fontSize,
  borderWidth,
  borderColor,
  position,
} from '../../../styles/Styles';
import Menu from '../CommonComponents/Cards/Menu';
import Linegraph from './Linegraph';
import { useSelector } from 'react-redux';

function Power({navigation}) {
  const darkMode = useSelector((state)=>state.system.darkMode)

  const [time, settime] = useState([
    {time: ''},
    {time: ''},
    {time: ''},
    {time: ''},
    {time: ''},
    {time: ''},
    {time: ''},
    {time: ''},

  ]);
  //for getting current time
  useEffect(() => {
    const now = new Date();
    const formattedHour = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true,
    });
    settime(prevTime =>
      prevTime.map(item => ({
        ...item,
        time: formattedHour,
      })),
    );
  }, []);

  return (
    <DrawerScreenWrapper>
      <SafeAreaView>
        <View
          style={[
            {height: heightValue(1), width: widthValue(1)},
            darkMode?styles.bglightWhite:styles.bglightblack,
          ]}>
          <Menu navigation={navigation} />
          <ScrollView>
            <Header
              heading={'Power'}
              continueprop={'Qulaity'}
              details={'How is the quality of power that you are reaceiving ?'}
              columnwise={false}
              display={false}
            />
            <View
              style={[
                {height: heightValue(6), width: widthValue(1)},
                styles.allCenter,
              ]}>
              <View
                style={[
                  darkMode?styles.bgWhite:styles.bgdashblue,
                  {height: heightValue(6.8), width: widthValue(1.1)},
                  radius(10),
                 
                ]}>
                <Linegraph />
              </View>
            </View>
            <View style={[flex(1)]}>

            
            <View style={[{height: heightValue(1.8), width: widthValue(1)},styles.allCenter, marginPosition('3%',0,0),styles.positionRelative]}>
              <View style={[darkMode?styles.bgWhite:styles.bgdashblue,{height: heightValue(2.2), width: widthValue(1.1),zIndex:1},radius(20),styles.allCenter,styles.column,styles.positionAbsolute,position(0)]}>
                <View style={[{height: heightValue(2.6), width: widthValue(1.3)}]}>
                   <View style={[{height: heightValue(20)},styles.row,styles.centerHorizontal]}>
                          <Text style={[darkMode?styles.black:styles.white, fontSize(17)]}>Voltage</Text>
                          <Text style={[styles.green,{marginLeft: widthValue(40)},fontSize(17),]}>
                                Hourly Trend
                            </Text>
                    </View>
                  <View style={[{height: heightValue(20)},styles.row,styles.centerHorizontal,styles.spaceBetweenVertical,]}>
                    <Text style={[darkMode?styles.black:styles.white, fontSize(14)]}>LogHour</Text>
                    <Text style={[darkMode?styles.black:styles.white,{marginLeft: widthValue(20)},fontSize(14),]}>Voltage</Text>
                    <Text style={[darkMode?styles.black:styles.white,{marginLeft: widthValue(20)},fontSize(14),]}>Freq</Text>
                    <Text style={[darkMode?styles.black:styles.white,{marginLeft: widthValue(6)},fontSize(14),]}>MD</Text>
                  </View>
                  <ScrollView showsVerticalScrollIndicator={false}>
                  {time.map((a, index) => {
                    return (
                      <View
                        key={index}
                        style={[
                          {height: heightValue(20)},
                          styles.row,
                          styles.centerHorizontal,
                          borderWidth(0, 0.3, 0, 0),
                          borderColor('grey'),
                        ]}>
                        <Text style={[styles.gray, fontSize(10)]}>
                          {a.time}
                        </Text>
                      </View>
                    );
                  })}
                  </ScrollView>
                  <View
                    style={[
                      {height: heightValue(20), width: widthValue(1.3)},
                      styles.allCenter,
                    ]}>
                    <Text style={[fontSize(12), styles.green]}>
                      MD-Maximum Demand,Freq-Frequency
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[{height: heightValue(17), width: widthValue(1)},styles.row,styles.centerVertical,marginPosition(0),position(150)]}>
              <View style={[{height: heightValue(17), width: widthValue(1.1)},styles.row,styles.spaceBetween]}>
                  <View style={[marginPosition(-38),{height: heightValue(12), width: widthValue(2.8)},darkMode?styles.bgWhite:styles.bgdashblue,styles.allCenter,radius(0,0,10,10),]}>
                     <Text style={[styles.green, fontSize(17),marginPosition(20)]}>Data Table</Text>
                  </View>
                  <View style={[{height: heightValue(12), width: widthValue(2.8)},styles.allCenter,styles.bggreenish,radius(0,0,10,10),marginPosition(-38)]}>
                     <Text style={[styles.white, fontSize(17),marginPosition(20)]}>Graph</Text>
                </View>
              </View>
            </View>
            </View>
            </View>
           
          </ScrollView>
        </View>
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
}

export default Power;
