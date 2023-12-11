import React, {  useState } from 'react'
import { View,Text,TouchableOpacity } from 'react-native';
import BackButton from '../CommonComp/BackButton';
import SettingsHeader from '../CommonComp/SettingsHeader';
import { heightValue,widthValue,styles, flex ,radius,marginPosition,fontSize} from '../../../../../styles/Styles';
import ListofMembers from '../CommonComp/ListofMembers';
import FillDetails from './FillDetails';
import Analysis from './Analysis';
import Result from './Result';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const UserManagementcomp = () => {
 
  const [isDisabled,setIsDisabled]=useState(false)
  const [count,setcount]=useState(0);
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
  }
  setcount(count+1)
  
}
  return (
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
    <View style={[{width:widthValue(1.1),height:heightValue(1.3)}]}>
     <BackButton/>
     <SettingsHeader name={'User'} heading={'Management'} details={'You can share your account with your family members with limited acess'}/>
     <View >
         {count ===0 ? <ListofMembers Goto={handlefilldetails}/>: null}
          {count ===1 ? <FillDetails handletoConfirmpage={getDisabledstate}/>:null}
          {count ===2 ? <Analysis/>:null}
          {count ===3 ? <Result/>:null}

     </View>
     

    
     </View>
     <View style={[{width:widthValue(1.2),height:heightValue(8)},styles.row,styles.spaceBetweenVertical]}>
      {count >0 ? <> 
          <View style={[{width:widthValue(3),height:heightValue(17)},{backgroundColor:'#29292e'},styles.allCenter,radius(30)]}>
                <TouchableOpacity  onPress={()=>setcount(count-1)}>
                    <View style={[styles.row]}>
                    <FontAwesome5Icon name='chevron-left' style={[styles.white,fontSize(15),marginPosition(4,5)]}/>
                          <Text style={[styles.white,fontSize(17)]}>Back</Text>
                        
                    </View>
                   
                </TouchableOpacity>
            </View>
            <View style={[{width:widthValue(3),height:heightValue(17)},{backgroundColor:isDisabled ?'#077227':'#29292e'},styles.allCenter,radius(30)]}>
                <TouchableOpacity key={isDisabled} disabled={isDisabled}  onPress={handlenext}>
                    <View style={[styles.row]}>
                          <Text style={[styles.white,fontSize(17)]}>Next</Text>
                         <FontAwesome5Icon name='chevron-right' style={[styles.white,fontSize(15),marginPosition(4,0,0,5)]}/>
                    </View>
                   
                </TouchableOpacity>
            </View>
            </>:null}





      </View>
    
     </View>
  )
}

export default UserManagementcomp
