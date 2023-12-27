import React from 'react'
import { View , Text , TouchableOpacity } from 'react-native';
import { heightValue , widthValue , flex , fontSize , marginPosition , styles , radius } from '../../../styles/Styles';

export const SetNewpassword = () => {
  return (
    <View
    style={[
      {height: heightValue(1), width: widthValue(1)},
      styles.bglightblack,
    ]}>
    <View style={[flex(3), {width: widthValue(1)}]}>
      <Buttonx navigation={navigation} />
    </View>
    <View style={[flex(3), {width: widthValue(1)}]}>
      <Logincards
        name={'Set'}
        secondname={'New Password'}
       showpassword={true}
        heightval={false}
      />
    </View>
    <View style={[flex(3), {width: widthValue(1)}, styles.allCenter]}>
      <TouchableOpacity >
        <View
          style={[
            styles.bggreyish,
            {height: heightValue(14), width: widthValue(3.1)},
            styles.allCenter,
            radius(30),
            marginPosition(30),
          ]}>
          <Text style={[fontSize(20), styles.white]}>Submit</Text>
        </View>
      </TouchableOpacity>
      <View style={[styles.row, marginPosition(40)]}>
        <Text style={[styles.white]}>Aldready have an account ?</Text>
        <Text style={[styles.green, marginPosition(0, 0, 0, 5)]}>
          Sign In
        </Text>
      </View>
    </View>
  </View>
  )
}


