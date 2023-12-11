import React, { useState } from 'react'
import { flex ,styles,heightValue,widthValue,radius,padding, position, fontSize, marginPosition} from '../../../../../../styles/Styles'
import { View ,Text, TouchableOpacity} from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import CardInfoone from './CardInfoone'
import Cardinfortwo from './Cardinfotwo'
import CardThree from './CardThree'
import Thankyoupage from './Thankyoupage'
const FeedbackCard = () => {
  const [next, setNext] = useState(0);
  const [name, setName] = useState(1);
  const[submit,setsubmit]=useState(false);
  const [count,setcount]=useState(0)
 const [isDisabled,setIsDisabled]=useState(true)
  const getUserExperience = (a) => {
    setName(a);
  };
  // const handlecount=()=>{
  //   console.warn(name)
  //   setcount(count+1)
  //   }

  // const handleCount = () => {
  //   setNext(next + 1);
  //   if(next===3){
  //     setsubmit(!true)
  //   }
  // };
  return (
    <View style={[flex(1)]}>
         <View style={[styles.positionRelative,styles.bggreen,{height:heightValue(3.2),width:widthValue(1.2)},radius(30)]}></View>
         <View style={[position(10), styles.positionAbsolute, styles.bggreyish, { height: heightValue(2.8), width: widthValue(1.2) }, radius(30), padding(15)]}>
        {count === 0 ? <CardInfoone getdatafromparent={getUserExperience}/> : null}
        {count === 1 ? <Cardinfortwo sendtocardtwo={name} getdatafromparent={getUserExperience} /> : null}
        {count === 2 ? <CardThree /> : null}
        {count === 3 ? <Thankyoupage /> : null}
      </View>
      <View style={[{width:widthValue(1.2),height:heightValue(8)},styles.row,styles.spaceBetween,marginPosition(40),styles.endVertical,{gap:60}]}>
      {count >0 ? <> 
          <View style={[{width:widthValue(3),height:heightValue(17)},{backgroundColor:'#29292e'},styles.allCenter,radius(30)]}>
                <TouchableOpacity  onPress={()=>setcount(count-1)}>
                    <View style={[styles.row]}>
                    <FontAwesome5Icon name='chevron-left' style={[styles.white,fontSize(15),marginPosition(4,5)]}/>
                          <Text style={[styles.white,fontSize(17)]}>Back</Text>
                    </View> 
                </TouchableOpacity>
            </View> 
            </> :null}
            <View style={[{width:widthValue(3),height:heightValue(17)},{backgroundColor:isDisabled ?'#077227':'#29292e'},styles.allCenter,radius(30)]}>
                <TouchableOpacity   onPress={()=>setcount(count+1)}>
                    <View style={[styles.row]}>
                          <Text style={[styles.white,fontSize(17)]}>Next</Text>
                         <FontAwesome5Icon name='chevron-right' style={[styles.white,fontSize(15),marginPosition(4,0,0,5)]}/>
                    </View>
                   
                </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}

export default FeedbackCard
