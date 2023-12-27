import React,{useState,useEffect} from 'react'
import {View,Dimensions} from "react-native"
import { VictoryAxis,VictoryChart ,VictoryBar,VictoryTooltip} from 'victory-native'
import {marginPosition,styles,widthValue } from '../../../../styles/Styles'
import { useSelector } from 'react-redux'




const Axisgraph = ({name,xname,yname}) => {

  const [numbers, setNumbers] = useState(name);
 const darkMode = useSelector((state)=>state.system.darkMode)

///for changing data values for every 5 sec
  // useEffect(() => {
  //     const intervalId = setInterval(() => {
  //     const newEarningsData = numbers.map(item => ({
  //       month: item.month,
  //       earnings: Math.floor(Math.random() * 100),
  //     }));
  //     setNumbers(newEarningsData);
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, [numbers]);

const {height,width}=Dimensions.get('window')
const fixedBar=-1
  return (
    <View style={[marginPosition('-7%',0,0,5),styles.allCenter,{width:widthValue(1.1)}]}>
    <VictoryChart domainPadding={{ x: width/10 }} height={height/2}>
          <VictoryBar
                    data={name.map(d => ({ x: d[xname], y: fixedBar }))}
                    style={{ data: { fill: darkMode ? '#cfcccc' : '#3c3c42' }}}
                    barWidth={widthValue(28)}
                    cornerRadius={{ top: 0 ,bottom:7 }}
                />
          <VictoryAxis  orientation='bottom' tickValues={[1,2,3,4]}  style={{   
                     axis: { stroke: "#262629" },
                    ticks: { stroke: "black" } ,
                    tickLabels: { fill: darkMode?'black':'white' , fontSize: 9},
       
               }}
            /> 
   {/* tickFormat={name.map((d) => `${d.month}`)} */}
          <VictoryAxis
          // orientation='bottom'
              dependentAxis
              // tickFormat={(tick) => `$${tick / 1000}`} 
              style={{
                tickLabels: { fill: darkMode?'black':'white' , fontSize: 9},
              }}
             /> 
          <VictoryBar barRatio={0.4} labelComponent={<VictoryTooltip></VictoryTooltip>} data={numbers} x={xname} y={yname}
                style={{ data: { fill: darkMode ? '#cfcccc' : '#3c3c42', height: ({ datum }) => (datum[yname] / fixedBar) * fixedBar,} }}
                width={widthValue(1.2)} 
                cornerRadius={{ top: 0, bottom: 7 }}
            ></VictoryBar>
    </VictoryChart>
    
    </View>
  )
}

export default Axisgraph
