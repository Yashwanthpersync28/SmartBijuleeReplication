import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, ScrollView,SafeAreaView } from 'react-native';
import { flex, fontSize, heightValue, heightwidth, marginPosition, padding, radius, styles, widthValue } from '../../../styles/Styles';
import Header from '../CommonComponents/Cards/Header';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Menu from '../CommonComponents/Cards/Menu';
import Faqbuttons from './Buttoncomponent/Faqbuttons';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { FaqApi } from '../../api/userApi/FaqApi';
import { GeneralComponent } from './Buttoncomponent/Generalcomponent';
import LottieView from 'lottie-react-native';

const AllFAQ = ({ navigation }) => {
  const darkMode = useSelector((state)=>state.system.darkMode);
  let heading = 'Top';
  let continueprop = 'Questions';
  let details = 'Have Queries?';
  useEffect(()=>{
    FAQ()
  },[])
  const [showGeneral, setshowGeneral] = useState(true);
  const [showBilling,setshowBilling]=useState(true)

  const showAllItems = () => {
    setshowGeneral(true)
    setshowBilling(true)
  };

  const showGeneralItems = () => {
   setshowGeneral(true);
   setshowBilling(false)
  };

  const showBillingItems = () => {
    setshowGeneral(false);
    setshowBilling(true)
  };

  
  const dispatch=useDispatch();
 
  const globalVariableEnergyTips = useSelector(state => state);
  console.log('globalVariableEnergyTips', globalVariableEnergyTips);
  const userSelector = useSelector(state => state.auth.userVerify);
 
  const [billing,setbilling] = useState([])
  const [gen,setgen]=useState([]);
  const [category,setcategory]=useState([])
  const LoginId = globalVariableEnergyTips.auth.user.data.CANumber;
  const LangId = globalVariableEnergyTips.auth.user.data.LangID;
  const [loader, setLoader] = useState(true);
  
  ///enrgy tips Api
  const FAQ = async ()=>{
  

      try{
          
      const energyTipsResp =  await dispatch(FaqApi(
          {
              "loginID":LoginId,
              "langID":LangId,
            }
      ))
      console.log('tufwyiutoyeupsid[wo',energyTipsResp)
      console.log('loginID,langId',energyTipsResp.meta.arg.loginID, energyTipsResp.meta.arg.langID)
      console.log('billing',energyTipsResp.payload.data.billing)
      console.log('gen',energyTipsResp.payload.data.general)
      console.log('catego',energyTipsResp.payload.data.category);
      setbilling(energyTipsResp.payload.data.billing);
      setgen(energyTipsResp.payload.data.general);
      setcategory(energyTipsResp.payload.data.category)
      if (energyTipsResp.payload.status === 200) {
        setLoader(false);
      }
          }
          
          
          catch(error){ 
              console.error('EnergyTipsFetch',error)
          }
  }
 

  return (
    <DrawerScreenWrapper>
      <SafeAreaView>
    <View style={[darkMode?styles.bglightWhite:styles.bglightblack, {height:heightValue(1),width:widthValue(1)}]}>
      
      <Menu navigation={navigation} />
      {loader ?  <View style={[{ height: heightValue(1), width: widthValue(1) }, styles.bglightblack,styles.allCenter]}>
            <LottieView style={[heightwidth('30%', '30%')]} source={require('../Assetslottie/loadingtwo.json')} autoPlay />
            </View>:<>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header heading={heading} continueprop={continueprop} details={details}/>
        <View style={[flex(1), marginPosition('3%', 0, 0, '5%'), { width: widthValue(1.1) }, styles.row, styles.centerHorizontal]}>
          <Faqbuttons buttonname={'All'} handlebuttons={showAllItems} reducewidth={true}/>
          <Faqbuttons buttonname={'General'} handlebuttons={showGeneralItems} reducewidth={false}/>
          <Faqbuttons buttonname={'Billing'} handlebuttons={showBillingItems} reducewidth={false}/>
        </View>
        {console.log('generakk',billing)}
       {console.log('fgvhbjn',gen)}
      
      {showGeneral ?  <GeneralComponent General={gen} category ={category[0]}/>:null}
      {showBilling ?  <GeneralComponent General={billing} category={category[1]} />:null}
      </ScrollView></>}
    </View>
    </SafeAreaView> 
    </DrawerScreenWrapper>
  );
};

export default AllFAQ;
