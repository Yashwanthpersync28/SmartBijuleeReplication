import React,{useState} from 'react'
import { View ,Text, TextInput, TouchableOpacity} from 'react-native'
import { bgColor,borderColor, borderWidth,widthValue, flex, fontSize, heightValue, marginPosition, padding, paddingPosition, position, radius, styles  } from '../../../../styles/Styles'
import Feather from 'react-native-vector-icons/Feather'
import { KeyboardAvoidingView } from 'react-native'
const Passwordinputbox = ({val,name,onFocus,focuss,onBlur , onChangePass , password}) => {
 
  const [eyeshow, setEyeshow] = useState(true);

  const toggleEyeVisibility = () => {
    setEyeshow(!eyeshow);
  };
  
  return (
    
       
<View>
      <View style={[bgColor(focuss),{ height: heightValue(10.5), width: widthValue(1.6) }, padding(0, 10, 20, 10, 20), styles.column, marginPosition(0, 0, 3), radius(20), ]}>
        <Text style={[fontSize(13), styles.gr]}>{name}</Text>
        <View style={[styles.row, { alignItems: 'center' },borderColor('green'),borderWidth(0,0,0,1)]}>
          <TextInput onBlur={onBlur} onFocus={onFocus}
            secureTextEntry={eyeshow}
            onChangeText={onChangePass}
            value={password}
            style={[{flex: 1,fontSize: 18, padding:0, textAlignVertical: 'top' ,paddingVertical: 3,color:'white' }]}
          />
          <TouchableOpacity onPress={toggleEyeVisibility}>
            <Feather
              name={eyeshow ? 'eye-off' : 'eye'}
              style={[styles.gray, fontSize(28)]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  
  

  )
}

export default Passwordinputbox
