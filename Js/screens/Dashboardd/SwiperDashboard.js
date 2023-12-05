import React, { useRef ,useState} from 'react'
import Todaycomp from './Todaycomp'
import Swiper from 'react-native-swiper'
import { View ,TouchableOpacity} from 'react-native'
// import { flex, } from '../../../styles/Styles'
import { styles,fontSize,position, marginPosition, screenHeight, flex } from '../../../styles/Styles';
import Consumptioncomp from '../ConsumptionComp/Consumptioncomp';
import { Text } from 'victory-native';

const SwiperDashboard = (screentwoo) => {
  let swiper=useRef;
  const [index, setIndex] = useState(0);

  let handleSwipeIndexChange=(w)=>{
    setIndex(w)
   
  }
  // handlefunc=()=>{
  //   if(screentwoo){
  //     swiper.current.scrollBy(index+1)
  //   }
  //   else{
  //     console.log("hi");
  //   }
  // }
  // handlefunc()
  
    let name='(Click on the chart to see the values)'
  return (
    <View style={[styles.bgRed,marginPosition('10%')]}>
      <Text style={[styles.green,fontSize(20)]}>where are you</Text>
    </View>
   
    /* <Swiper  onIndexChanged={handleSwipeIndexChange} buttonWrapperStyle={{flex:1,justifyContent:'center',alignItems:'flex-end',flexdirection:'column',justifyContent:'space-around',marginRight:'0%',marginTop:'0%',marginLeft:'0%',marginRight:'0%'}} style={styles.wrapper} showsButtons={false} dot={ <View style={{
      width:8,
      height:8,
      borderRadius:4,
      margin:3,
      backgroundColor:'white',
      bottom:0,
      
      
      
    }} ></View>}
    activeDot={<View style={{
      width:11,
      height:11,
      borderRadius:7,
      margin:5,
      backgroundColor:'green',
      bottom:0
     

    }}></View>}
    >
        <Todaycomp/>
        <Consumptioncomp/>
        <Consumptioncomp/>
  </Swiper> */
        

  )
}

export default SwiperDashboard
