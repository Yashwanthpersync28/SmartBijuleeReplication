import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity,Linking } from 'react-native';
import { flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../styles/Styles';
import Menu from '../CommonComponents/Cards/Menu';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { usefuldata } from './Datas/UsefulDatas';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';

const Usefullinks = ({ navigation }) => {
  const [data, setdata] = useState(usefuldata);
  const [text, settext] = useState('');

  const handletext = (val) => {
    // Filter the data based on the input text
    const filteredData = usefuldata.filter((item) =>
      item.name.toLowerCase().includes(val.toLowerCase())
    );
    setdata(filteredData);
    settext(val);
  };
  const handlelinks = (urls) => {
    Linking.openURL(urls)
  };

  return (
    <DrawerScreenWrapper>
    <View style={[{ height: heightValue(1), width: widthValue(1) }, styles.bglightblack, styles.centerHorizontal]}>
      <Menu navigation={navigation} />
      <ScrollView>
        <View style={[padding(20, 0, 20, 0), { height: heightValue(12), width: widthValue(1.1) }, styles.bgdashblue, radius(40), styles.row, styles.allCenter]}>
          <FontAwesome5Icon name='question' style={[fontSize(15), styles.white]} />
          <TextInput
            style={[styles.white, fontSize(16), flex(1), { paddingHorizontal: 10 }]}
            placeholder='Search'
            placeholderTextColor='white'
            onChangeText={handletext}
            value={text}
            onSubmitEditing={() => handletext(text)}  // Use onSubmitEditing instead of onPress
          />
        </View>
        <View style={[styles.centerHorizontal]}>
          <Text style={[styles.white, fontSize(11), marginPosition(10)]}>
            Click on title to reduce to specific page to know more information
          </Text>
        </View>
        <View style={[{ width: widthValue(1.1) }, marginPosition(20)]}>
        <FontAwesome5Icon name='superpowers' style={[fontSize(25),styles.green]}/>
       <View style={[{height:heightValue(8),width:widthValue(1.1)},styles.bgdashblue,radius(20),padding(30),marginPosition(10,0,30)]}>
            <Text style={[styles.white]}>UDAY</Text>
            <Text style={[styles.white,fontSize(11),marginPosition(20)]}>Ujwal Discom Assurance Yojana</Text>
        </View> 
        <FontAwesome5Icon name='superpowers' style={[fontSize(25),styles.green]}/>
          <View style={[styles.row, styles.rowWrap, flex(1), styles.spaceBetween, marginPosition(0, 0, 10)]}>
            {data.map((list, index) => {
              return (
                <TouchableOpacity key={index} onPress={()=>handlelinks(list.links)}>
                  <View style={[{ height: heightValue(6), width: widthValue(2.3) }, styles.bgdashblue, radius(20), padding(20), marginPosition(10, 0, 10)]}>
                    <Text style={[styles.white]}>{list.name}</Text>
                    <Text style={[styles.white, fontSize(11), marginPosition(30)]}>{list.yojana}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={[styles.centerHorizontal]}>
          <Text style={[styles.white]}>Copyright @ 2023-APDCL</Text>
        </View>
      </ScrollView>
    </View>
    </DrawerScreenWrapper>
  );
};

export default Usefullinks;