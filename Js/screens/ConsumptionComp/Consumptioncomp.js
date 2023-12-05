import React from 'react'
import {View,Text, Dimensions} from 'react-native'
import { styles,heightValue,widthValue,fontSize, marginPosition } from '../../../styles/Styles';
import { VictoryBar,VictoryChart,VictoryTheme } from 'victory-native';
const Consumptioncomp = ({heading}) => {
    let data=[{
        month:1,
        earnings:5
    },
   
]
// const {width,height}=Dimensions.get("screen")
  return (
    <View style={[styles.column]}>
            <View style={[styles.row,styles,{height:heightValue(15),width:widthValue(1.1)}]}>
             <Text style={[{width:widthValue(1.7)},marginPosition('5%',0,0,'5%'),fontSize(15),styles.white]}>{heading}</Text>   
            <Text style={[fontSize(15),styles.white ,marginPosition('5%',0,0,'10%')]}>0 Units</Text>   
            </View>
            <View style={[{height:heightValue(21),width:widthValue(1.1),},styles.allCenter,marginPosition('-2%')]}>
            
            <VictoryBar horizontal data={data} x='month' y='earnings'
                    width={widthValue(0.9)} height={heightValue(17)} style={{ data: { fill: '#3c3c42', height: 100 } }} barWidth={heightValue(50)} cornerRadius={{ top: 8, bottom: 8 }}></VictoryBar>

           
            </View>
        </View>
  )
}

export default Consumptioncomp
