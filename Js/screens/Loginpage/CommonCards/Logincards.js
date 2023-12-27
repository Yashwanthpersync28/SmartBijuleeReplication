import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
  flex,
  fontSize,
  heightValue,
  marginPosition,
  padding,
  radius,
  styles,
  widthValue,
} from '../../../../styles/Styles';
import Inputbox from './Inputbox';
import {useState} from 'react';
import Passwordinputbox from './Passwordinputbox';

const Logincards = ({ editable,onChangeconfPass ,showconfpassword , maxLength , number, name, secondname, showpassword, showconsumer, showmobile, showotp, heightval,onChangeText, id, onChangePass, keyboardType, password , showconsumerid}) => {
  
  const [numid, setnumid] = useState(false);
  const [passid, setpassid] = useState(false);
  const [otpid, setotpid] = useState(false);
  const [focus, setfocus] = useState(false);
  const [confpassid, setconfpassid] = useState(false);
  const [consumerid,setconsumerid]=useState(false)

  return (
    <View style={[styles.allCenter]}>
      <View
        style={[
          styles.bggreenish,
          {height: heightValue(50), width: widthValue(2.2)},
          radius(30, 30, 0, 0),
        ]}></View>
      <View
        style={[
          styles.bggreen,
          {height: heightValue(50), width: widthValue(1.7)},
          radius(30, 30, 0, 0),
        ]}></View>
      <View
        style={[
          styles.bggreyish,
          {
            height: heightval ? heightValue(4.2) : heightValue(3.2),
            width: widthValue(1.3),
          },
          radius(30),
          padding(25),
        ]}>
        <View style={[styles.row, marginPosition(0, 0, 10)]}>
          <Text style={[styles.white, fontSize(25)]}>{name}</Text>
          <Text
            style={[styles.green, fontSize(25), marginPosition(0, 0, 0, 10)]}>
            {secondname}
          </Text>
        </View>
        <View style={[styles.allCenter, flex(1)]}>
          {showconsumer ? (
            <Inputbox
              name={'CONSUMER ID/MOBILE NUMBER'}
              onFocus={() => setfocus(!focus)}
              onBlur={() => setfocus(!focus)}
              focuss={focus}
              onChangeText={onChangeText}
              id={id}
            />
          ) : null}
          {showmobile ? (
            <Inputbox
              name={'MOBILE NUMBER'}
              onFocus={() => setnumid(!numid)}
              onBlur={() => setnumid(!numid)}
              focuss={numid}
              // onChangeText={onChangeText}
              keyboardType={keyboardType}
              number={number}
              editable={editable}
            />
          ) : null}
          {showotp ? (
            <Inputbox
              name={'OTP'}
              onFocus={() => setotpid(!otpid)}
              onBlur={() => setotpid(!otpid)}
              focuss={otpid}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
              maxLength={maxLength}
            />
          ) : null}
          {showpassword ? (
            <Passwordinputbox
              name={'Password'}
              onFocus={() => setpassid(!passid)}
              onBlur={() => setpassid(!passid)}
              focuss={passid}
              onChangePass={onChangePass}
              password={password}
            />
          ) : null}
          {showconfpassword ? (
            <Passwordinputbox
              name={'Confirm Password'}
              onFocus={() => setconfpassid(!confpassid)}
              onBlur={() => setconfpassid(!confpassid)}
              focuss={confpassid}
              onChangePass={onChangeconfPass}
              password={password}
            />
          ) : null}
          {showconsumerid ? (
            <Inputbox
              name={'CONSUMER ID'}
              onFocus={() => setconsumerid(!consumerid)}
              onBlur={() => setconsumerid(!consumerid)}
              focuss={consumerid}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
              maxLength={maxLength}
            />
          ) : null}
         
        </View>
      </View>
    </View>
  );
};

export default Logincards;
