import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import { styles , fontSize , marginPosition , screenHeight , flex } from '../../../../styles/Styles';
import { useRef , useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { onboardingdata } from '../DataOnbarding';
import Onboarding from '../Onboarding';



export const Swiperr=({navigation})=> {
  const swiper = useRef(); 
const [index, setIndex] = useState(0);
const [done,setdone]=useState(false);

let handleloginn=()=>{
  navigation.navigate('login')
}

let handleSwipeIndexChange=(w)=>{
  setIndex(w)
  if(w===3){
    setdone(true);
  }
  else{
    setdone(false)
  }
}

let handlenext = () => {
  swiper.current.scrollBy(1);
};
  return (
  <View style={[flex(1),screenHeight(1)]}>
    <Swiper ref={swiper} loop={false} autoplay={false} onIndexChanged={handleSwipeIndexChange}  buttonWrapperStyle={{flex:1,justifyContent:'center',alignItems:'flex-end',flexdirection:'column',justifyContent:'space-around',marginRight:'10%',marginTop:'0%',marginLeft:'16%',marginRight:'-71%'}} style={styles.wrapper} showsButtons={true} dot={ <View style={{
      width:8,
      height:8,
      borderRadius:4,
      margin:3,
      backgroundColor:'white',
      bottom:-13,
      position:'relative',
      
      
    }} ></View>}
    activeDot={<View style={{
      width:11,
      height:11,
      borderRadius:7,
      margin:5,
      backgroundColor:'green',
      bottom:-13
     

    }}></View>}
     nextButton={<FontAwesome5 name={'caret-right'} style={{color:'#64ad64',fontSize:21,}}/>}
    prevButton={<FontAwesome5 name={'caret-left'} style={{color:'#64ad64',fontSize:21,}} onPress={()=>seteyeshow(!eyeshow)} />
    }
    >
      {/* {mapping onbarding screens with individual data} */}
    {
      onboardingdata.map((ob,index)=>{
        return(
          <View key={index}>
            <Onboarding heading={ob.heading} name={ob.name} details={ob.details} lottiedata={ob.lottiedata} number={ob.number}/>
          </View>
        )
      })
    }
    
     </Swiper>
    {/* {customized buttons } */}

    <View style={[screenHeight(100),styles.allCenter,styles.row,styles.spaceAroundVertical,marginPosition('0%'),styles.bglightblack]}>
    <TouchableOpacity style={[marginPosition('-16%',0,0,'0%')]}>
      <View>
        <Text style={[styles.green,fontSize(26)]} onPress={handleloginn}>Login</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={[marginPosition('-16%',0,0,'35%')]} >
      <View>
        {
       done ? <Text style={[styles.green,fontSize(26)]} onPress={handleloginn} >Done</Text>:
         <Text style={[styles.green,fontSize(26)]} onPress={handlenext}>Next</Text>}
      </View>
    </TouchableOpacity>
    </View>
    </View>
     

   
  )
}




