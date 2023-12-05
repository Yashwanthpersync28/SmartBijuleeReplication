import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View ,ScrollView} from 'react-native';
import { flex,screenHeight,borderWidth,styles ,screenWidth,radius,marginPosition,heightwidth,fontSize,fontFamily,row,borderColor, heightValue, widthValue} from '../../../styles/Styles'
import Textinput from '../TextInput/Textinput';
import ConsumerTextinputComp from '../TextInput/ConsumerTextinputComp';


const Consumer = ({navigation}) => {
  let name=true;
    let [focus,setfocus]=useState(true)
    let [focusss,setfocusss]=useState(false);
    let handlelogin=()=>{
        navigation.navigate('login')
        setfocus(false);
      }
      let handlesignup=()=>{
        navigation.navigate('signup')
      }
  return (
    <ScrollView style={{...styles.bglightblack}}>
        <View style={{...flex(4),...styles.bglightblack,...styles.centerHorizontal}}> 
    <View style={{...screenHeight(2.3),...screenWidth(1.2),...styles.allCenter,...marginPosition('-20%')}}>
        <TouchableOpacity onPress={handlelogin}>
        <View style={{...heightwidth(60,60),...radius(100,100,100,100),...styles.allCenter,...styles.bggreenish}}>
        {/* <Image source={require('')} style={{...heightwidth(70,70),...marginPosition(0)}}/> */}
        <Image style={[heightwidth(40,40),marginPosition(0)]} src="https://img.icons8.com/metro/26/FFFFFF/multiply.png" alt="multiply"/>
        {/* <Image style={{...heightwidth(40,40),...marginPosition(0)}} src="https://img.icons8.com/metro/26/FFFFFF/multiply.png" alt="multiply"/>  */}
        </View>
        </TouchableOpacity>
     
      </View>  
      <View style={{...screenHeight(60),...screenWidth(2.2),...styles.bggreenish,...radius(0,30,0,0,30),...marginPosition('0%')}}></View>
      <View style={{...screenHeight(60),...screenWidth(1.7),...styles.bggreen,...radius(0,30,0,0,30)}}></View>
      
      <View style={[heightValue(1),widthValue(1.3),styles.bggreyish,radius(30),styles.allCenter]}>
        <View style={{...screenHeight(14),...screenWidth(1.5),...styles.row,...marginPosition('5%',0,0,'8%')}}>
          <Text style={{...fontSize(24),...styles.white}}>Consumer</Text>
          <Text style={{...fontSize(24),...styles.green,...marginPosition(0,0,0,8)}}>ID</Text>
         </View>
         <View style={[marginPosition(0,0,'5%')]}>
         <ConsumerTextinputComp cc={name}/>
         </View>
          {/* <View style={{...screenHeight(7),...screenWidth(1.5),...styles.allCenter }}> 
             <Textinput name={'CONSUMER ID'} focuss={focusss} val={false} onFocus={()=>setfocusss(true)} onBlur={()=>setfocusss(false)}/>
         </View>  */}
      </View>
      <TouchableOpacity>
      <View style={{...marginPosition("10%"),...screenHeight(16),...screenWidth(3.2),...styles.bggreyish,...radius(30),...styles.allCenter}} >
          <Text style={{...fontSize(19),...styles.white}} onPress={handlesignup}>Next</Text>
      </View>
      </TouchableOpacity>
      
      <View style={{...styles.row,...heightValue(1),...styles.allCenter,...marginPosition("5%")}}>
          <Text style={{...fontSize(17),...styles.white}}>Already have an account?</Text>
          <TouchableOpacity>
      <View style={{...marginPosition(0,0,0,6)}}>
          <Text style={{...fontSize(17),...styles.green}} onPress={handlelogin}>Sign In</Text>
      </View>
      </TouchableOpacity>
      </View> 
  </View>
  </ScrollView>
  )
}

export default Consumer
