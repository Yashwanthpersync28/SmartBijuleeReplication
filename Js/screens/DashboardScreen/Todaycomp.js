import React,{useState,useEffect} from 'react'
import {View,Text,Dimensions} from "react-native"
import { VictoryBar,VictoryTooltip,VictoryAxis, VictoryChart,VictoryTheme } from 'victory-native'
import { marginPosition, styles, widthValue } from '../../../styles/Styles';
import { useSelector } from 'react-redux';

const Todaycomp = ({name,xname,yname}) => {
  const darkMode = useSelector((state)=>state.system.darkMode)

  // const [numbers, setNumbers] = useState(name);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const newEarningsData = numbers.map(item => ({
  //       month: item.month,
  //       earnings: Math.floor(Math.random() * 100),
  //     }));
  //     setNumbers(newEarningsData);
  //   }, 5000);

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, [numbers]);

let {height,width}=Dimensions.get('window')
const fixedBarHeight=-1;
  return (
    <View style={[marginPosition('-10%'),styles.allCenter,{width:widthValue(1.1)}]}>
            <VictoryChart domainPadding={{ x: width/16 }} height={height/2.2}> 
            {/* <VictoryBar
                    data={name.map(d => ({ x: d[xname], y: fixedBarHeight }))}
                    style={{ data: { fill: darkMode ? '#cfcccc' : '#3c3c42' } }}
                    barWidth={widthValue(28)}
                    cornerRadius={{ top: 6 }}
                /> */}
            <VictoryBar barRatio={0.4} labelComponent={<VictoryTooltip></VictoryTooltip>} data={name} x={xname} y={yname}
                style={{ data: { fill: darkMode ? '#cfcccc' : '#3c3c42', height: ({ datum }) => (datum[yname] / fixedBarHeight) * fixedBarHeight,} }}
                width={widthValue(1.2)} 
                cornerRadius={{ top: 6, bottom: 6 }}
            ></VictoryBar>
           
                 <VictoryAxis orientation='bottom' style={{
                    axis: { stroke: "transparent" },
                    ticks: { stroke: "transparent" },
                    tickLabels: { fill: darkMode ? 'black' : 'white' ,fontSize: 11},
                }} ></VictoryAxis>
            </VictoryChart>
        </View >
  )
}

export default Todaycomp
