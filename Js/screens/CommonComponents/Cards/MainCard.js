import React, { useState } from 'react'
import { View,Text ,Dimensions} from 'react-native'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from 'victory-native';
import { heightValue,widthValue,styles,radius,marginPosition,fontSize,lineHeight, setmarginicon, setfontsize, setdisplay} from '../../../../styles/Styles';

const MainCard = ({name,secondname,showsingleline,data,xaxis,yaxis}) => {
 let {height,width}=Dimensions.get('window') 

  return (
    <View style={[{height:heightValue(2),width:widthValue(1.1)},styles.bgdashblue,radius(15),marginPosition('3%',0,0,'5%')]}>
    <View style={[{height:heightValue(18),width:widthValue(1.1)},styles.centerVertical]}>
         <View style={[styles.row,{marginLeft:widthValue(12)},styles.selfStart]}>
           <Text style={[styles.white,fontSize(20)]}>{name}</Text>
           <Text style={[styles.green,fontSize(20),{marginLeft:widthValue(50)}]}>{secondname}</Text>
        </View>
    </View>
    <View style={[{height:heightValue(2.7)},marginPosition(0),styles.allCenter]}>
    <VictoryChart height={height / 2.2} domainPadding={{ x: 10 }} > 
                 <VictoryGroup offset={15} colorScale={['#3c3c42', '#3c3c42']}>
                    <VictoryBar x={xaxis} y={yaxis} cornerRadius={{ top: 6, bottom: 6 }}data={data} barWidth={10}/>
                    {showsingleline ? null:
                    <VictoryBar x={xaxis} y={yaxis} cornerRadius={{ top: 6, bottom: 6 }}data={data} barWidth={10}/>
                    }
                </VictoryGroup>
                <VictoryAxis
                    style={{
                        axis: { stroke: 'transparent' },
                        ticks: { stroke: 'transparent' },
                        tickLabels: {
                            fill: 'white', fontSize: 9
                        }
                    }}
                />
            </VictoryChart>
    </View>
        <View style={[styles.white,styles.centerHorizontal,setmarginicon(showsingleline),marginPosition('3%')]}>

            <Text style={[styles.white,fontSize(10)]}>(Click on the chart to see the value)</Text>
        </View>
        <View style={[styles.white,styles.selfStart,styles.column,marginPosition(0,0,0,'8%')]}>
               <View style={[styles.row,setdisplay(showsingleline),styles.centerHorizontal]}>
                    <Text style={[styles.gray,fontSize(15)]}>?</Text>
                    <Text style={[styles.white,fontSize(10),lineHeight(15),marginPosition(0,0,0,'3%')]}>Last Week Consumption (Units)</Text>
               </View>
               <View style={[styles.row,styles.centerHorizontal]}>
                    <Text style={[styles.green,setfontsize(showsingleline)]}>?</Text>
                    <Text style={[styles.green,fontSize(11),marginPosition(0,0,0,'3%')]}>Current Week Consumption (Units) </Text>
               </View>
        </View>
    </View>
  )
}

export default MainCard
