import React,{useState,useEffect} from 'react'
import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, position, radius, styles, widthValue } from '../../../../../styles/Styles'
import PassTextInput from '../ChangePassword/PassTextInput'

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Inputbox from '../../../Loginpage/CommonCards/Inputbox'
import FillInput from './FillInput'
import DropdownMenu from './Dropdown'
const FillDetails = ({onChangeText, onnumberChange , onchangeDropdown , count }) => {


    const [errornumber,seterrornumber]=useState('');
    const[number,setnumber]=useState(false);
    const [errorname,seterrorname]=useState('');
    const [select,setselect]=useState('')
    const[name,setname]=useState(false);

    // useEffect(() => {
    //     setIsDisabled(number && name );
    //     handleIsDiasbled(false)
    // }, [number, name,select]);
    const numbervalidation=(data,val)=>{
       
            if(data<10 || isNaN(val)){
                seterrornumber('Please enter the correct Mobile Number')
                setnumber(false)
                
 
            }
            else{
                seterrornumber('');
                setnumber(true)
                // handleIsDiasbled(val)
            
                onnumberChange(val)
             
               
            }
    }
    const namevalidation=(data,val)=>{
        if(data>3 && isNaN(val) ){
            seterrorname('');
            setname(true);
            onChangeText(val)
         
        }
        else{
            seterrorname('Plese enter correct name')
            // handleIsDiasbled(val)
            setname(false);
            // handleIsDiasbled(true)
        }
    }
    const getdatafromDropdown=(a)=>{
       setselect(a) ;
       onchangeDropdown(a)
       
    }
    return (
        <View style={[flex(1)]}>
            
            <View style={[ { height: heightValue(2.6) }, padding(30), styles.allCenter]}>
                <View style={[styles.row, { width: widthValue(1.3) }, marginPosition(10, 0, 0)]}>
                    <Text style={[styles.white]}>Fill the</Text>
                    <Text style={[styles.green, marginPosition(0, 0, 0, 5)]}>Details</Text>
                </View>
                <FillInput name={'Name'} getfromchild={namevalidation}/>
                <View style={[styles.centerHorizontal,]}>
                   <Text style={[styles.red,fontSize(12)]}>{errorname}</Text>
                </View>
                <FillInput name={'Contact Number'} getfromchild={numbervalidation}/>
                <View style={[styles.centerHorizontal]}>
                   <Text style={[styles.red,fontSize(12)]}>{errornumber}</Text>
                </View>
                <View style={[{width:widthValue(1.3)}]}>
                    <Text style={[styles.gray, fontSize(13), marginPosition(0, 0, 5, 5)]}>Relation</Text>
                    <View style={[{width:widthValue(1.3)},styles.allCenter]}>
                     <DropdownMenu senddata={getdatafromDropdown}/>
                     </View>
                </View>
            </View>
           
        </View>
    )
}

export default FillDetails
