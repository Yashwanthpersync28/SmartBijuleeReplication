import React, { useState } from 'react'
import { heightValue,widthValue ,styles,fontSize,marginPosition, flex} from '../../../styles/Styles'

import {View,Text,TouchableOpacity} from 'react-native';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';
import Menu from '../CommonComponents/Cards/Menu';
import Header from '../CommonComponents/Cards/Header';
const Billing = ({navigation}) => {
   let heading="Postpaid";
   let comp="Balances";
   let details="Inspect your bills and pay online";
  return (
    <DrawerScreenWrapper >
      <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack]}>
     <Menu navigation={navigation}/>
   
      <Header heading={heading} continueprop={comp} details={details} columnwise={false} display={false}/>
      </View>
  </DrawerScreenWrapper>
  )
}

export default Billing
