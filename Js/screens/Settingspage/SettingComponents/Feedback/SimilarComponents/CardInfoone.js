import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { flex, heightValue, fontSize, styles, widthValue } from '../../../../../../styles/Styles';
import Emojifunc from './Emoji/Emojifunc';

const CardInfoone = ({getdatafromparent}) => {
  


  return (
    <View style={[flex(1)]}>
      <View style={[{ height: heightValue(10) }, styles.column, styles.allCenter]}>
        <Text style={[styles.white, fontSize(19)]}>How was your</Text>
        <Text style={[styles.green, fontSize(25)]}>Experience ?</Text>
      </View>
      <View style={[{ height: heightValue(6),width:widthValue(1.3)},styles.allCenter]}>
        <Emojifunc size={60} afterpressed={80} getdatafromparent={getdatafromparent} val={1.3} right={20}/>
      </View>
      {/* <Text>{sendFeedback}</Text> */}
    </View>
  );
}

export default CardInfoone;
