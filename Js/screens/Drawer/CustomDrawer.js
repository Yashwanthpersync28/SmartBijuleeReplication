import React,{useState} from 'react'
import { DrawerContentScrollView,DrawerItem,DrawerItemList } from '@react-navigation/drawer'
import { View ,Text, ImageBackground} from 'react-native'
import { flex, fontSize, heightValue, heightwidth, marginPosition, styles, widthValue } from '../../../styles/Styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import navdata from '../TextInput/NavigationScreens/Screensdata'
import { useSelector } from 'react-redux'
// import navdata from '../TextInput/NavigationScreens/Screensdata'
const CustomDrawer = (props) => {
    name='Esyatest3'
    let ID='C000003'

  return (
    <View style={[flex(1),{backgroundColor:"#282f42"}]}>
        <DrawerContentScrollView 
        {...props}
        contentContainerStyle={{backgroundColor:'#282f42'}}>
            <View style={[{height:heightValue(3.8)},styles.allCenter,{marginBottom:heightValue(80)}]}>
                <ImageBackground source={require('../Drawer/LoginLogo2.png')} style={[fontSize(30),heightwidth(120,120),marginPosition('8%')]}/>
                <Text style={[fontSize(15),styles.white,marginPosition('1%')]} >{name}</Text>
                <Text style={[fontSize(15),styles.white,marginPosition('1%')]}>Consumer ID {ID}</Text>

            </View>
        <DrawerItemList {...props}/>
        {/* {
          navdata.map((nav,index)=>{
            return(
              <DrawerItem key={index} label={nav.label} icon={()=>(
                <FontAwesome5Icon name={nav.icon} style={[fontSize(20),styles.white]}/>
                
              )} onPress={()=>props.navigation.navigate(nav.componentname)}/>

            )
          })
        } */}
        </DrawerContentScrollView>
        <View>
            
        </View>
    </View>
  )
}

export default CustomDrawer
