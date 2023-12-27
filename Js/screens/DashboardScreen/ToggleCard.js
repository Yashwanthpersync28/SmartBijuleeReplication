import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { fontSize, heightValue, styles, widthValue ,marginPosition,radius , setradius,setspace, fontWeight} from '../../../styles/Styles'
import Swiper from 'react-native-swiper'
import Todaycomp from './Todaycomp'
import { useRef , useState } from 'react';
import { useSelector } from 'react-redux'

const ToggleCard = ({showpagination, marginss , month , today , week}) => {
  const darkMode = useSelector((state)=>state.system.darkMode)
    const swiper=useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    
  
    const handleToggle = (index) => {
        if (swiper.current) {
          swiper.current.scrollBy(index - activeIndex, true);
          setActiveIndex(index);
        }
      };

  return (
    <View style={[{height:heightValue(2),width:widthValue(1.1)}]}>

    <View style={[{height:heightValue(14),width:widthValue(1.1)},styles.allCenter]}>
   

         <View style={[darkMode?styles.bgWhite:styles.bgdashblue,styles.allCenter,styles.row,setspace(marginss),marginPosition(8),{height:heightValue(24),width:widthValue(1.1)},radius(10)]}>
           <TouchableOpacity onPress={() => handleToggle(0)}>
            <View style={[{height:heightValue(24),width:widthValue(5)},setradius(marginss),styles.allCenter,{backgroundColor: activeIndex===0 ? '#64ad64'  : darkMode ? '#ffffff' : '#29292e'}]}>
               <Text style={[{  color: activeIndex === 0 ? darkMode ? '#ffffff': 'black' : darkMode ? 'black' : '#ffffff' },fontSize(19),fontWeight(400)]}>Today</Text>
            </View>
           </TouchableOpacity>
          <TouchableOpacity onPress={() => handleToggle(1)}>
          <View style={[{height:heightValue(24),width:widthValue(5)},setradius(marginss),styles.allCenter,{backgroundColor: activeIndex===1 ? '#64ad64'  : darkMode ? '#ffffff' : '#29292e'}]}>
          <Text style={[{ color: activeIndex === 1 ? darkMode ? '#ffffff': 'black' : darkMode ? 'black' : '#ffffff' },fontSize(19),fontWeight(400)]}>Week</Text>
          </View>
          </TouchableOpacity>
         <TouchableOpacity onPress={() => handleToggle(2)}>
         <View style={[{height:heightValue(24),width:widthValue(5)},setradius(marginss),styles.allCenter,{backgroundColor: activeIndex===2 ? '#64ad64'  : darkMode ? '#ffffff' : '#29292e'}]}>
          <Text style={[{ color: activeIndex === 2 ? darkMode ? '#ffffff': 'black' : darkMode ? 'black' : '#ffffff' },fontSize(19),fontWeight(400)]}>Month</Text>
          </View>
         </TouchableOpacity>
        </View>
        
    </View> 
   
    <View style={[{height:heightValue(2.3),width:widthValue(1.1)},]}>

    <Swiper ref={swiper} showsPagination={showpagination} loop={false} onIndexChanged={(index)=>setActiveIndex(index)} buttonWrapperStyle={{flex:1,justifyContent:'center',alignItems:'flex-end',flexdirection:'column',justifyContent:'space-around',marginRight:'0%',marginTop:'0%',marginLeft:'0%',marginRight:'0%'}} style={styles.wrapper} showsButtons={false} dot={ <View style={{
      width:10,
      height:10,
      borderRadius:5,
      margin:3,
      backgroundColor: darkMode ? 'gray' : 'white',
      bottom:-5,
    }} ></View>}
     activeDot={<View style={{
      width:35,
      height:13,
      borderRadius:7,
      margin:5,
      backgroundColor:'#64ad64',
      bottom:-5
     

    }}></View>}
    
    >
   <Todaycomp name={today} xname={'x'} yname={'y'} />
   <Todaycomp name={week} xname={'x'} yname={'y'}/>
   <Todaycomp name={month} xname={'x'} yname={'y'}/> 
        
    </Swiper>
    </View>
        
        
    </View>
  )
}

export default ToggleCard

