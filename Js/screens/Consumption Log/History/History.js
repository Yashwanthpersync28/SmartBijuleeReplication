import React, { useState } from 'react'
import { View,Text,SafeAreaView,TouchableOpacity,Dimensions } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
// import Ionicons from 'react-native-vector-icons/Ionicons/chevron-up-outline'
import DrawerScreenWrapper from '../../Drawer/DrawerScreenWrapper';
import Exampledashboard from '../../Dashboardd/Exampledashboard';
import { heightValue,widthValue,styles,marginPosition,fontSize, flex,radius } from '../../../../styles/Styles'
import { ScrollView } from 'react-native-gesture-handler';
import { VictoryBar,VictoryChart ,VictoryAxis,VictoryTheme} from 'victory-native';
import Cardcolors from '../../CommonComponents/Cards/Cardcolors';
import Menu from '../../CommonComponents/Cards/Menu';
import Header from '../../CommonComponents/Cards/Header';
import Oppositecolors from '../../CommonComponents/Cards/Oppositecolors';
const History = ({navigation}) => {
  let [open,setopen]=useState(false);
  let [hidecomp,sethidecomp]=useState(false);
  // let heading="";
  let comp="Historic Electricity Consumption";
 
  let details="Historic consumption details on your finger tips"
    let cus=(a)=>{
      setopen(a)
    }

    let fromchild=(a)=>{
      sethidecomp(a)
    }
    
  return (
    <DrawerScreenWrapper> 
 <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack]}>
      <Menu navigation={navigation}/>
    <ScrollView> 
      <Header  continueprop={comp} details={details} columnwise={true} display={true}/>
    <View style={[{height:heightValue(1.9),width:widthValue(1.1)},marginPosition(0,0,0,'5%'),radius(15),styles.allCenter]}>
        <Exampledashboard showpagination={false} showCustom={true} showborder={true} openfunc={cus} marginss={true} sendtochild={fromchild}/>
      
        <View style={[styles.white,marginPosition('0%',0,'3%',0),styles.allCenter]}>
        <Text style={[styles.green,fontSize(11)]}>? X-axis Hours and Y-axis Consumption</Text>
            <Text style={[styles.white,fontSize(11)]}>(Click on the chart to see the value)</Text>
        </View>
    </View>
   <Cardcolors name={'Total'} secondname={'Consumption'} units={'units'} time={''} monthshow={false} value={'0'} month={true} right={true}/>
   <Oppositecolors/>
    </ScrollView>
  </View>
  </DrawerScreenWrapper>
  )
}

export default History
