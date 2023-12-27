import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { heightValue, widthValue, styles, fontSize, marginPosition, borderWidth, borderColor, heightwidth } from '../../../styles/Styles';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';
import Menu from '../CommonComponents/Cards/Menu';
import Header from '../CommonComponents/Cards/Header';
import { useDispatch, useSelector } from 'react-redux';
import { energyApi } from '../../api/userApi/energyApi';
import CarouselWithLottie from './Components/CarouselWithLottie';
import LottieView from 'lottie-react-native';

const Energy = ({ navigation }) => {
  const dispatch = useDispatch();
  let heading = "Energy";
  let comp = "Saving Tips";
  let details = "Simple methods can help you save a significant amount of energy";
  const darkMode = useSelector((state)=>state.system.darkMode);

  const globalVariableEnergyTips = useSelector(state => state.auth.user.data);
  console.log('globalVariableEnergyTips', globalVariableEnergyTips);
  const userSelector = useSelector(state => state.auth.userVerify);
  console.log(userSelector);
  const [energyTipsData, setEnergyTipsData] = useState([]);
  const [loader, setLoader] = useState(true);

  // Energy tips Api
  const energyTips = async () => {
    try {
      const energyTipsResp = await dispatch(energyApi({
        "loginID": globalVariableEnergyTips.CANumber,
        "langID": globalVariableEnergyTips.LangID,
      }));
      console.log('EnergyTips', energyTipsResp);
      console.log('loginID,langId', energyTipsResp.meta.arg.loginID, energyTipsResp.meta.arg.langID);
      setEnergyTipsData(energyTipsResp.payload.data.tips);
      console.log('EnergyTipsResp', energyTipsData);
      if (energyTipsResp.payload.status === 200) {
        setLoader(false);
      }
    } catch (error) {
      console.error('EnergyTipsFetch', error);
    }
  };

  useEffect(() => {
    energyTips();
  }, []);

  return (
    <DrawerScreenWrapper>
      <SafeAreaView>
        <View style={[{ height: heightValue(1), width: widthValue(1) }, darkMode?styles.bglightWhite:styles.bglightblack]}>
         
              <Menu navigation={navigation} />
              <ScrollView showsVerticalScrollIndicator={false}>
                <Header heading={heading} continueprop={comp} details={details} columnwise={false} display={false} />

                <View style={[styles.allCenter, marginPosition(30, 0, 0, 20), { width: widthValue(1.1) }]}>
                  <CarouselWithLottie />
                </View>
                <View style={[styles.row, { height: heightValue(25), width: widthValue(1.1) }, marginPosition(8, 0, 0, 20)]}>
                  <Text style={[fontSize(18), darkMode?styles.black:styles.white,]}>Saving</Text>
                  <Text style={[fontSize(18), styles.green, marginPosition(0, 0, 0, 5)]}>Guidelines</Text>
                </View>
                {loader ?
          <View style={[{ height: heightValue(1), width: widthValue(1) }, styles.bglightblack,styles.centerHorizontal]}>
            <LottieView style={[heightwidth('30%', '30%')]} source={require('../Assetslottie/loadingtwo.json')} autoPlay />
            </View>
            :
            <>
                {energyTipsData.map((ob, index) => {
                  return (
                    <View key={ob.id} style={[{ width: widthValue(1.1) }, marginPosition(0, 0, '2.5%', '5%'), borderWidth(0, 0.8), borderColor('grey')]}>
                      <Text style={[darkMode?styles.black:styles.white, marginPosition(8, 0, 2), fontSize(14)]}>{ob.title}</Text>
                      <Text style={[{ color: '#a3a0a0' }, marginPosition('0%', 0, '3%'), fontSize(14)]}>{ob.description}</Text>
                    </View>
                  );
                })}
                <View style={[marginPosition(0, 0, 15)]}></View>
                </>}
              </ScrollView>
           
          
        </View>
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
};

export default Energy;
