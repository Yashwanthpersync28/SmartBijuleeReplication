import React, { useState } from 'react';
import { TouchableOpacity, View, Text, ScrollView,SafeAreaView } from 'react-native';
import { flex, fontSize, heightValue, marginPosition, padding, radius, styles, widthValue } from '../../../styles/Styles';
import Header from '../CommonComponents/Cards/Header';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Menu from '../CommonComponents/Cards/Menu';
import Faqbuttons from './Buttoncomponent/Faqbuttons';
import DrawerScreenWrapper from '../Drawer/DrawerScreenWrapper';

const AllFAQ = ({ navigation }) => {
  let heading = 'Top';
  let continueprop = 'Questions';
  let details = 'Have Queries?';
  let temp=[
    { id: 1, heading: 'How electric tariff is determained? Who determines the electricity tarrif?', details: 'Details for Item 1', lowerarrow: false },
    { id: 2, heading: 'What is Transmission & Distribution (T&D) loss?', details: 'Details for Item 2', lowerarrow: false },
    { id: 3, heading: 'What measures APDCL has taken to reduce Technical & Commercial loss?', details: 'Details for Item 3', lowerarrow: false },
    { id: 4, heading: 'Has the T&D loss of APDCL decresed in the last few years? What is the T&D loss target fixed by AERC?', details: 'Details for Item 4', lowerarrow: false },
    { id: 5, heading: 'Why the power tarrif of Assam is higher than most of the states of india?', details: 'Details for Item 5', lowerarrow: false },
    { id: 6, heading: 'What are the reasons of Power failure/frequent tripping? What measures have APDCL taken to reduce it?', details: 'Details for Item 6', lowerarrow: false },
    { id: 7, heading: 'Why APDCL does not give advance notice for Load Shedding/tripping', details: 'Details for Item 7', lowerarrow: false },
  ]
  const [displayedItems, setDisplayedItems] = useState(temp);
  const [count,setcount]=useState(0);
  const showAllItems = () => {
    setDisplayedItems(temp);
  };

  const showFirstFourItems = () => {
    setDisplayedItems(temp.slice(0,3))
  };

  const showLastFourItems = () => {
    setDisplayedItems(temp.slice(-3))
  };

  const toggleLowerArrow = (itemId) => {
    setDisplayedItems(displayedItems.map(item =>
      item.id === itemId ? { ...item, lowerarrow: !item.lowerarrow } : {...item,...item, lowerarrow: false }
    ));
  };

  return (
    <DrawerScreenWrapper>
      <SafeAreaView>
    <View style={[styles.bglightblack, {height:heightValue(1),width:widthValue(1)}]}>
      <Menu navigation={navigation} />
      <ScrollView>
        <Header heading={heading} continueprop={continueprop} details={details}/>
        <View style={[flex(1), marginPosition('3%', 0, 0, '5%'), { width: widthValue(1.1) }, styles.row, styles.centerHorizontal]}>
          <Faqbuttons buttonname={'All'} handlebuttons={showAllItems} reducewidth={true}/>
          <Faqbuttons buttonname={'General'} handlebuttons={showFirstFourItems} reducewidth={false}/>
          <Faqbuttons buttonname={'Billing'} handlebuttons={showLastFourItems} reducewidth={false}/>
        </View>
        <View style={[flex(8), marginPosition(8, 0, 0, 20), { width: widthValue(1.1) }]}>
          <View style={[styles.row]}>
            <Text style={[styles.white, fontSize(17)]}>General</Text>
            <Text style={[styles.green, fontSize(17), marginPosition(0, 0, 5, 10)]}>Category</Text>
          </View>
          {displayedItems.map((item) => (
            <View key={item.id} style={[marginPosition(0, 0, 10)]}>            
              <View  style={[styles.allCenter,padding(10), styles.bgdashblue, radius(0, 10, 0, 0, 10)]}>
                   <TouchableOpacity onPress={() => toggleLowerArrow(item.id)} style={[styles.row,styles.allCenter]}>
                <View style={[styles.centerVertical, flex(3)]}>
                  <Text style={[styles.white, fontSize(13), ]}>{item.heading}</Text>
                </View>
                <View style={[styles.allCenter, flex(1), ]}>
                 
                    <FontAwesome5Icon name={item.lowerarrow ? 'chevron-up':'chevron-down'} style={[fontSize(20), styles.gray]} />

                </View>
               </TouchableOpacity>
              </View>
              {item.lowerarrow ?
                <View style={[marginPosition('-2%'), styles.allCenter, styles.bgdashblue, radius(0, 0, 15, 15, 0), styles.allCenter]} >
                  <Text style={[fontSize(20), styles.gray, marginPosition('0%', '5%', '5%', '5%')]}>{item.details}</Text>
                </View> : null}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
    </DrawerScreenWrapper>
  );
};

export default AllFAQ;
