import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../../styles/Styles'
import { Appdata, General, Profiledata } from '../SettingsData/Settingsdatas';

const UiSettings = ({arr,name,secondname}) => {
  return (
            <>
                   <View style={[{width:widthValue(1.1)},marginPosition(20)]}  >
                      <View style={[styles.row]}>
                           <Text style={[styles.white,fontSize(20)]}>{name}</Text>
                           <Text style={[styles.green,fontSize(20),marginPosition(0,0,0,5)]}>{secondname}</Text>
                     </View>
                   {arr.map((it,index)=>{
                     return( 
                             <View key={index} style={[radius(15),styles.row,marginPosition(10),styles.bgdashblue,{height:heightValue(10)}]}>
                                  <View style={[flex(1),styles.allCenter]}>
                                    <View style={[{width:40,height:40},radius(50),styles.bggreen,styles.allCenter]}>
                                       <FontAwesome5Icon name={[it.fonticon]} style={[styles.white,fontSize(20)]}/>
                                    </View>
                                  </View>
                                   <View style={[flex(3),styles.column,styles.centerVertical]}>
                                       <View style={[styles.row]}>
                                          <Text style={[styles.white,fontSize(18)]}>{it.heading}</Text>
                                          <Text style={[styles.green,marginPosition(0,0,0,5),fontSize(18)]}>{it.sub}</Text>
                                       </View>
                           
                                    <Text style={[styles.gray,fontSize(14)]}>{it.detail}</Text>  
                                  </View>
                                  <View style={[flex(1),styles.allCenter]}>
                                       <FontAwesome5Icon name='chevron-right' style={[fontSize(20)]}/>
                                 </View>
                             </View>
                           )})} 

                </View>
               
               
                
   </>
  )
}

export default UiSettings
