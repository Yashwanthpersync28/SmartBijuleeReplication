import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  flex,
  fontSize,
  heightValue,
  marginPosition,
  padding,
  position,
  radius,
  styles,
  widthValue,
} from '../../../styles/Styles';
import Header from '../CommonComponents/Cards/Header';
import Menu from '../CommonComponents/Cards/Menu';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';
import {SafeAreaView} from 'react-native';
import { useSelector } from 'react-redux';
const Notifications = ({navigation}) => {
  const darkMode = useSelector((state)=>state.system.darkMode)

  let heading = 'Be';
  let continueprop = 'Notified';
  let details = 'Engage with the Utility via notifictions';
  return (
    <DrawerScreenWrapper>
      <SafeAreaView>
        <View
          style={[
            {height: heightValue(1), width: widthValue(1)},
            darkMode?styles.bglightWhite:styles.bglightblack,
          ]}>
          <Menu navigation={navigation} />
          <Header
            heading={heading}
            continueprop={continueprop}
            details={details}
            columnwise={false}
          />
          <View
            style={[
              {height: heightValue(1.5), width: widthValue(1)},
              styles.column,
              styles.allCenter,
              styles.positionRelative,
              marginPosition(10),
            ]}>
            <View
              style={[
                {
                  height: heightValue(13),
                  width: widthValue(1.6),
                  transform: [{rotate: '170deg'}],
                },
                styles.bglightgreen,
                radius(30),
                styles.positionAbsolute,
                position(20, 0, 0, 30),
              ]}></View>
            <View
              style={[
                {
                  height: heightValue(13),
                  width: widthValue(1.3),
                  backgroundColor: '#64ad64',
                  transform: [{rotate: '175deg'}],
                },
                ,
                radius(30),
                styles.positionAbsolute,
                position(26, 0, 0, 25),
              ]}></View>
            <View
              style={[
                {height: heightValue(1.7), width: widthValue(1.1)},
                styles.bgdashblue,
                radius(30),
                styles.positionAbsolute,
                position(35),
                padding(30),
              ]}>
              <View style={[flex(1), styles.centerVertical]}>
                <Text style={[styles.green, fontSize(23)]}>Notification</Text>
              </View>
              <View style={[flex(6), styles.allCenter]}>
                <Text style={[styles.green, fontSize(14)]}>
                  You have no new Notifications{' '}
                </Text>
                <Text style={[styles.green, fontSize(14)]}>
                  available at this moment.Please check
                </Text>
                <Text style={[styles.green, fontSize(14)]}>again later</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              {
                height: heightValue(10),
                width: widthValue(1.1),
                justifyContent: 'center',
                alignItems: 'flex-end',
              },
              marginPosition(0, 0, 0, 10),
            ]}>
            <TouchableOpacity
              style={[
                styles.bggreyish,
                {height: heightValue(19), width: widthValue(4)},
                radius(30),
                styles.allCenter,
              ]}>
              <Text style={[styles.white]}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
};

export default Notifications;
