import React from 'react'
import {View,Text,Dimensions} from "react-native"
import { VictoryBar,VictoryTooltip,VictoryAxis, VictoryChart,VictoryTheme } from 'victory-native'
import { marginPosition, styles, widthValue } from '../../../styles/Styles';

const Todaycomp = ({name,xname,yname}) => {

let {height,width}=Dimensions.get('window')

  return (
    <View style={[marginPosition('-7%'),styles.allCenter,{width:widthValue(1.1)}]}>
            <VictoryChart domainPadding={{ x: width/10 }} height={height/2.3}> 
            <VictoryBar barRatio={0.4} labelComponent={<VictoryTooltip></VictoryTooltip>} data={name} x={xname} y={yname}
                style={{ data: { fill: '#3c3c42',} }}
                width={widthValue(1.2)} 
                cornerRadius={{ top: 7, bottom: 7 }}
            ></VictoryBar>
           
                 <VictoryAxis style={{
                    axis: { stroke: "transparent" },
                    ticks: { stroke: "transparent" },
                    tickLabels: { fill: "white" },
                }} ></VictoryAxis>
            </VictoryChart>
        </View >
  )
}

export default Todaycomp
