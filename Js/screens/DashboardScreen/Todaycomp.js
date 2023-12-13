import React,{useState,useEffect} from 'react'
import {View,Text,Dimensions} from "react-native"
import { VictoryBar,VictoryTooltip,VictoryAxis, VictoryChart,VictoryTheme } from 'victory-native'
import { marginPosition, styles, widthValue } from '../../../styles/Styles';

const Todaycomp = ({name,xname,yname}) => {
  const [numbers, setNumbers] = useState(name);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newEarningsData = numbers.map(item => ({
        month: item.month,
        earnings: Math.floor(Math.random() * 100),
      }));
      setNumbers(newEarningsData);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [numbers]);

let {height,width}=Dimensions.get('window')
const fixedBarHeight=100;
  return (
    <View style={[marginPosition('-7%'),styles.allCenter,{width:widthValue(1.1)}]}>
            <VictoryChart domainPadding={{ x: width/10 }} height={height/2.3}> 
            <VictoryBar
                    data={numbers.map(d => ({ x: d[xname], y: fixedBarHeight }))}
                    style={{ data: { fill: '#3c3c42' } }}
                    barWidth={widthValue(28)}
                    cornerRadius={{ top: 6 }}
                />
            <VictoryBar barRatio={0.4} labelComponent={<VictoryTooltip></VictoryTooltip>} data={numbers} x={xname} y={yname}
                style={{ data: { fill: '#64ad64', height: ({ datum }) => (datum[yname] / fixedBarHeight) * fixedBarHeight,} }}
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
