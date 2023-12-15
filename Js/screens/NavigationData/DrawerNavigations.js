import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, Linking,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { drawerItems } from '../../Constants/DrawerDataitems/DataDrawer';
import Comparison from '../Consumption Log/Comparisonfd/Comparison';
import History from '../Consumption Log/History/History';
import { useNavigation } from '@react-navigation/native';
import { heightValue , widthValue , styles , fontSize , flex , marginPosition , padding , borderWidth , radius , borderColor ,} from '../../../styles/Styles';





const Drawer = createDrawerNavigator();

const DrawerNavigations = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  const navigation = useNavigation();
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };



  const renderSubMenu = (subMenu)=>{
    return selectedDropdown
    && subMenu &&
    subMenu.map((child,childIndex)=>(
    <>
      <DrawerItem
            key={childIndex}
            label={child.label}
            icon={() => (
              <FeatherIcon
                name={child.icon}
                style={[fontSize(20), styles.fontwhite,]}
              />
            )}
            onPress={() => {
              navigation.navigate(child.name);
              setSelectedDropdown(null);
            }}
            style={{ borderTopWidth: 0.2, marginLeft: 30 , borderColor:"#778899" }}
            labelStyle={{ color: 'white', fontSize: 12 }}
          />
    </>

    ))

  }
  return (
    
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView style={[flex(1), { backgroundColor: '#282f42' }]}>
            <View>
              <View style={[{ height: widthValue(2) }, marginPosition(30), styles.allCenter]}>
                <Image
                  source={require('../Assetslottie/Images/LoginLogo2.png')}
                  style={[{ width: widthValue(3), height: heightValue(7), resizeMode: 'contain' }]}
                />
                <Text style={[fontSize(17), styles.fontwhite]}>Yashwanth</Text>
                <Text style={[fontSize(14), styles.fontwhite]}>Consumer ID : C000003</Text>
              </View>
            </View>
            <DrawerContentScrollView  contentContainerStyle={[{paddingTop:0}]} showsVerticalScrollIndicator={false} {...props} style={[{ marginTop: 0, marginBottom: 50 }]}>
              {drawerItems.map((menu, index) => (
                <View key={index}>
                  <DrawerItem
                    label={menu.label}
                    icon={() => (
                      <FeatherIcon
                        name={menu.icon}
                        style={[fontSize(20), styles.fontwhite, marginPosition(0, 0, 0, 0)]}
                      />
                    )}
                    // for dropdown 
                    onPress={() => {
                      if (menu.children) {
                        setSelectedDropdown(selectedDropdown === menu.name ? null : menu.name);
                      } else if (menu.name === 'Rating') {
                        const openStore = () => {
                          // For Android
                          Linking.openURL('market://details?id=com.SMARTBIJULEE.android').catch((err) => {
                            console.error('Error opening Play Store:', err);
                          });

                          // For iOS
                          Linking.openURL('https://apps.apple.com/app/your-app-id').catch((err) => {
                            console.error('Error opening App Store:', err);
                          });
                        };
                        openStore();
                      } else if (menu.name === 'Logout') {
                        openModal();
                      } else {
                        console.log("menu.component",menu.component);
                        navigation.navigate( menu.component);
                      }
                    }}
                    style={{
                      borderTopColor: '#778899',
                      borderTopWidth: 0.3,
                      backgroundColor: selectedDropdown === menu.name ? '#282f42' : 'transparent',
                    }}
                    labelStyle={{
                      color: 'white',
                      fontSize: 12,
                      marginLeft:-15
                    }}
                  />
                  {renderSubMenu(menu.children)}
                    
                </View>
              ))}
            </DrawerContentScrollView>
           {/* Logout Modal */}
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal} style={[{ flex:4,alignItems:'center',justifyContent:'center'}]}>
                          <SafeAreaView style={[styles.selfStart,styles.bgWhite, {position:'absolute',bottom:0,width:'100%'},padding(0,20,20,0,20),radius(0,20,0,0,20)]}>
                          <Text style={[fontSize(20), styles.gray]}>Alert</Text>
                            <Text style={[fontSize(16), styles.gray,marginPosition(10)]}>Are you sure you want to Logout?</Text>
                            <View style={[styles.row,{gap:30},styles.allCenter,{height:heightValue(8),width:widthValue(1.2)}]}>
                            <View style={[{height:heightValue(16),width:widthValue(2.6)},styles.allCenter,borderColor(styles.black),borderWidth(1),radius(10)]}>
                                <TouchableOpacity onPress={closeModal}>
                                    <Text style={styles.black}>No</Text>
                                </TouchableOpacity>
                                </View>
                                <View style={[{height:heightValue(16),width:widthValue(2.6),backgroundColor:'#39763b'},styles.allCenter,radius(10)]}>
                                <TouchableOpacity onPress={() => {
                                       navigation.navigate('login')
                                       closeModal();
                                   }} >
                                   <Text style={styles.white}>Yes</Text>
                              </TouchableOpacity>
                              </View>
                              </View>
                           </SafeAreaView>
                           </Modal>
          </SafeAreaView>
        );
      }}
      screenOptions={{
        headerShown: false,
        drawerStatusBarAnimation: 'slide',
        swipeEnabled: false,
        swipeEdgeWidth: 0,
        drawerStyle: {
          width: widthValue(1.6),
          backgroundColor: '#282f42',
        },
        drawerContentStyle: {
          backgroundColor: '#282f42',
          color: 'white',
        },
        sceneContainerStyle: {
          backgroundColor: '#282f42',
        },
        drawerType: 'slide',
        drawerActiveBackgroundColor: '#282f42',
        drawerActiveTintColor: '#282f42',
        drawerInactiveTintColor: 'transparent',
        overlayColor: 'transparent',
        drawerItemStyle: {
          borderTopWidth: 0.8,
          borderColor: 'grey',
        },
      }}
    >
      {drawerItems.map((item, index) => (
        <Drawer.Screen key={index} name={item.name} component={item.component} />
        
      ))}
      <Drawer.Screen name="Comparison" component={Comparison} />
      <Drawer.Screen  name="History" component={History} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigations;