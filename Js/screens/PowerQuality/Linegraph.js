import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from 'victory-native';
// import {graphData} from '../../../../Constants/Const';
// import {normalize} from '../../../../Utils/styles2';
import { heightValue,
  styles,
  widthValue,
  radius,
  padding,
  fontSize, } from '../../../styles/Styles';

const Linegraph = () => {
  const {height, width} = Dimensions.get('window');
  const datas = [
    { time: '10AM', voltage: 10 },
    { time: '11AM', voltage: 8 },
    { time: '12AM', voltage: 10 },
    { time: '1PM', voltage: 0 },
    { time: '2PM', voltage: 7 },
    { time: '3PM', voltage: 4 },
    { time: '4PM', voltage: 6.5 },
    { time: '5PM', voltage: 7 },
    { time: '6PM', voltage: 10 },
    { time: '6PM', voltage: 11 },
  ];
  return (
    <View
      style={[
        styles.bgbarback,
        radius(15),
        {width: widthValue(1.15), height: heightValue(7)},
        padding(0, 10, 20),
        styles.spaceBetweenVertical,
        styles.row,
      ]}>
      <View style={[styles.selfStart]}>
        <Text style={[styles.fontwhite, fontSize(15)]}>
          Peak<Text style={[styles.green]}> Quality</Text>
        </Text>
        <View style={[{width: widthValue(2), height: heightValue(5)}]}>
          <VictoryChart
            width={widthValue(1.7)}
            height={heightValue(14)}
            domainPadding={{x: 100, y: 10}}
            padding={{top: 0, bottom: 0, right: 0, left: 0}}
            style={{
              data: {stroke: '#c43a31'},
              parent: {border: '2px solid #fff'},
            }}>
            <VictoryLine
              data={datas.voltage}
              interpolation={'natural'}
              x={'time'}
              y={'voltage'}
              style={{data: {stroke: 'green'}}}
              scale={{y: heightValue(20) / (datas.voltage- 1)}}
            />
            <VictoryAxis
              tickFormat={() => ''}
              style={{
                axis: {stroke: 'grey'},
              }} />
            
            <VictoryAxis
              dependentAxis
              style={{
                ticks: {stroke: 'grey'},
                tickLabels: {fill: 'transparent'},
                axis: {stroke: 'none'},
                grid: {stroke: 'grey', opacity: 0.4},
                height: 15,
              }}
            />
          </VictoryChart>
        </View>
      </View>
      <View style={[styles.centerHorizontal, styles.spaceBetween]}>
        <View style={[styles.row, styles.allCenter]}>
          <Text style={[styles.fontwhite]}>12am</Text>
          <Fontawesome5
            name={'chevron-up'}
            style={[styles.green, fontSize(16)]}
          />
        </View>
        <Text style={[styles.green, fontSize(30)]}>0</Text>
        <Text style={[styles.fontwhite, fontSize(13)]}>Voltage</Text>
      </View>
    </View>
  );
};

export default Linegraph;