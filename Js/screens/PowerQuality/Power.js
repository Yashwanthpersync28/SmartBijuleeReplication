import React from 'react'
import { View,Text,ScrollView } from 'react-native'
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper'
import Header from '../CommonComponents/Cards/Header'
import { flex,heightValue,widthValue,styles, marginPosition, radius, fontSize, borderWidth, borderColor } from '../../../styles/Styles'
import Cardcolors from '../CommonComponents/Cards/Cardcolors'
import Menu from '../CommonComponents/Cards/Menu';

function Power({navigation}) {
    let arr=[{time:'3pm'},{time:'3pm'},{time:'3pm'},{time:'3pm'},{time:'3pm'}]
   
  return (
    <DrawerScreenWrapper>  
    <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack]}>
    <Menu navigation={navigation}/>
    <ScrollView> 
         <Header heading={"Power"} continueprop={"Qulaity"} details={"How is the quality of power that you are reaceiving ?"} columnwise={false} display={false}/>
         <Cardcolors name={'Peak'} secondname={'Voltage'} units={'Voltage'} time={'4 pm'} monthshow={true} value={'0'} month={false}/>
         <View style={[{height:heightValue(2.3),width:widthValue(1)},styles.allCenter,marginPosition('3%')]}>
            <View style={[styles.bgdashblue,{height:heightValue(2.3),width:widthValue(1.1)},radius(15),styles.allCenter,styles.column]}>
            <View style={[{height:heightValue(2.6),width:widthValue(1.3)}]}>
             <View style={[{height:heightValue(20)},styles.row,styles.centerHorizontal]}>
                <Text style={[styles.white,fontSize(18)]}>Voltage</Text>
                <Text style={[styles.green,{marginLeft:widthValue(40)},fontSize(18)]}>Hourly Trend</Text>
             </View>
             <View style={[{height:heightValue(20)},styles.row,styles.centerHorizontal,borderWidth(0,0,0,0.2),borderColor('grey')]}>
                <Text style={[styles.white,fontSize(18)]}>LogHour</Text>
                <Text style={[styles.white,{marginLeft:widthValue(20)},fontSize(18)]}>Voltage</Text>
                <Text style={[styles.white,{marginLeft:widthValue(20)},fontSize(18)]}>Freq</Text>
                <Text style={[styles.white,{marginLeft:widthValue(6)},fontSize(18)]}>MD</Text>

             </View>
            {
                arr.map((a,index)=>{
                    return (
                        <View key={index} style={[{height:heightValue(20)},styles.row,styles.centerHorizontal,borderWidth(0,0,0,0.2),borderColor('grey')]}>
                        <Text style={[styles.gray]} >{a.time}</Text>
                      </View>
                    )
                })
            }
            <View style={[{height:heightValue(20),width:widthValue(1.3)},styles.allCenter]}>
                <Text style={[fontSize(12),styles.green]}>MD-Maximum Demand,Freq-Frequency</Text>
            </View>
            </View>


            </View>
            </View>
            <View style={[{height:heightValue(8),width:widthValue(1)},styles.row,styles.allCenter]}>
            <View style={[{height:heightValue(8),width:widthValue(1.1)},styles.row,styles.spaceBetween,marginPosition('-4%')]}>
                <View style={[{height:heightValue(17),width:widthValue(2.8)},styles.bgdashblue,styles.allCenter,radius(10)]}>
                  <Text style={[styles.green,fontSize(20)]}>Data Table</Text>
                </View>
                <View style={[{height:heightValue(17),width:widthValue(2.8)},styles.bggreen,styles.allCenter,radius(10)]}>
                 <Text style={[styles.white,fontSize(20)]}>Graph</Text>
                </View>

        </View>
            
         </View>
         </ScrollView>
    </View>
  </DrawerScreenWrapper>
  )
}

export default Power
