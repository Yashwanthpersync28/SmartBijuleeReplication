import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  fontSize,
  heightValue,
  marginPosition,
  padding,
  radius,
  styles,
  widthValue,
} from '../../../../styles/Styles';
import DrawerScreenWrapper from '../../Drawer/DrawerScreenWrapper';
import SmallCards from './SmallCards';
import MainCard from '../../CommonComponents/Cards/MainCard';
import Menu from '../../CommonComponents/Cards/Menu';
import Header from '../../CommonComponents/Cards/Header';
import {weekly} from '../../CommonComponents/Cards/DataWeekly/DataMonthly';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';

const Comparison = ({navigation}) => {
  const darkMode = useSelector((state)=>state.system.darkMode)
  let details =
    'Compare Your daily, weekly & monthly consumption to keep a tab on electricity usage';
  let heading = 'Unit';
  let comp = 'Comparison';
  return (
    <DrawerScreenWrapper>
      <SafeAreaView>
        <View
          style={[
            {height: heightValue(1), width: widthValue(1)},
            darkMode?styles.bglightWhite:styles.bglightblack,
          ]}>
          <Menu navigation={navigation} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Header
              details={details}
              heading={heading}
              continueprop={comp}
              columnwise={false}
              display={false}
            />
            <View
              style={[
                styles.row,
                {height: heightValue(10), width: widthValue(1.1)},
                styles.spaceBetweenVertical,
                marginPosition('3%', 0, 0, '5%'),
              ]}>
              <SmallCards day={'Today'} progress={true} />
              <SmallCards day={'Yesterday'} progress={false} />
            </View>
            <MainCard
              name={'Weekly'}
              secondname={'Comparison'}
              showsingleline={false}
              data={weekly}
              xaxis={'day'}
              yaxis={'bill'}
            />
            <View
              style={[
                {height: heightValue(6), width: widthValue(1.1)},
                darkMode?styles.bgWhite:styles.bgdashblue,
                marginPosition(13, 0, 50, 20),
                styles.column,
                radius(15),
                padding(15),
                styles.selfStart,
              ]}>
              <View style={[styles.row]}>
                <Text style={[darkMode?styles.black:styles.white, fontSize(19)]}>Monthly</Text>
                <Text
                  style={[
                    styles.green,
                    fontSize(19),
                    marginPosition(0, 0, 0, 5),
                  ]}>
                  Comparison
                </Text>
              </View>
              <View style={[styles.column]}>
                <Text
                  style={[
                    darkMode?styles.black:styles.white,
                    marginPosition(5, 0, 5, 5),
                    fontSize(12),
                  ]}>
                  December
                </Text>
                <View style={[styles.row]}>
                  <View
                    style={[
                      {
                        backgroundColor: darkMode ? '#cfcccc' : '#3c3c42',
                        height: heightValue(60),
                        width: widthValue(1.6),
                      },
                      radius(20),
                      marginPosition(0, 0, 5),
                    ]}></View>
                  <FontAwesome5Icon
                    name="angle-left"
                    style={[
                      styles.green,
                      fontSize(12),
                      marginPosition(0, 5, 0, 5),
                    ]}
                  />
                  <Text
                    style={[styles.green, fontSize(12), marginPosition(-2)]}>
                    0 Units
                  </Text>
                </View>
              </View>
              <View style={[styles.column]}>
                <Text
                  style={[
                    darkMode?styles.black:styles.white,
                    marginPosition(0, 0, 5, 5),
                    fontSize(12),
                  ]}>
                  November
                </Text>
                <View style={[styles.row]}>
                  <View
                    style={[
                      {
                        backgroundColor: darkMode ? '#cfcccc' : '#3c3c42',
                        height: heightValue(60),
                        width: widthValue(1.6),
                      },
                      radius(20),
                      marginPosition(0, 0, 5),
                    ]}></View>
                  <Text
                    style={[
                      darkMode?styles.black:styles.white,
                      fontSize(12),
                      marginPosition(0, 0, 0, 5),
                    ]}>
                    0 Units
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

export default Comparison;
