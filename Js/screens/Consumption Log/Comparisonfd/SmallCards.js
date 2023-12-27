import React from 'react'
import {View,Text} from 'react-native'
import { styles,heightValue,widthValue,radius,fontSize,marginPosition } from '../../../../styles/Styles'
import { VictoryChart,VictoryBar } from 'victory-native'
import Consumptioncomp from '../../ConsumptionComp/Consumptioncomp'
import { useSelector } from 'react-redux'
const SmallCards = ({day,progress}) => {

  const darkMode = useSelector((state)=>state.system.darkMode)

    
    let data=[{
        month:1,
        earnings:5
    },
   
]

  return (
    <View style={[darkMode?styles.bgWhite:styles.bgdashblue,{height:heightValue(10),width:widthValue(2.3)},radius(8),styles.column]}>
            <View style={[{height:heightValue(18),width:widthValue(2.3)},styles.allCenter,styles.row]}>
              <Text style={[fontSize(20),{color: progress ? darkMode ?'#64ad64' :'#ffffff' : darkMode ? '#64ad64':"#ffffff"}]}>{day}</Text>
              {progress ? 
              <Text style={[fontSize(10),{marginLeft:widthValue(60)},darkMode?styles.black:styles.white,]}>[InProgress]</Text>:<Text style={{display:'none'}}></Text>}
            </View>
            <View style={[{height:heightValue(18),width:widthValue(2.3)},styles.allCenter,styles.column]}>
            <View style={[{width:widthValue(2.7),},styles.row,styles.spaceBetween,marginPosition(0,0,0)]}>
              <Text style={[fontSize(10),darkMode?styles.black:styles.white,]}>Consumption</Text>
              <Text style={[fontSize(10),darkMode?styles.black:styles.white]}>Units</Text>
            </View>
            <View style={[{height:heightValue(21),width:widthValue(2.6),},styles.allCenter,marginPosition(-10)]}>
            
            <VictoryBar horizontal data={data} x='month' y='earnings'
                    width={widthValue(1.5)} height={heightValue(17)} style={{ data: { fill: darkMode ? '#cfcccc' : '#3c3c42', height: 100 } }} barWidth={heightValue(65)} cornerRadius={{ top: 6, bottom: 6 }}></VictoryBar>

           
            </View>
            
            </View>
            <View >

            </View>
       </View>
  )
}

export default SmallCards
