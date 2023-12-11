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
             <View style={[{height:heightValue(4)},styles.centerVertical,styles.row]}>
               <View style={[styles.column,flex(1),styles.allCenter]}>
                {data.map((data,index)=>{
                  return(
                    <View key={index} style={[{height:heightValue(14)},styles.allCenter]}>
                      <Text style={[fontSize(17),styles.white]}>{data.heading}</Text>
                    </View>
                  )
                })}

               </View>
               <View style={[styles.column,styles.allCenter,{height:heightValue(4),width:widthValue(3)}]}>
                    <View style={[styles.column,styles.allCenter,{height:heightValue(14),width:widthValue(3)}]}>
                    <Emojifunc size={20} afterpressed={50} getdatafromparent={getdatafromparent}/>
                    </View>
                    <View style={[styles.column,styles.allCenter,{height:heightValue(14),width:widthValue(3)}]}>
                    <Emojifunc size={20} afterpressed={50} getdatafromparent={getdatafromparent}/>
                    </View>
                    <View style={[styles.column,styles.allCenter,{height:heightValue(14),width:widthValue(3)}]}>
                    <Emojifunc size={20} afterpressed={50} getdatafromparent={getdatafromparent}/>
                    </View>

               </View>
             </View>
    </View>
  )
}

export default Cardinfortwo