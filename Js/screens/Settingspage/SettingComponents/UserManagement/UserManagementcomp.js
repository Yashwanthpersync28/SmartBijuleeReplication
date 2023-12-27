import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import BackButton from '../CommonComp/BackButton';
import SettingsHeader from '../CommonComp/SettingsHeader';
import { heightValue, widthValue , styles,
  flex,
  radius,
  marginPosition,
  fontSize,
} from '../../../../../styles/Styles';
import ListofMembers from '../CommonComp/ListofMembers';
import FillDetails from './FillDetails';
import Analysis from './Analysis';
import Result from './Result';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {ToggleBullets} from './ToggleBullets';
import { useSelector } from 'react-redux';
const UserManagementcomp = () => {

  const darkMode = useSelector((state)=>state.system.darkMode)
  
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');
  const [count, setcount] = useState(0);
  const [dropdownval, setdropdownval] = useState('');
  const [showButton, setshowButton] = useState(true);
  const navigation = useNavigation();

  const handlefilldetails = () => {
    setcount(1);
  };

  const handlenext = () => {
    if (count === 3) {
      alert('warning');
      navigation.navigate('Setting');
    }
    setcount(count + 1);
  };
  useEffect(() => {
    if (name.length > 2 && number.length > 9 && dropdownval.length > 2) {
      setshowButton(false);
    }
  }, [name, number, dropdownval]);

  return (
    <SafeAreaView>
      <View
        style={[
          darkMode?styles.bglightWhite:styles.bglightblack,
          {height: heightValue(1), width: widthValue(1)},
          styles.centerHorizontal,
        ]}>
        <View style={[{width: widthValue(1.1), height: heightValue(1.2)}]}>
          <BackButton />
          <SettingsHeader
            name={'User'}
            heading={'Management'}
            details={
              'You can share your account with your family members with limited acess'
            }
          />

          <View>
            {count === 0 ? <ListofMembers Goto={handlefilldetails} /> : null}
            {count >= 1 ? <ToggleBullets count={count} /> : null}
            {count === 1 ? (
              <FillDetails
                onChangeText={val => setname(val)}
                onnumberChange={val => setnumber(val)}
                onchangeDropdown={val => {
                  setdropdownval(val);
                }}
                count={count}
              />
            ) : null}
            {count === 2 ? (
              <Analysis name={name} number={number} dropdownval={dropdownval} />
            ) : null}
            {count === 3 ? (
              <Result onchangText={() => setshowButton(false)} />
            ) : null}
          </View>
        </View>
        <View
          style={[
            {width: widthValue(1.2), height: heightValue(8)},
            styles.row,
            styles.spaceBetweenVertical,
          ]}>
          {count > 0 ? (
            <>
              <View
                style={[
                  {width: widthValue(3.5), height: heightValue(19)},
                  {backgroundColor: '#29292e'},
                  styles.allCenter,
                  radius(30),
                ]}>
                <TouchableOpacity onPress={() => setcount(count - 1)}>
                  <View style={[styles.row]}>
                    <FontAwesome5Icon
                      name="chevron-left"
                      style={[styles.white, fontSize(15), marginPosition(4, 5)]}
                    />
                    <Text style={[styles.white, fontSize(17)]}>Back</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  {
                    width: widthValue(3.5),
                    height: heightValue(19),
                    backgroundColor: showButton ? '#262f40' : '#64ad64',
                  },
                  styles.allCenter,
                  radius(30),
                ]}>
                <TouchableOpacity disabled={showButton} onPress={handlenext}>
                  <View style={[styles.row]}>
                    <Text style={[styles.white, fontSize(17)]}>Next</Text>
                    <FontAwesome5Icon
                      name="chevron-right"
                      style={[
                        styles.white,
                        fontSize(15),
                        marginPosition(4, 0, 0, 5),
                      ]}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserManagementcomp;
