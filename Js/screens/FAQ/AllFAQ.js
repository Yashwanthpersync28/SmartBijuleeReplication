import React, { useState } from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { flex, fontSize, heightValue, marginPosition, radius, styles, widthValue } from '../../../styles/Styles';
import Header from '../CommonComponents/Cards/Header';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Menu from '../CommonComponents/Cards/Menu';
import Faqbuttons from './Buttoncomponent/Faqbuttons';

const AllFAQ = ({ navigation }) => {
  let heading = 'Top';
  let continueprop = 'Questions';
  let details = 'Have Queries?';
  let temp=[
    { id: 1, heading: 'Item 1', details: 'Details for Item 1', lowerarrow: false },
    { id: 2, heading: 'Item 2', details: 'Details for Item 2', lowerarrow: false },
    { id: 3, heading: 'Item 3', details: 'Details for Item 3', lowerarrow: false },
    { id: 4, heading: 'Item 4', details: 'Details for Item 4', lowerarrow: false },
    { id: 5, heading: 'Item 5', details: 'Details for Item 5', lowerarrow: false },
    { id: 6, heading: 'Item 6', details: 'Details for Item 6', lowerarrow: false },
    { id: 7, heading: 'Item 7', details: 'Details for Item 7', lowerarrow: false },
    { id: 8, heading: 'Item 8', details: 'Details for Item 8', lowerarrow: false },
  ]
  const [displayedItems, setDisplayedItems] = useState(temp);

  const showAllItems = () => {
    setDisplayedItems(temp);
  };

  const showFirstFourItems = () => {
    setDisplayedItems(temp.slice(0,4))
  };

  const showLastFourItems = () => {
    setDisplayedItems(temp.slice(-4))
  };

  const toggleLowerArrow = (itemId) => {
    setDisplayedItems(displayedItems.map(item =>
      item.id === itemId ? { ...item, lowerarrow: !item.lowerarrow } : {...item,...item, lowerarrow: false }
    ));
  };

  return (
    <View style={[styles.bglightblack, flex(1)]}>
      <Menu navigation={navigation} />
      <ScrollView>
        <Header heading={heading} continueprop={continueprop} details={details} />
        <View style={[flex(1), marginPosition('3%', 0, 0, '5%'), { width: widthValue(1.1) }, styles.row, styles.centerHorizontal]}>
          <Faqbuttons buttonname={'All'} handlebuttons={showAllItems} reducewidth={true}/>
          <Faqbuttons buttonname={'General'} handlebuttons={showFirstFourItems} reducewidth={false}/>
          <Faqbuttons buttonname={'Billing'} handlebuttons={showLastFourItems} reducewidth={false}/>
        </View>
        <View style={[flex(8), marginPosition('3%', 0, 0, '5%'), { width: widthValue(1.1) }]}>
          <View style={[styles.row]}>
            <Text style={[styles.white, fontSize(20)]}>General</Text>
            <Text style={[styles.green, fontSize(20), marginPosition(0, 0, '3%', '3%')]}>Category</Text>
          </View>
          {displayedItems.map((item) => (
            <View key={item.id} style={[marginPosition(0, 0, '5%')]}>            
              <View  style={[styles.allCenter, { height: heightValue(12) }, styles.bgdashblue, radius(0, 15, 0, 0, 15)]}>
                   <TouchableOpacity onPress={() => toggleLowerArrow(item.id)} style={[styles.row,styles.allCenter]}>
                <View style={[styles.allCenter, flex(3)]}>
                  <Text style={[styles.white, fontSize(16), marginPosition(0, 0, 0, '5%')]}>{item.heading}</Text>
                </View>
                <View style={[styles.allCenter, flex(1), marginPosition(0, 0, 0, '0%')]}>
                 
                    <FontAwesome5Icon name={item.lowerarrow ? 'chevron-up':'chevron-down'} style={[fontSize(30), styles.gray]} />

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
  );
};

export default AllFAQ;
