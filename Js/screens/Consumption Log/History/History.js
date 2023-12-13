import React, { useState } from 'react'
import { View,Text,SafeAreaView} from 'react-native'
import DrawerScreenWrapper from '../../Drawer/DrawerScreenWrapper';
import { heightValue,widthValue,styles,marginPosition,fontSize,radius } from '../../../../styles/Styles'
import { ScrollView } from 'react-native-gesture-handler';
import Cardcolors from '../../CommonComponents/Cards/Cardcolors';
import Menu from '../../CommonComponents/Cards/Menu';
import Header from '../../CommonComponents/Cards/Header';
import Oppositecolors from '../../CommonComponents/Cards/Oppositecolors';
import { ToggleButton } from './CustomHistory/ToggleButton';

const History = ({navigation}) => {

  const [showcomp,setshowcomp]=useState(true);
  const comp="Historic Electricity Consumption";
 
  const details="Historic consumption details on your finger tips"
    
  return (
    <DrawerScreenWrapper> 
      <SafeAreaView>
         <View style={[{height:heightValue(1),width:widthValue(1)},styles.bglightblack]}>
              <Menu navigation={navigation}/>
        <ScrollView showsVerticalScrollIndicator={false}> 
           <View style={[marginPosition(-10)]}>
           <Header  continueprop={comp} details={details} columnwise={true} display={true}/>
          </View>
          <View style={[{height:heightValue(1.7),width:widthValue(1.1)},marginPosition(10,0,0,20),radius(15)]}>
              <ToggleButton onchangeCustom={(val)=>setshowcomp(val)}/>
           {showcomp ? 
               <View style={[styles.white,marginPosition(0,0,20,0),styles.allCenter]}>
                   <Text style={[styles.green,fontSize(12)]}>? X-axis Hours and Y-axis Consumption</Text>
                  <Text style={[styles.white,fontSize(11)]}>(Click on the chart to see the value)</Text>
               </View>:null}
          </View>
            {showcomp ? <>
             <Cardcolors name={'Total'} secondname={'Consumption'} units={'units'} time={''} monthshow={false} value={'0'} month={true} right={true}/>
             <Oppositecolors/></>:null}
        </ScrollView>
       </View>
    </SafeAreaView>
  </DrawerScreenWrapper>
  )
}

export default History
