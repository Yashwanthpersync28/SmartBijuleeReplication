import React from 'react';
import { View } from 'react-native';
import { VictoryPie, VictoryLabel } from 'victory-native';
import Svg, { Circle } from 'react-native-svg';
import { styles,fontSize,heightValue,widthValue } from '../../../../styles/Styles';
import { useSelector } from 'react-redux';
// import { styles, fontSize, heightValue, widthValue } from '../Utils/Styles';


const Pychart = () => {
  const darkMode = useSelector((state)=>state.system.darkMode)

    const data = [{ x: 1, y: 120 }];

    const chartSize = widthValue(5); // Size of the chart container
    const innerRadius = chartSize * 0.35; // Adjust inner radius for donut chart
    const labelRadius = chartSize * 0.35; // Adjust label radius for space between pie and label

    return (
        <View style={[styles.allCenter,]}>
            <Svg width={chartSize} height={chartSize}>
                {/* Background circle */}
                <Circle
                    cx={chartSize / 2}
                    cy={chartSize / 2}
                    r={chartSize * 0.475} // Adjusted background circle radius
                    fill={darkMode ? '#f2f7f3':"#2c3831"}
                />
                {/* VictoryPie */}
                <VictoryPie
                    standalone={false}
                    colorScale={[darkMode ? '#ffffff' : '#29292e']}
                    width={chartSize}
                    height={chartSize}
                    data={data}
                    innerRadius={innerRadius}
                    labelRadius={labelRadius}
                    style={{ labels: { fontSize: 20, fill: 'transparent' } }}
                />
                {/* VictoryLabel */}
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 15, fill: darkMode ? 'black' : 'white', fontWeight: 'bold', backgroundColor: 'transparent' }}
                    x={chartSize / 2}
                    y={chartSize / 2}
                    text="0%"
                />
            </Svg>
        </View>
    );
};

export default Pychart;