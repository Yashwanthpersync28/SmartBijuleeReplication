import React, { useState } from 'react'
import { flex,heightValue,fontSize,styles, marginPosition, widthValue, borderWidth, borderColor, padding,  } from '../../../../../../styles/Styles'
import {View,Text} from 'react-native'
import Commonheading from './Commonheading';
import Emojifunc from './Emoji/Emojifunc';

const Cardinfortwo = ({sendtocardtwo,getdatafromparent}) => {
let data=[{heading:"Clarity of info",id:1,},
{heading:"Ease of Navigation",id:2,},
{heading:"Overall all look & feel",id:3},];
  return (
   <View style={[flex(1)]}>
            <Commonheading name={sendtocardtwo}/>
             <View style={[{height:heightValue(5)},styles.centerVertical,styles.row]}>
               <View style={[styles.column,flex(1)]}>
                {data.map((data,index)=>{
                  return(
                    <View key={index} style={[{height:heightValue(14)},styles.allCenter]}>
                      <Text style={[fontSize(13),styles.white]}>{data.heading}</Text>
                    </View>
                  )
                })}

               </View>
               <View style={[{height:heightValue(5),width:widthValue(3)}]}>
                    <View style={[styles.allCenter,{height:heightValue(14),width:widthValue(3)}]}>
                    <Emojifunc size={30} afterpressed={45} getdatafromparent={getdatafromparent} val={3} right={10}/>
                    </View>
                    <View style={[styles.allCenter,{height:heightValue(14),width:widthValue(3)}]}>
                    <Emojifunc size={30} afterpressed={45} getdatafromparent={getdatafromparent} val={3} right={10}/>
                    </View>
                    <View style={[styles.allCenter,{height:heightValue(14),width:widthValue(3)}]}>
                    <Emojifunc size={30} afterpressed={45} getdatafromparent={getdatafromparent} val={3} right={10}/>
                    </View>

               </View>
             </View>
    </View>
  )
}

export default Cardinfortwo