import React, { useEffect, useState } from 'react'
import {  Text , TouchableOpacity, View ,ScrollView} from 'react-native';
import { styles ,radius,marginPosition,fontSize, heightValue, widthValue} from '../../../styles/Styles'
import Buttonx from '../Loginpage/CommonCards/Buttonx';
import Logincards from '../Loginpage/CommonCards/Logincards';

const Consumer = ({navigation}) => {
  const [consumer,setsonsumer]=useState('');
  const [showbtn,setshowbtn]=useState(false);
 
    const handlelogin=()=>{
        navigation.navigate('login')
      }

      const handlesignup=()=>{
        navigation.navigate('signup')
      }
      useEffect(()=>{
        if(consumer.length>4 ){
          setshowbtn(true)
        }
        else{
          setshowbtn(false)
          
        }
      },[consumer])
  return (
    <ScrollView style={{...styles.bglightblack}}>
        <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack,styles.centerHorizontal]}>
           <View style={[{height:heightValue(2.8),width:widthValue(1)}]}>
                <Buttonx navigation={navigation}/>
           </View>
           <View style={[{height:heightValue(4),width:widthValue(1)}]}>
                <Logincards name={'CONSUMER'} secondname={'ID'} showconsumerid={true} heightval={true} onChangeText={(val)=>setsonsumer(val)}/>
           </View>
         
            <TouchableOpacity disabled={!showbtn} onPress={handlesignup}>
                <View style={[{height:heightValue(16),width:widthValue(4)},showbtn?styles.bggreenish:styles.bggreyish,radius(30),styles.allCenter,marginPosition(30)]}>
                    <Text style={[styles.white]}>Next</Text>
                </View>
              </TouchableOpacity>
           <View style={[styles.row,{height:heightValue(10)},styles.allCenter,marginPosition(0)]}>
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
