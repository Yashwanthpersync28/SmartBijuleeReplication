import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { flex, heightValue, fontSize, styles } from '../../../../../../styles/Styles';
import Emojifunc from './Emoji/Emojifunc';

const CardInfoone = ({getdatafromparent}) => {
  


  return (
    <View style={[flex(1)]}>
      <View style={[{ height: heightValue(10) }, styles.column, styles.allCenter]}>
        <Text style={[styles.white, fontSize(18)]}>How was your</Text>
        <Text style={[styles.green, fontSize(23)]}>Experience ?</Text>
      </View>
      <View style={[{ height: heightValue(6) }, styles.centerVertical]}>
        <Emojifunc size={70} afterpressed={90} getdatafromparent={getdatafromparent}/>
      </View>
      {/* <Text>{sendFeedback}</Text> */}
    </View>
  );
}

export default CardInfoone;
