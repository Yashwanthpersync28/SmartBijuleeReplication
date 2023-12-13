import React, { useState } from 'react'
import { flex ,styles,heightValue,widthValue,radius,padding, position, fontSize, marginPosition} from '../../../../../../styles/Styles'
import { View ,Text, TouchableOpacity} from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import CardInfoone from './CardInfoone'
import Cardinfortwo from './Cardinfotwo'
import CardThree from './CardThree'
import Thankyoupage from './Thankyoupage'
import { useNavigation } from '@react-navigation/native'
const FeedbackCard = () => {

  const [next, setNext] = useState(true);
  const [name, setName] = useState(1);
  const [count,setcount]=useState(0)
  const navigation=useNavigation()
///for back button
 const handlebackbutton=()=>{
  setcount(count-1)
  setNext(true)
 }
 //to get user experience //
  const getUserExperience = (a) => {
    setName(a);
    setNext(false)
  };
  ///changed count value for Next button
 const handlecount=()=>{
  
    setcount(count+1)
    setNext(true)
  }
  
 const handleinputbox=(val)=>{
  if(val>2){
    setNext(false);
  }
  else{
    setNext(true)
  }
  
 }
  return (
    <View style={[flex(1)]}>
         <View style={[styles.positionRelative,styles.bggreen,{height:heightValue(3.2),width:widthValue(1.2)},radius(30)]}></View>
         <View style={[position(10), styles.positionAbsolute, styles.bggreyish, { height: heightValue(2.8), width: widthValue(1.2) }, radius(30), padding(15)]}>
        {count === 0 ? <CardInfoone getdatafromparent={getUserExperience}/> : null}
        {count === 1 ? <Cardinfortwo sendtocardtwo={name} getdatafromparent={getUserExperience} /> : null}
        {count === 2 ? <CardThree handleinputbox={handleinputbox}/> : null}
        {count === 3 ? <Thankyoupage /> : null}
      </View>
      <View style={[{width:widthValue(1.2),height:heightValue(8)},styles.row,styles.spaceBetween,marginPosition(40),styles.endVertical,{gap:60}]}>
      {count >0 && count < 3? <> 
          <View style={[{width:widthValue(3),height:heightValue(19)},{backgroundColor:'#29292e'},styles.allCenter,radius(30)]}>
                <TouchableOpacity  onPress={handlebackbutton}>
                    <View style={[styles.row]}>
                    <FontAwesome5Icon name='chevron-left' style={[styles.white,fontSize(15),marginPosition(4,5)]}/>
                          <Text style={[styles.white,fontSize(17)]}>Back</Text>
                    </View> 
                </TouchableOpacity>
            </View> 
            </> :null}
            {count <3 ? <>
            <View style={[{width:widthValue(3),height:heightValue(19)},{backgroundColor:next ?'#262f40':'#077227'},styles.allCenter,radius(30)]}>
                <TouchableOpacity disabled={next}  onPress={handlecount}>
                    <View style={[styles.row]}>
                          <Text style={[styles.white,fontSize(17)]}>Next</Text>
                         <FontAwesome5Icon name='chevron-right' style={[styles.white,fontSize(15),marginPosition(4,0,0,5)]}/>
                    </View>
                   
                </TouchableOpacity>
            </View>
            </>:null}
      </View>
    </View>
  )
}

export default FeedbackCard
