import React, {  useState } from 'react'
import { View,Text,TouchableOpacity, SafeAreaView } from 'react-native';
import BackButton from '../CommonComp/BackButton';
import SettingsHeader from '../CommonComp/SettingsHeader';
import { heightValue,widthValue,styles, flex ,radius,marginPosition,fontSize} from '../../../../../styles/Styles';
import ListofMembers from '../CommonComp/ListofMembers';
import FillDetails from './FillDetails';
import Analysis from './Analysis';
import Result from './Result';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
const UserManagementcomp = () => {
 
  const [isDisabled,setIsDisabled]=useState(false)
  const [show,setshow]=useState(true)
  const [name,setname]=useState('')
  const [number,setnumber]=useState('')
  const [count,setcount]=useState(0);
  const [dropdownval,setdropdownval]=useState('')
  const navigation=useNavigation()
  const handlefilldetails=()=>{
   setcount(1);

  }
const getDisabledstate=(val)=>{
  setIsDisabled(() => val);
  
  console.warn(isDisabled);

}
const handlenext=()=>{
  if(count===3){
    alert("warning")
    navigation.navigate('Setting')
  }
  setcount(count+1)
  
}
// const handleIsDiasbled=(a,b)=>{
const handlenextbtn=()=>{
    if(name.length>2 && number.length===10 && dropdownval.length>2){
      setshow(false)
      console.warn((show));
    }
}

  return (
    <SafeAreaView>
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
    <View style={[{width:widthValue(1.1),height:heightValue(1.3)}]}>
     <BackButton/>
     <SettingsHeader name={'User'} heading={'Management'} details={'You can share your account with your family members with limited acess'}/>
     <View >
         {count ===0 ? <ListofMembers Goto={handlefilldetails}/>: null}
          {count ===1 ? <FillDetails  handletoConfirmpage={handlenextbtn} onChangeText={(val)=>setname(val)} onnumberChange={(val)=>setnumber(val)} onchangeDropdown={(val)=>{setdropdownval(val)}}/>:null}
          {count ===2 ? <Analysis name={name} number={number} dropdownval={dropdownval}/>:null}
          {count ===3 ? <Result/>:null}

     </View>
     

    
     </View>
     <View style={[{width:widthValue(1.2),height:heightValue(8)},styles.row,styles.spaceBetweenVertical]}>
      {count >0 ? <> 
          <View style={[{width:widthValue(3.5),height:heightValue(19)},{backgroundColor:'#29292e'},styles.allCenter,radius(30)]}>
                <TouchableOpacity  onPress={()=>setcount(count-1)}>
                    <View style={[styles.row]}>
                    <FontAwesome5Icon name='chevron-left' style={[styles.white,fontSize(15),marginPosition(4,5)]}/>
                          <Text style={[styles.white,fontSize(17)]}>Back</Text>
                        
                    </View>
                   
                </TouchableOpacity>
            </View>
            <View style={[{width:widthValue(3.5),height:heightValue(19)},{backgroundColor:isDisabled ?'#077227':'#262f40'},styles.allCenter,radius(30)]}>
                <TouchableOpacity disabled={show}  onPress={handlenext}>
                    <View style={[styles.row]}>
                          <Text style={[styles.white,fontSize(17)]}>Next</Text>
                         <FontAwesome5Icon name='chevron-right' style={[styles.white,fontSize(15),marginPosition(4,0,0,5)]}/>
                    </View>
                   
                </TouchableOpacity>
            </View>
            </>:null}




            {/* key={isDisabled} disabled={isDisabled} */}
      </View>
    
     </View>
     </SafeAreaView>
  )
}

export default UserManagementcomp
