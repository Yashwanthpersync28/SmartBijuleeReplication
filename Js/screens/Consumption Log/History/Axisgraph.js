import React from 'react'
import {View,Dimensions} from "react-native"
import { VictoryAxis,VictoryChart ,VictoryBar,VictoryTooltip} from 'victory-native'
import { heightValue,marginPosition,styles,widthValue } from '../../../../styles/Styles'




const Axisgraph = ({name,xname,yname}) => {
let {height,width}=Dimensions.get('window')

  return (
    <View style={[marginPosition('-7%'),styles.allCenter,{width:widthValue(1.1)}]}>
    <VictoryChart domainPadding={{ x: width/10 }} height={height/2}>
    <VictoryAxis tickValues={[1,2,3,4]} tickFormat={name.map((d) => `${d.month}`)} style={{   
        axis: { stroke: "#262629" },
        ticks: { stroke: "black" },
        tickLabels: { fill: "white" },}}
    /> 
    {/* Y-axis */}
    <VictoryAxis
      dependentAxis
      tickFormat={(tick) => `$${tick / 1000}k`} 
    /> 
    <VictoryBar barRatio={0.4} labelComponent={<VictoryTooltip></VictoryTooltip>} data={name} x={xname} y={yname}
                style={{ data: { fill: '#3c3c42',} }}
                width={widthValue(1.2)} 
                cornerRadius={{ top: 7, bottom: 7 }}
            ></VictoryBar>
    </VictoryChart>
    </View>
  )
}

export default Axisgraph
