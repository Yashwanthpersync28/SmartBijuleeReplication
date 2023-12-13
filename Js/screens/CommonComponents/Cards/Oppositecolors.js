import React from 'react'
import { View,Text,Dimensions } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { heightValue,widthValue,marginPosition,styles,fontSize ,radius} from '../../../../styles/Styles';
import { VictoryChart,VictoryBar,VictoryAxis } from 'victory-native';
let odd=[
    {month:1,earnings:2},{month:3,earnings:4},{month:5,earnings:2},{month:7,earnings:1},{month:9,earnings:2}]
   let even=[{month:2,earnings:3},{month:4,earnings:5},{month:6,earnings:2},{month:8,earnings:3},{month:10,earnings:5},]
const Oppositecolors = () => {
    let {height,width}=Dimensions.get('window') 

  return (
    <View style={[{height:heightValue(7.3),width:widthValue(1.1)},marginPosition('3%',0,'5%','5%'),styles.bgdashblue,radius(10)]}>
    <View style={[styles.row]}>
    <View style={[styles.column,{width:widthValue(3.5),height:heightValue(7)},styles.centerVertical,marginPosition(0,0,0,15)]}>
       <FontAwesome5Icon name='chevron-up' style={[styles.lightgreen,fontSize(15)]}/>
        <Text style={[styles.green,fontSize(25)]}>0</Text>
        <Text style={[styles.white,fontSize(12)]}>Units</Text>
        </View>  
         <View style={[styles.column]}>
             
                 <View style={[styles.row,marginPosition('5%',0,'0%','5%'),styles.selfStart]}>
                   <Text style={[styles.white,fontSize(20)]}>Average</Text>
                   <Text style={[styles.green,fontSize(20),{marginLeft:widthValue(50)}]}>Consumption</Text>
                 </View> 
               
               <View style={[{height:heightValue(9)},styles.selfStart]}>
               <View style={[{height:heightValue(9),width:widthValue(1.4),},marginPosition('-17%',0,0,'-10%'),styles.selfStart]}>
              <VictoryChart domainPadding={{ x: width/3 }} height={height/5.4}>      
               <VictoryBar barWidth={13} style={{data:{fill:"#64ad64", width:8}}} cornerRadius={{top:7}} data={odd} x={'month'} y={'earnings'}></VictoryBar>
               <VictoryBar barWidth={13} style={{data:{fill:"grey", width:8}}} cornerRadius={{top:7}} data={even} x={'month'} y={'earnings'}></VictoryBar>
                <VictoryAxis style={{
                    axis: { stroke: "transparent" },
                    ticks: { stroke: "transparent" },
                    tickLabels: { fill: "transparent" },
                   }} ></VictoryAxis>
               </VictoryChart>  
           
            </View>
               </View>
         </View>
      

    
    </View>
    </View> 
  )
}

export default Oppositecolors
