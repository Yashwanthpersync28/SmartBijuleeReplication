import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../../styles/Styles'
import { Appdata, General, Profiledata } from '../SettingsData/Settingsdatas';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const UiSettings = ({arr,name,secondname}) => {
  const navigation=useNavigation();
  const darkMode = useSelector((state)=>state.system.darkMode)

  let handlenavigation=(screen)=>{
     navigation.navigate(screen)
  }
  return (
            <>
                   <View style={[{width:widthValue(1.1)},marginPosition(20,0,10)]}  >
                      <View style={[styles.row]}>
                           <Text style={[darkMode?styles.black:styles.white,fontSize(17)]}>{name}</Text>
                           <Text style={[styles.green,fontSize(17),marginPosition(0,0,0,5)]}>{secondname}</Text>
                     </View>
                   {arr.map((it,index)=>{
                     return( 
                      <TouchableOpacity onPress={()=>handlenavigation(it.navigationdata)} key={index}>
                             <View key={index} style={[radius(15),styles.row,marginPosition(10),darkMode?styles.bgWhite:styles.bgdashblue,{height:heightValue(12)}]}>
                                  <View style={[flex(1),styles.allCenter]}>
                                    <View style={[{width:35,height:35,backgroundColor:'#28b085'},radius(50),styles.allCenter]}>
                                       <FontAwesome5Icon name={it.fonticon} style={[styles.white,fontSize(18)]}/>
                                    </View>
                                  </View>
                                   <View style={[flex(3),styles.column,styles.centerVertical]}>
                                       <View style={[styles.row]}>
                                          <Text style={[darkMode?styles.black:styles.white,fontSize(16)]}>{it.heading}</Text>
                                          <Text style={[styles.green,marginPosition(0,0,0,5),fontSize(16)]}>{it.sub}</Text>
                                       </View>
                           
                                    <Text style={[styles.gray,fontSize(13)]}>{it.detail}</Text>  
                                  </View>
                                  <View style={[flex(1),styles.allCenter]}>
                                       <FontAwesome5Icon name='chevron-right' style={[fontSize(16),styles.gray]}/>
                                 </View>
                             </View>
                      </TouchableOpacity>
                           )})} 

                </View>
               
               
                
   </>
  )
}

export default UiSettings
