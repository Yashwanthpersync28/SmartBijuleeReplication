import React,{useState,useEffect} from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, padding, position, radius, styles, widthValue } from '../../../../../styles/Styles'
import PassTextInput from '../ChangePassword/PassTextInput'

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Inputbox from '../../../Loginpage/CommonCards/Inputbox'
import FillInput from './FillInput'
import DropdownMenu from './Dropdown'
const FillDetails = ({handletoConfirmpage}) => {


    const [errornumber,seterrornumber]=useState('');
    const[number,setnumber]=useState(false);
    const [errorname,seterrorname]=useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [select,setselect]=useState('')
    const[name,setname]=useState(false);

    useEffect(() => {
        setIsDisabled(number && name && select.length>1);
        handletoConfirmpage(isDisabled)
    }, [number, name,select]);
    const numbervalidation=(data,val)=>{
       
            if(data<10 || isNaN(val)){
                seterrornumber('Please enter the correct Mobile Number')
                setnumber(false)

            }
            else{
                seterrornumber('');
                setnumber(true)

            }
    }
    const namevalidation=(data,val)=>{
        if(data>3 && isNaN(val) ){
            seterrorname('');
            setname(true);
        }
        else{
            seterrorname('Plese enter correct name')
            setname(false);
        }
    }
    const getdatafromDropdown=(a)=>{
       setselect(a) ;
    }
    return (
        <View style={[flex(1)]}>
            <View style={[{ height: heightValue(7) }, styles.centerVertical]}>
                <View style={[borderColor('green'), borderWidth(1), marginPosition(10), styles.positionRelative]}></View>

                <View style={[styles.column, styles.positionAbsolute, position(30)]}>
                    <View style={[styles.allCenter, { height: 50, width: 50 }, styles.bggreen, radius(30)]}>
                        <Text>01</Text>
                    </View>
                    <View style={[marginPosition(5)]}>
                        <Text style={[fontSize(13), styles.white]}>FILL DETAILS</Text>
                    </View>
                </View>
                <View style={[styles.column, styles.positionAbsolute, position(30, 0, 0, 150)]}>
                    <View style={[styles.allCenter, { height: 50, width: 50 }, styles.bggreen, radius(30)]}>
                        <Text>02</Text>
                    </View>
                    <View style={[marginPosition(5)]}>
                        <Text style={[fontSize(13), styles.white]}>ANALYSE</Text>
                    </View>
                </View>
                <View style={[styles.column, styles.positionAbsolute, position(30, 0, 0, 290)]}>
                    <View style={[styles.allCenter, { height: 50, width: 50 }, styles.bggreen, radius(30)]}>
                        <Text>03</Text>
                    </View>
                    <View style={[marginPosition(5)]}>
                        <Text style={[fontSize(11), styles.white]}>RESULTS</Text>
                    </View>
                </View>


            </View>
            <View style={[ { height: heightValue(2.6) }, padding(30), styles.allCenter]}>
                <View style={[styles.row, { width: widthValue(1.3) }, marginPosition(0, 0, 0)]}>
                    <Text style={[styles.white]}>Fill the</Text>
                    <Text style={[styles.green, fontSize(15), marginPosition(0, 0, 0, 5)]}>Details</Text>
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
            {/* <View style={[styles.flexEnd]}>
            <View style={[{width:widthValue(3),height:heightValue(17)},{backgroundColor:isDisabled ?'#077227':'#29292e'},styles.allCenter,radius(30)]}>
                <TouchableOpacity disabled={isDisabled} onPress={()=>handletoConfirmpage(true)} >
                    <View style={[styles.row]}>
                          <Text style={[styles.white,fontSize(17)]}>Next</Text>
                         <FontAwesome5Icon name='chevron-right' style={[styles.white,fontSize(15),marginPosition(4)]}/>
                    </View>
                   
                </TouchableOpacity>
            </View>
            </View> */}
        </View>
    )
}

export default FillDetails
