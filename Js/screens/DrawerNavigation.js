import React from 'react'
import { View,Text,Image, StyleSheet } from 'react-native'
import { fontSize, heightwidth, marginPosition, radius, styles } from '../../styles/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


import { createDrawerNavigator } from '@react-navigation/drawer';
import Contactus from './Contactus';
// import DashboardTwo from './DashboardTwo';
import Dashboardone from './Dashboardd/Dashboardone';
import CustomDrawer from './Drawer/CustomDrawer';
import Ex from './Dashboardd/Ex';
import Comparison from './Consumption Log/Comparisonfd/Comparison';
import History from './Consumption Log/History/History';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Billing from './Billing/Billing';
import Mdi from './MDI/Mdi';
import Energy from './EnergySavingTips/Energy';
import Power from './PowerQuality/Power';
import Notifications from './Notification/Notifications';
import AllFAQ from './FAQ/AllFAQ';
import navdata from './TextInput/NavigationScreens/Screensdata';
import Setting from './Settingspage/SettingComponents/Setting';
// import navdata from "./TextInput/NavigationScreens/Screensdata"

const Drawer= createDrawerNavigator();

const DrawerNavigation = ({navigation}) => {
  return (
    <>
    <NavigationContainer independent={true}>
        <Drawer.Navigator  screenOptions={{
          overlayColor:"transparent",
          drawerType:'slide',
          drawerStyle:{
            width:'55%'
          },
          drawerItemStyle:{
            borderTopWidth:0.5,
            borderTopColor:'grey',
            
          },
          drawerLabelStyle:{
            fontSize:13,
            color:'white'
          },
        
        headerShown:false,
        sceneContainerStyle:{
          backgroundColor:"#282f42",
          // overflow:"hidden",
          width:'auto',

        }
        
       
      }} drawerContent={props=><CustomDrawer {...props}/>}>
            
       <Drawer.Screen name='dashboardone' component={Dashboardone} options={{
        drawerLabel:"Dashboard",
        title:"Dashboard",
        drawerActiveBackgroundColor:'#1f2d57',
        // width:'60%',
        drawerIcon: ()=>(
          <FontAwesome5Icon name='home' style={[styles.white,fontSize(15)]}/>
        ),
      }}/>
    
      <Drawer.Screen name='compare' component={Comparison} options={{
        drawerLabel:"Comparison",
        title:"compare",
        drawerActiveBackgroundColor:'#1f2d57',
        // width:'60%',
        drawerIcon: ()=>(
          <FontAwesome5Icon name='percentage' style={[styles.white,fontSize(15)]}/>
        ),
      }}>
      </Drawer.Screen>
      <Drawer.Screen name='history' component={History} options={{
        drawerLabel:"History",
        title:"history",
        drawerActiveBackgroundColor:'#1f2d57',
        // width:'60%',
        drawerIcon: ()=>(
          <FontAwesome5Icon name='play-circle' style={[styles.white,fontSize(15)]}/>
        ),
      }}>
      </Drawer.Screen>
      <Drawer.Screen name='billing' component={Billing} options={{
        drawerLabel:"Billing",
        title:"billing",
        drawerActiveBackgroundColor:'#1f2d57',
        // width:'60%',
        drawerIcon: ()=>(
          <FontAwesome5Icon name='credit-card' style={[styles.white,fontSize(15)]}/>
        ),
      }}>
      </Drawer.Screen>
      <Drawer.Screen name='mdi' component={Mdi} options={{
        drawerLabel:"MDI",
        title:"MDI",
        drawerActiveBackgroundColor:'#1f2d57',
        // width:'60%',
        drawerIcon: ()=>(
          <FontAwesome5Icon name='exclamation-circle' style={[styles.white,fontSize(15)]}/>
        ),
      }}>
      </Drawer.Screen>
      <Drawer.Screen name='energy' component={Energy} options={{
        drawerLabel:"Energy Tips",
        title:"Energy Tips",
        drawerActiveBackgroundColor:'#1f2d57',
        // width:'60%',
        drawerIcon: ()=>(
          <FontAwesome5Icon name='burn' style={[styles.white,fontSize(15)]}/>
        ),
      }}>
      </Drawer.Screen>
      <Drawer.Screen name='power' component={Power} options={{
        drawerLabel:"Power Quality",
        title:"Power Quality",
        drawerActiveBackgroundColor:'#1f2d57',
        // width:'60%',
        drawerIcon: ()=>(
          <FontAwesome5Icon name='check-square' style={[styles.white,fontSize(15)]}/>
        ),
      }}>
      </Drawer.Screen>
      <Drawer.Screen name='notification' component={Notifications} options={{
        drawerLabel:"Notification",
        title:"Notification",
        drawerActiveBackgroundColor:'#1f2d57',
        // width:'60%',
        drawerIcon: ()=>(
          <FontAwesome5Icon name='bell' style={[styles.white,fontSize(15)]}/>
        ),
      }}>
      </Drawer.Screen>
      <Drawer.Screen name='Allfaq' component={AllFAQ} options={{
        drawerLabel:"FAQ",
        title:"FAQ",
        drawerActiveBackgroundColor:'#1f2d57',
        // width:'60%',
        drawerIcon: ()=>(
          <FontAwesome5Icon name='folder' style={[styles.white,fontSize(15)]}/>
        ),
      }}>   
      </Drawer.Screen>
      <Drawer.Screen name='settings' component={Setting} options={{
        drawerLabel:"Settings",
        title:"Settings",
        drawerActiveBackgroundColor:'#1f2d57',
        // width:'60%',
        drawerIcon: ()=>(
          <FontAwesome5Icon name='cog' style={[styles.white,fontSize(15)]}/>
        ),
      }}>  
      </Drawer.Screen>
      
    
       {/* {navdata.map((nav,index)=>{
        return(
             <Drawer.Screen key={index} name={nav.label} component={nav.componentname} 
              // width:'60%', 
              >
            </Drawer.Screen> 
        )
       })} */}

        </Drawer.Navigator>
    </NavigationContainer>
    </>
  )
}

export default DrawerNavigation



