import React, {useState} from 'react';
import {
  heightValue,
  widthValue,
  styles,
  fontSize,
  marginPosition,
  radius,
  borderWidth,
  borderColor,
} from '../../../styles/Styles';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';
import Cardcolors from '../CommonComponents/Cards/Cardcolors';
import MainCard from '../CommonComponents/Cards/MainCard';
import {monthly} from '../CommonComponents/Cards/DataWeekly/DataMonthly';
import Menu from '../CommonComponents/Cards/Menu';
import Header from '../CommonComponents/Cards/Header';

const Mdi = ({navigation}) => {
  let heading = 'Maximum';
  let comp = 'Demand';
  let details = 'Are you surpassing your sanctioned demand ?';
  return (
    <DrawerScreenWrapper>
      <SafeAreaView>
        <View
          style={[
            {height: heightValue(1), width: widthValue(1)},
            styles.bglightblack,
          ]}>
          <Menu navigation={navigation} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Header
              heading={heading}
              continueprop={comp}
              details={details}
              columnwise={false}
              display={false}
            />
            <Cardcolors
              name={'Sanctioned'}
              secondname={'Load'}
              units={'kW'}
              time={'December'}
              monthshow={true}
              value={'1'}
              month={true}
            />
            <MainCard
              name={'Monthly'}
              secondname={'Max Demand'}
              showsingleline={true}
              data={monthly}
              xaxis={'day'}
              yaxis={'bill'}
            />
            <View
              style={[
                {height: heightValue(20), width: widthValue(1)},
                styles.allCenter,
                marginPosition(5),
              ]}>
              <View
                style={[
                  styles.bggreen,
                  {width: widthValue(1.5), height: heightValue(35)},
                  styles.allCenter,
                  radius(15),
                ]}>
                <Text style={[styles.white, fontSize(12)]}>
                  (Click here ti view Current Month's MDI Chart)
                </Text>
              </View>
            </View>
            <View
              style={[
                {height: heightValue(5), width: widthValue(1)},
                styles.centerHorizontal,
                marginPosition(5),
              ]}>
              <View
                style={[
                  styles.bgdashblue,
                  {height: heightValue(7.2), width: widthValue(1.1)},
                  radius(15),
                ]}>
                <View
                  style={[
                    {height: heightValue(19), width: widthValue(1.1)},
                    styles.row,
                    styles.allCenter,
                  ]}>
                  <View
                    style={[
                      {height: heightValue(19), width: widthValue(1.3)},
                      styles.row,
                      styles.flexEnd,
                    ]}>
                    <Text style={[styles.white, fontSize(17)]}>Recorded</Text>
                    <Text
                      style={[
                        styles.green,
                        {marginLeft: widthValue(50)},
                        fontSize(17),
                      ]}>
                      Spike MD
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    {height: heightValue(19), width: widthValue(1.1)},
                    styles.allCenter,
                  ]}>
                  <View
                    style={[
                      {height: heightValue(19), width: widthValue(1.3)},
                      styles.row,
                      styles.allCenter,
                      styles.spaceBetween,
                      borderWidth(0, 0, 0, 0.8),
                      borderColor('grey'),
                    ]}>
                    <Text style={[styles.white, fontSize(14)]}>Log Date</Text>
                    <Text style={[styles.white, fontSize(14)]}>P-MD</Text>
                    <Text style={[styles.white, fontSize(14)]}>A-MD</Text>
                    <Text style={[styles.white, fontSize(14)]}>Voltage</Text>
                  </View>
                </View>
                <View
                  style={[
                    {height: heightValue(28), width: widthValue(1.1)},
                    styles.row,
                    styles.allCenter,
                  ]}>
                  <Text style={[styles.green, fontSize(11)]}>
                    A-MD-Assigned MD,P-MD-Peak MD
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
};

export default Mdi;
