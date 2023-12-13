import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { heightValue,widthValue,fontSize,marginPosition,styles,position,borderColor,borderWidth ,radius,padding,flex} from '../../../../../styles/Styles'
import { View,Text } from 'react-native'


const ListofMembers = ({Goto}) => {
  return (
    <View style={[{width:widthValue(1.1),height:heightValue(2)},marginPosition(20),styles.positionRelative]}>
            
            <View style={[styles.bgdashblue,radius(20),{height:heightValue(2.5)},padding(25)]}>
            <View style={[{height:50,width:50},radius(50),styles.allCenter,styles.bggreen,position(-20,-20,0),styles.positionAbsolute]}>
                <FontAwesome5Icon name='plus' onPress={()=>Goto(true)}/>
            </View>
                <View style={[styles.row]}>
                    <Text style={[styles.white,fontSize(17)]}>List of </Text>
                    <Text style={[styles.green,fontSize(17),marginPosition(0,0,0,5)]}>Accounts Handles</Text>
                 </View> 
                     <View style={[styles.spaceBetween,styles.row,marginPosition(20),borderColor(styles.gr),borderWidth(0,0,0,1)]}>     
                              <View style={[styles.row,marginPosition(0,0,5)]}>
                                  <Text style={[styles.white,fontSize(13),marginPosition(0,15)]}>SI NO.</Text>
                                  <Text style={[styles.white,fontSize(13),marginPosition(0,15)]}>Name</Text>

                             </View>
                             <View style={[styles.row,marginPosition(0,0,5)]}>
                                    <Text style={[styles.white,fontSize(13),marginPosition(0,15)]}>Consumer ID</Text>
                                     <Text style={[styles.white,fontSize(13),marginPosition(0,0,0,10)]}>Action</Text>

                             </View>

                       </View> 
                       <View style={[{width:widthValue(1.3),justifyContent:'flex-end',alignItems:'center'},flex(1),]}>
                        <Text style={[styles.green,fontSize(13)]}>You can add upto 5 Accounts Members</Text>
                       </View>
            </View>
        </View>    
  )
}

export default ListofMembers
