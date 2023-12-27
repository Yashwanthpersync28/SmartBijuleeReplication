import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { fontSize, flex, marginPosition, widthValue, radius, padding, styles } from '../../../../styles/Styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';

export const GeneralComponent = ({ General, category }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const darkMode = useSelector((state)=>state.system.darkMode);

  const handleArrowClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <View style={[flex(8), marginPosition(8, 0, 0, 20), { width: widthValue(1.1) }]}>
      <View style={[styles.row]}>
        <Text style={[darkMode?styles.black:styles.white, fontSize(17)]}>{category}</Text>
        <Text style={[styles.green, fontSize(17), marginPosition(0, 0, 5, 10)]}>Category</Text>
      </View>
      {General.map((item, index) => (
        <View key={index} style={[marginPosition(0, 0, 10)]}>
          <View style={[styles.allCenter, padding(10), darkMode?styles.bggreycolor:styles.bgdashblue, radius(0, 10, 0, 0, 10)]}>
            <TouchableOpacity
              style={[styles.row, styles.allCenter]}
              onPress={() => handleArrowClick(index)}>
              <View style={[styles.centerVertical, flex(7)]}>
                <Text style={[darkMode?styles.black:styles.white, fontSize(15)]}>{item.question}</Text>
              </View>
              <View style={[styles.allCenter, flex(0.7)]}>
                <FontAwesome5Icon
                  name={openIndex === index ? 'chevron-up' : 'chevron-down'}
                  style={[fontSize(14), styles.gray]}
                />
              </View>
            </TouchableOpacity>
          </View>
          {openIndex === index ? (
            <View style={[marginPosition(-7), styles.allCenter, darkMode?styles.bggreycolor:styles.bgdashblue, radius(0, 0, 15, 15, 0), styles.allCenter, padding(10)]}>
              <Text style={[fontSize(15), styles.gray]}>{item.answer}</Text>
            </View>
          ) : null}
        </View>
      ))}
    </View>
  );
};
