import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { fontSize, heightValue, styles, widthValue ,marginPosition,radius , setradius,setspace} from '../../../styles/Styles'
import Swiper from 'react-native-swiper'
import Todaycomp from './Todaycomp'
import { useRef ,useState,useEffect} from 'react';
import { obj } from '../GraphData/Graphdatas'
import Customhistory from '../Consumption Log/History/CustomHistory/Customhistory'
import Axisgraph from '../Consumption Log/History/Axisgraph'

const Exampledashboard = ({showpagination, showCustom, openfunc, marginss, sendtochild}) => {
  let [clickedcustom,setclickedcustom]=useState(false);
    let swiper=useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    
  
    const handleToggle = (index) => {
      setclickedcustom(false)
        if (swiper.current) {
          swiper.current.scrollBy(index - activeIndex, true);
          setActiveIndex(index);
          sendtochild(false)
         setclickedcustom(false)

        }
      };
let handlecustom=()=>{
  sendtochild(true)
  setclickedcustom(true)
  openfunc(true);
  setActiveIndex(0)
  // handleToggle(-2)
  setActiveIndex(0);


}

  return (
    <View style={[{height:heightValue(2),width:widthValue(1.1)}]}>

    <View style={[{height:heightValue(14),width:widthValue(1.1)},styles.allCenter]}>
   

         <View style={[styles.bgdashblue,styles.allCenter,styles.row,setspace(marginss),marginPosition('3%',0,'0%',0),{height:heightValue(24),width:widthValue(1.1)},radius(10)]}>
        {showCustom ? 
         <TouchableOpacity onPress={handlecustom}>
          
            <View style={[{height:heightValue(24),width:widthValue(5)},setradius(marginss),styles.allCenter,{backgroundColor: clickedcustom ? '#39763b' : '#29292e'}]}>
               <Text style={{  color: clickedcustom ? 'black' : '#ffffff' }}>Custom</Text>
            </View>
           </TouchableOpacity>:null}
           <TouchableOpacity onPress={() => handleToggle(0)}>
            <View style={[{height:heightValue(24),width:widthValue(5)},setradius(marginss),styles.allCenter,{backgroundColor: activeIndex===0 ? '#39763b' : '#29292e'}]}>
               <Text style={[{  color: activeIndex === 0 ? 'black' : '#ffffff' },fontSize(17)]}>Today</Text>
            </View>
           </TouchableOpacity>
          <TouchableOpacity onPress={() => handleToggle(1)}>
          <View style={[{height:heightValue(24),width:widthValue(5)},setradius(marginss),styles.allCenter,{backgroundColor: activeIndex===1 ? '#39763b' : '#29292e'}]}>
          <Text style={[{ color: activeIndex === 1 ? 'black' : '#ffffff' },fontSize(17)]}>Week</Text>
          </View>
          </TouchableOpacity>
         <TouchableOpacity onPress={() => handleToggle(2)}>
         <View style={[{height:heightValue(24),width:widthValue(5)},setradius(marginss),styles.allCenter,{backgroundColor: activeIndex===2 ? '#39763b' : '#29292e'}]}>
          <Text style={[{ color: activeIndex === 2 ? 'black' : '#ffffff' },fontSize(17)]}>Month</Text>
          </View>
         </TouchableOpacity>
        </View>
        
    </View> 
    {clickedcustom ? <Customhistory/>:
    <View style={[{height:heightValue(2.3),width:widthValue(1.1)},marginPosition(0,0,0,'0%')]}>

    <Swiper ref={swiper} showsPagination={showpagination} loop={false} onIndexChanged={(index)=>setActiveIndex(index)} buttonWrapperStyle={{flex:1,justifyContent:'center',alignItems:'flex-end',flexdirection:'column',justifyContent:'space-around',marginRight:'0%',marginTop:'0%',marginLeft:'0%',marginRight:'0%'}} style={styles.wrapper} showsButtons={false} dot={ <View style={{
      width:10,
      height:10,
      borderRadius:5,
      margin:3,
      backgroundColor:'white',
      bottom:0,
    }} ></View>}
     activeDot={<View style={{
      width:35,
      height:13,
      borderRadius:7,
      margin:5,
      backgroundColor:'green',
      bottom:0
     

    }}></View>}
    
    >
       {showCustom ? <Axisgraph name={obj.digits} xname={'month'} yname={'earnings'}/>: <Todaycomp name={obj.digits} xname={'month'} yname={'earnings'} showCustom={showCustom}/>}
       {showCustom ? <Axisgraph name={obj.days} xname={'month'} yname={'earnings'}/>: <Todaycomp name={obj.days} xname={'month'} yname={'earnings'} showCustom={showCustom}/>}
       {showCustom ? <Axisgraph name={obj.months} xname={'month'} yname={'earnings'}/>: <Todaycomp name={obj.months} xname={'month'} yname={'earnings'} showCustom={showCustom}/> }
        
    </Swiper>
    </View>}
        
        
    </View>
  )
}

export default Exampledashboard

