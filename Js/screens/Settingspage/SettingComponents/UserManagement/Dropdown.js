import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { borderColor, borderWidth, flex, fontSize, heightValue, styles, widthValue } from '../../../../../styles/Styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';

const Dropdown = ({senddata}) => {
  const darkMode = useSelector((state)=>state.system.darkMode)

  const [relations, setRelations] = useState([
    { name: 'Master', id: 1, color: 'black' },
    { name: 'Family', id: 2, color: 'black' },
    { name: 'Tenant', id: 3, color: 'black' },
  ]);

  const [selectedValue, setSelectedValue] = useState('Select');
  const [showList, setShowList] = useState(false);

  const handleRelations = (selectedName) => {
    const updatedRelations = relations.map((item) => {
      return { ...item, color: item.name === selectedName ? 'green' : 'white' };
    });

    setRelations(updatedRelations);
    senddata(selectedName);
    setSelectedValue(selectedName);
    setShowList(false);
  };

  return (
    <View style={[{ height: heightValue(10) }, styles.column]}>
      <TouchableOpacity onPress={() => setShowList(!showList)}>
        <View style={[styles.row]}>
          <Text style={[darkMode?styles.black:styles.white, { width: widthValue(1.6) }]}>{selectedValue}</Text>
          <FontAwesome5Icon name={showList ? 'chevron-up' : 'chevron-down'} style={[styles.white, fontSize(20)]} />
        </View>
      </TouchableOpacity>
      {showList ? (
        <View style={[flex(1)]}>
          {relations.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleRelations(item.name)}>
              <View style={[styles.bgdashblue, borderWidth(0.5), borderColor(styles.white)]}>
                <Text style={darkMode?styles.white:styles.black}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default Dropdown;
