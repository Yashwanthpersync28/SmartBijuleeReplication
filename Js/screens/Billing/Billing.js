import React, {useState} from 'react';
import { heightValue, widthValue, styles} from '../../../styles/Styles';
import {SafeAreaView, View} from 'react-native';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';
import Menu from '../CommonComponents/Cards/Menu';
import Header from '../CommonComponents/Cards/Header';
import { useSelector } from 'react-redux';



const Billing = ({navigation}) => {
  let heading = 'Postpaid';
  let comp = 'Balance';
  let details = 'Inspect your bills and pay online';
  const darkMode = useSelector((state)=>state.system.darkMode)


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
          continueprop={comp}
          details={details}
          columnwise={false}
          display={false}
        />
      </View>
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
};

export default Billing;
