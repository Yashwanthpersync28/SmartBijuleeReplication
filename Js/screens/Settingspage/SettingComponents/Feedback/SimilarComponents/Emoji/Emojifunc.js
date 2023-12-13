import React,{useState} from 'react'
import { TouchableOpacity, View } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../../../../../../styles/Styles';
const Emojifunc = ({size,afterpressed,getdatafromparent}) => {
    let num=size
    let after=afterpressed
    const [arr, setArr] = useState([
        { icon: "frown", showicon: false, id: 1, name: "sad" },
        { icon: "meh", showicon: false, id: 2, name: "neutral" },
        { icon: "smile-beam", showicon: false, id: 3, name: "happy" }
      ]);
      const [sendFeedback, setFeedback] = useState('');
    
      const toggleColor = (itemId) => {
       
        const updatedArr = arr.map(item =>
          item.id === itemId ? { ...item, showicon: !item.showicon } : { ...item, showicon: false }
        );
    
        setArr(updatedArr);
    
        // Can set names directly into the sendFeedback state
        const selectedNames = updatedArr.filter(item => item.showicon).map(item => item.name);
        setFeedback(selectedNames.join(', '));
        getdatafromparent(selectedNames);

       
        // getdatafromparent(sendFeedback)
      };
  return (
    <View style={[styles.row, styles.spaceBetween]}>
    {arr.map((data,index) => (
      <TouchableOpacity key={index} onPress={() => toggleColor(data.id)}>
        <View >
          <FontAwesome5Icon
            name={data.icon}
            style={[
              { fontSize: data.showicon ? afterpressed : size },
              { color: data.showicon ? '#28b085' : '#64ad64' }
            ]}
          />
        </View>
       </TouchableOpacity>
    ))}
  </View>

  )
}

export default Emojifunc
