import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
import {
  flex,
  fontSize,
  heightValue,
  lineHeight,
  marginPosition,
  padding,
  radius,
  styles,
  widthValue,
} from '../../../styles/Styles';
import Menu from '../CommonComponents/Cards/Menu';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {usefuldata} from './Datas/UsefulDatas';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';
// import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from 'react-redux';

const Usefullinks = ({navigation}) => {
  const darkMode = useSelector((state)=>state.system.darkMode)

  const [data, setdata] = useState(usefuldata);
  const [text, settext] = useState('');

  const handletext = val => {
    // Filter the data based on the input text
    const filteredData = usefuldata.filter(item =>
      item.name.toLowerCase().includes(val.toLowerCase()),
    );
    setdata(filteredData);
    settext(val);
  };
  const handlelinks = urls => {
    Linking.openURL(urls);
  };

  return (
    <DrawerScreenWrapper>
      <SafeAreaView>
        <View
          style={[
            {height: heightValue(1), width: widthValue(1)},
            darkMode?styles.bglightWhite:styles.bglightblack,
            styles.centerHorizontal,
          ]}>
          <Menu navigation={navigation} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.allCenter, {width: widthValue(1.1)}]}>
              <View
                style={[
                  styles.row,
                  styles.allCenter,
                  marginPosition(0, 0, 20),
                ]}>
                <Text style={[darkMode?styles.black:styles.white, fontSize(20)]}>APDCL</Text>
                <Text
                  style={[
                    styles.green,
                    fontSize(20),
                    marginPosition(0, 0, 0, 5),
                  ]}>
                  Schemes
                </Text>
              </View>
              <View
                style={[
                  padding(20, 0, 20, 0),
                  {height: heightValue(14), width: widthValue(1.2)},
                 darkMode?styles.bgWhite:styles.bgdashblue,
                  radius(40),
                  styles.row,
                  styles.allCenter,
                ]}>
                <MaterialIcons
                  name="question-mark"
                  style={[fontSize(25), darkMode?styles.black:styles.white,]}
                />
                <TextInput
                  style={[
                    darkMode?styles.black:styles.white,
                    fontSize(13),
                    flex(1),
                    {paddingHorizontal: 10},
                  ]}
                  placeholder="Search"
                  placeholderTextColor={darkMode?'black':'white'}
                  onChangeText={handletext}
                  value={text}
                  onSubmitEditing={() => handletext(text)} // Use onSubmitEditing instead of onPress
                />
              </View>
              <View style={[styles.centerHorizontal]}>
                <Text style={[darkMode?styles.black:styles.white, fontSize(8), marginPosition(10)]}>
                  Click on title to reduce to specific page to know more
                  information
                </Text>
              </View>
              <View style={[{width: widthValue(1.1)}, marginPosition(20)]}>
                <MaterialCommunityIcons
                  name="lightning-bolt"
                  style={[fontSize(23), styles.green]}
                />
                <View
                  style={[
                    {height: heightValue(8), width: widthValue(1.1)},
                    darkMode?styles.bgWhite:styles.bgdashblue,
                    radius(20),
                    padding(20),
                    marginPosition(10, 0, 30),
                  ]}>
                  <Text style={[darkMode?styles.black:styles.white, fontSize(14)]}>UDAY</Text>
                  <Text style={[darkMode?styles.black:styles.white, fontSize(10), marginPosition(20)]}>
                    Ujwal Discom Assurance Yojana
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="lightning-bolt"
                  style={[fontSize(23), styles.green]}
                />
                <View
                  style={[
                    styles.row,
                    styles.rowWrap,
                    flex(1),
                    styles.spaceBetween,
                    marginPosition(0, 0, 10),
                  ]}>
                  {data.map((list, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => handlelinks(list.links)}>
                        <View
                          style={[
                            {height: heightValue(6), width: widthValue(2.3)},
                            darkMode?styles.bgWhite:styles.bgdashblue,
                            radius(20),
                            padding(10),
                            marginPosition(10, 0, 10),
                          ]}>
                          <Text style={[darkMode?styles.black:styles.white, fontSize(14)]}>
                            {list.name}
                          </Text>
                          <Text
                            style={[
                              darkMode?styles.black:styles.white,
                              fontSize(10),
                              marginPosition(30),
                              lineHeight(15),
                            ]}>
                            {list.yojana}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
              <View
                style={[styles.centerHorizontal, {height: heightValue(10)}]}>
                <Text style={[darkMode?styles.black:styles.white, fontSize(11)]}>
                  Copyright @ 2023-APDCL
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
};

export default Usefullinks;
