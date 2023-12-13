import React from 'react'
import { View,Text } from 'react-native'
import { marginPosition } from '../../styles/Styles'
import DrawerScreenWrapper from './Drawer/DrawerScreenWrapper'

const Contactus = () => {
  return (
    <DrawerScreenWrapper>
    <View style={[marginPosition('5%')]}>
        <Text>welcome to contact page</Text>
    </View>
    </DrawerScreenWrapper>
  )
}

export default Contactus




// import React, { useState } from 'react';
// import { View, Text, Modal, TouchableOpacity, Image, Linking, Alert } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FeatherIcon from 'react-native-vector-icons/Feather';
// import {
//   heightValue,
//   widthValue,
//   styles,
//   fontSize,
//   flex,
//   marginPosition,
//   padding,
//   borderWidth,
//   radius,
//   paddingPosition,
// } from '../../Utils/Styles';
// import drawerItems from '../../Constants/DrawerItems';
// import { useNavigation } from '@react-navigation/native';
// import StackNavigator from '../StackNav/Stack';
// import Comparison from '../Consumption/Comparison/Comparison';
// import History from '../Consumption/History/History';

// const Drawer = createDrawerNavigator();

// const DrawerApp = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedDropdown, setSelectedDropdown] = useState(null);

//   const navigation = useNavigation();
//   const openModal = () => {
//     setModalVisible(true);
//   };
//   const closeModal = () => {
//     setModalVisible(false);
//   };



//   const renderSubMenu = (subMenu)=>{
//     return selectedDropdown
//     && subMenu &&
//     subMenu.map((child,childIndex)=>(
//     <>
//     {console.log("chhgjhkjklild",child)}
//     {console.log("childIndex",childIndex)}
//       <DrawerItem
//             key={childIndex}
//             label={child.label}
//             icon={() => (
//               <FeatherIcon
//                 name={child.icon}
//                 style={[fontSize(16), styles.fontwhite, marginPosition(0, 0, 0, 20)]}
//               />
//             )}
//             onPress={() => {
//               navigation.navigate(child.name);
//               setSelectedDropdown(null);
//             }}
//             style={{ borderTopWidth: 0, marginLeft: 30 }}
//             labelStyle={{ color: 'white', fontSize: 13 }}
//           />
//     </>

//     ))

//   }
//   return (
    
//     <Drawer.Navigator
//       drawerContent={(props) => {
//         return (
//           <SafeAreaView style={[flex(1), { backgroundColor: '#282f42' }]}>
//             <View>
//               <View style={[{ height: widthValue(2) }, marginPosition(40), styles.centerHorizontal]}>
//                 <Image
//                   source={require('../../../assets/LoginLogo2.png')}
//                   style={[{ width: widthValue(3), height: widthValue(3), resizeMode: 'contain' }]}
//                 />
//                 <Text style={[fontSize(17), styles.fontwhite, { marginTop: 20 }]}>JuliusCeaser</Text>
//                 <Text style={[fontSize(15), styles.fontwhite]}>Consumer ID : C000003</Text>
//               </View>
//             </View>
//             <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props} style={[{ marginTop: 0, marginBottom: 50 }]}>
//               {drawerItems.map((menu, index) => (
//                 <View key={index}>
//                   {console.log("menumenumenu",menu)}
//                   <DrawerItem
//                     label={menu.label}
//                     icon={() => (
//                       <FeatherIcon
//                         name={menu.icon}
//                         style={[fontSize(16), styles.fontwhite, marginPosition(0, 0, 0, 20)]}
//                       />
//                     )}
//                     onPress={() => {
//                       if (menu.children) {
//                         setSelectedDropdown(selectedDropdown === menu.name ? null : menu.name);
//                       } else if (menu.name === 'Rating') {
//                         const openStore = () => {
//                           // For Android
//                           Linking.openURL('market://details?id=com.SMARTBIJULEE.android').catch((err) => {
//                             console.error('Error opening Play Store:', err);
//                           });

//                           // For iOS
//                           Linking.openURL('https://apps.apple.com/app/your-app-id').catch((err) => {
//                             console.error('Error opening App Store:', err);
//                           });
//                         };
//                         openStore();
//                       } else if (menu.name === 'LogOut') {
//                         openModal();
//                       } else {
//                         console.log("menu.component",menu.component);
//                         navigation.navigate( menu.component);
//                       }
//                     }}
//                     style={{
//                       borderTopColor: 'grey',
//                       borderTopWidth: 1,
//                       backgroundColor: selectedDropdown === menu.name ? '#333f52' : 'transparent',
//                     }}
//                     labelStyle={{
//                       color: 'white',
//                       fontSize: 13,
//                     }}
//                   />
//                   {renderSubMenu(menu.children)}
                    
//                 </View>
//               ))}
//             </DrawerContentScrollView>
//             {/* ----------logout modal------------ */}
//             <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal} style={[{ alignItems: 'center', justifyContent: 'center' }]}>
//               <SafeAreaView
//                 style={[styles.bgWhite, paddingPosition(20, 20, 40, 20), radius(0, 15, 0, 0, 15), { position: 'absolute', bottom: 0, width: widthValue(1) }]}
//               >
//                 <View style={[{ gap: 20 }]}>
//                   <Text style={[fontSize(18), styles.gr]}>Alert</Text>
//                   <Text style={[fontSize(13), styles.gr]}>Are you sure you want to logout ?</Text>
//                 </View>
//                 <View style={[styles.row, styles.centerHorizontal, styles.spaceBetweenVertical, marginPosition(20, 0, 0, 0)]}>
//                   <TouchableOpacity onPress={closeModal} style={[padding(0, 18, 70), borderWidth(1), radius(10), styles.allCenter]}>
//                     <Text style={styles.black}>No</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     onPress={() => {
//                       navigation.navigate('Login');
//                       closeModal();
//                     }}
//                     style={[styles.bglightgreen, padding(0, 20, 70), radius(10), styles.allCenter]}
//                   >
//                     <Text style={styles.fontwhite}>Yes</Text>
//                   </TouchableOpacity>
//                 </View>
//               </SafeAreaView>
//             </Modal>
//           </SafeAreaView>
//         );
//       }}
//       screenOptions={{
//         headerShown: false,
//         drawerStatusBarAnimation: 'slide',
//         swipeEnabled: false,
//         swipeEdgeWidth: 0,
//         drawerStyle: {
//           width: widthValue(1.6),
//           backgroundColor: '#282f42',
//         },
//         drawerContentStyle: {
//           backgroundColor: '#282f42',
//           color: 'white',
//         },
//         sceneContainerStyle: {
//           backgroundColor: '#282f42',
//         },
//         drawerType: 'slide',
//         drawerActiveBackgroundColor: '#282f42',
//         drawerActiveTintColor: '#282f42',
//         drawerInactiveTintColor: 'transparent',
//         overlayColor: 'transparent',
//         drawerItemStyle: {
//           borderTopWidth: 0.8,
//           borderColor: 'grey',
//         },
//       }}
//     >
//       {drawerItems.map((item, index) => (
//         <Drawer.Screen key={index} name={item.name} component={item.component} />
        
//       ))}
//       <Drawer.Screen name="Comparison" component={Comparison} />
//       <Drawer.Screen  name="History" component={History} />
//     </Drawer.Navigator>
//   );
// };

// export default DrawerApp;





// import { createStackNavigator } from '@react-navigation/stack';
// import React, { useState } from 'react';
// import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
// import { Image, Text, View , Modal , TouchableOpacity} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import { draweritems } from '../../Constants/DrawerDataitems/DataDrawer';
// import { heightValue ,widthValue, styles, fontSize, flex, heightwidth, marginPosition, borderColor, borderWidth, radius, padding } from '../../../styles/Styles';
// import { useNavigation } from '@react-navigation/native';
// const Drawer = createDrawerNavigator();



// const DrawerNavigations = () => {
//     const [modalVisible, setModalVisible] = useState(false);

//     const navigation = useNavigation();
//     const openModal = () => {
//       setModalVisible(true);

//     };
  
//     const closeModal = () => {
//       setModalVisible(false);
//     };
//     return (
//         <Drawer.Navigator

//             drawerContent={(props) => {
//                 return (
//                     <SafeAreaView style={[flex(1), { backgroundColor: '#282f42' }]}>
//                         <View>
//                             <View style={[{ height: widthValue(2) }, styles.centerHorizontal,marginPosition(30)]}>
//                                 <Image source={require('../Assetslottie/Images/LoginLogo2.png')} style={[{ width: widthValue(3), height: widthValue(3), resizeMode: 'contain' }]} />
//                                 <Text style={[fontSize(17), styles.fontwhite, { marginTop: 10 }]}>Yashwanth</Text>
//                                 <Text style={[fontSize(15), styles.fontwhite,]}>Consumer ID : C000003</Text>
//                             </View>
//                         </View>
//                         <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props}
//                             style={[{
//                                 marginTop: 0,
//                                 marginBottom: 50
//                             }]}
//                         >
//                             {draweritems.map((item, index) => {
//                                 return (
//                                     <DrawerItem
//                                         key={index}
//                                         label={item.label}
//                                         icon={() => (
//                                             <FontAwesome5 name={item.icon} style={[fontSize(18), styles.fontwhite, marginPosition(0, 0, 0, 20)]} />
//                                         )}
//                                         onPress={() => {
//                                             if (item.name === 'Logout') {
//                                               openModal();
//                                             } else {
//                                               props.navigation.navigate(item.component);
//                                             }
//                                           }}
//                                         style={{
//                                             borderTopColor: 'grey',
//                                             borderTopWidth: 0.5,
//                                         }}
//                                         labelStyle={
//                                             {
//                                                 color: 'white',
//                                                 fontSize: 13,
//                                             }
//                                         }
//                                     />
//                                 )
//                             })}
//                         </DrawerContentScrollView>
//                         <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal} style={[{ flex:4,alignItems:'center',justifyContent:'center'}]}>
//                           <SafeAreaView style={[styles.selfStart,styles.bgWhite, {position:'absolute',bottom:0,width:'100%'},padding(0,30,30,0,30),radius(0,20,0,0,20)]}>
//                             <Text style={[fontSize(18), styles.green]}>Are you sure you want to Logout?</Text>
//                             <View style={[styles.row,{gap:30},styles.allCenter,{height:heightValue(8),width:widthValue(1.2)}]}>
//                             <View style={[{height:heightValue(14),width:widthValue(2.3)},styles.allCenter,borderColor(styles.black),borderWidth(1),radius(10)]}>
//                                 <TouchableOpacity onPress={closeModal}>
//                                     <Text style={styles.black}>No</Text>
//                                 </TouchableOpacity>
//                                 </View>
//                                 <View style={[{height:heightValue(14),width:widthValue(2.3),backgroundColor:'#04632a'},styles.allCenter,radius(10)]}>
//                                 <TouchableOpacity onPress={() => {
//                                        navigation.navigate('login')
//                                        closeModal();
//                                    }} >
//                                    <Text style={styles.white}>Yes</Text>
//                               </TouchableOpacity>
//                               </View>
//                               </View>
//                            </SafeAreaView>
//                            </Modal>
//                     </SafeAreaView>
//                 )
//             }}
            
//             screenOptions={{
//                 headerShown: false,
//                 drawerStatusBarAnimation: 'slide',
//                 swipeEnabled:false,
//                 swipeEdgeWidth:0,
//                 drawerStyle: {
//                     backgroundColor: '#282f42',
//                     width: widthValue(1.6),
//                 },
                
//                 sceneContainerStyle: {
//                     backgroundColor: '#282f42',
//                 },
//                 drawerContentStyle: {
//                     color: 'white',
//                     backgroundColor: '#282f42',
                   
//                 },
                
//                 drawerType: 'slide',
//                 drawerInactiveTintColor: 'transparent',
//                 overlayColor: 'transparent',
//                 drawerActiveBackgroundColor: '#282f42',
//                 drawerActiveTintColor: '#282f42',
//                 drawerItemStyle: {
//                     borderTopWidth: .8,
//                     borderColor: 'grey',
//                 },
//             }}

//         >
//             {draweritems.map((item, index) => (
//                 <Drawer.Screen
//                     key={index}
//                     name={item.name}
//                     component={item.component}
//                 />
//             ))}
//         </Drawer.Navigator >
//     );
// };

// export default DrawerNavigations;