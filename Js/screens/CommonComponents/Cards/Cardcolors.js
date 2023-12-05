import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { View,Text,Dimensions } from 'react-native'
import { VictoryBar,VictoryChart ,VictoryAxis,VictoryTheme, VictoryLine} from 'victory-native';
import { widthValue,heightValue ,styles,fontSize,marginPosition,radius, setwidthvalue} from '../../../../styles/Styles';

const Cardcolors = ({name,secondname,units,time, month, monthshow ,value}) => {

       let odd=[{month:1,earnings:2},{month:3,earnings:4},{month:5,earnings:2},{month:7,earnings:1},{month:9,earnings:2}]
       let even=[{month:2,earnings:3},{month:4,earnings:5},{month:6,earnings:2},{month:8,earnings:3},{month:10,earnings:5},]
       let {height,width}=Dimensions.get('window') 


  return (
    <View style={[{height:heightValue(7.3),width:widthValue(1.1),},marginPosition('3%',0,0,'5%'),styles.bgdashblue,radius(10)]}>
      <View style={[styles.row]}>
         <View style={[styles.column]}>
              {/* <View style={[styles.bgDarkBlue,{height:heightValue(20),width:widthValue(1.8)},styles.centerVertical,styles.column]}> */}
                 <View style={[styles.row,marginPosition('5%',0,0,'5%'),styles.selfStart]}>
                   <Text style={[styles.white,fontSize(20)]}>{name}</Text>
                   <Text style={[styles.green,fontSize(20),{marginLeft:widthValue(50)}]}>{secondname}</Text>
                 </View> 
               {/* </View> */}
               <View style={[{height:heightValue(9)},styles.selfStart]}>
               <View style={[{height:heightValue(9),width:widthValue(1.6)},marginPosition('-20%',0,0,'-10%'),styles.selfStart]}>
                <VictoryChart domainPadding={{ x: width/3 }} height={height/5.3}>      
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
        <View style={[styles.column,{width:widthValue(2.8),height:heightValue(7.3),justifyContent:'center',alignItems:'center'},marginPosition(0,0,0,'5%')]}>
        <View style={[styles.row,{height:heightValue}]}>
          {monthshow ? 
          <Text style={[styles.white,marginPosition(0,0,'2%','3%'),fontSize(10)]}>{time}</Text>:
              <View style={[{height:heightValue(30),width:widthValue(12)}]}></View> }
          <View style={[styles.column]}>
        <FontAwesome5Icon name='chevron-up' style={[styles.lightgreen,fontSize(15),marginPosition(0,0,0,'5%')]}/>
        <Text style={[styles.green,fontSize(25)]}>{value}</Text>
        </View>

        </View>
        <Text style={[styles.white,fontSize(13),{marginLeft:setwidthvalue(month)}]}>{units}</Text>
       
        </View>

    
    </View>
    </View>
  )
}

export default Cardcolors
