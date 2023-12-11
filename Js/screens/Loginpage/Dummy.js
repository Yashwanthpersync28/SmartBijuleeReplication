import React, { useState ,useEffect} from 'react'
import { TouchableOpacity,View,Text } from 'react-native'
import { flex, styles } from '../../../styles/Styles';
import DeviceInfo from 'react-native-device-info';

const Dummy = () => {
    let [device,setDeviceId]=useState('')
    useEffect(() => {
        const fetchDeviceInfo = async () => {
          // Get the unique device ID
          const id = await DeviceInfo.getSystemVersion();
          setDeviceId(id);
        };
    
        fetchDeviceInfo();
      }, []);
  return (
    <View style={[flex(1),styles.allCenter]}>
        <TouchableOpacity >
            <Text>subbmit</Text>
        </TouchableOpacity>
        <Text>{device}</Text>
    </View>
  )
}

export default Dummy
