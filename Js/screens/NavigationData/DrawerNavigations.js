
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Text, View , Modal , TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { draweritems } from '../../Constants/DrawerDataitems/DataDrawer';
import { heightValue ,widthValue, styles, fontSize, flex, heightwidth, marginPosition, borderColor, borderWidth, radius, padding } from '../../../styles/Styles';
import { useNavigation } from '@react-navigation/native';
const Drawer = createDrawerNavigator();



const DrawerNavigations = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();
    const openModal = () => {
      setModalVisible(true);

    };
  
    const closeModal = () => {
      setModalVisible(false);
    };
    return (
        <Drawer.Navigator

            drawerContent={(props) => {
                return (
                    <SafeAreaView style={[flex(1), { backgroundColor: '#282f42' }]}>
                        <View>
                            <View style={[{ height: widthValue(2) }, styles.centerHorizontal,marginPosition(30)]}>
                                <Image source={require('../Assetslottie/Images/LoginLogo2.png')} style={[{ width: widthValue(3), height: widthValue(3), resizeMode: 'contain' }]} />
                                <Text style={[fontSize(17), styles.fontwhite, { marginTop: 10 }]}>Yashwanth</Text>
                                <Text style={[fontSize(15), styles.fontwhite,]}>Consumer ID : C000003</Text>
                            </View>
                        </View>
                        <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props}
                            style={[{
                                marginTop: 0,
                                marginBottom: 50
                            }]}
                        >
                            {draweritems.map((item, index) => {
                                return (
                                    <DrawerItem
                                        key={index}
                                        label={item.label}
                                        icon={() => (
                                            <FontAwesome5 name={item.icon} style={[fontSize(18), styles.fontwhite, marginPosition(0, 0, 0, 20)]} />
                                        )}
                                        onPress={() => {
                                            if (item.name === 'Logout') {
                                              openModal();
                                            } else {
                                              props.navigation.navigate(item.component);
                                            }
                                          }}
                                        style={{
                                            borderTopColor: 'grey',
                                            borderTopWidth: 0.5,
                                        }}
                                        labelStyle={
                                            {
                                                color: 'white',
                                                fontSize: 13,
                                            }
                                        }
                                    />
                                )
                            })}
                        </DrawerContentScrollView>
                        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal} style={[{ flex:4,alignItems:'center',justifyContent:'center'}]}>
                          <SafeAreaView style={[styles.selfStart,styles.bgWhite, {position:'absolute',bottom:0,width:'100%'},padding(0,30,30,0,30),radius(0,20,0,0,20)]}>
                            <Text style={[fontSize(18), styles.green]}>Are you sure you want to Logout?</Text>
                            <View style={[styles.row,{gap:30},styles.allCenter,{height:heightValue(8),width:widthValue(1.2)}]}>
                            <View style={[{height:heightValue(14),width:widthValue(2.3)},styles.allCenter,borderColor(styles.black),borderWidth(1),radius(10)]}>
                                <TouchableOpacity onPress={closeModal}>
                                    <Text style={styles.black}>No</Text>
                                </TouchableOpacity>
                                </View>
                                <View style={[{height:heightValue(14),width:widthValue(2.3),backgroundColor:'#04632a'},styles.allCenter,radius(10)]}>
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
                )
            }}
            
            screenOptions={{
                headerShown: false,
                drawerStatusBarAnimation: 'slide',
                swipeEnabled:false,
                swipeEdgeWidth:0,
                drawerStyle: {
                    backgroundColor: '#282f42',
                    width: widthValue(1.6),
                },
                
                sceneContainerStyle: {
                    backgroundColor: '#282f42',
                },
                drawerContentStyle: {
                    color: 'white',
                    backgroundColor: '#282f42',
                   
                },
                
                drawerType: 'slide',
                drawerInactiveTintColor: 'transparent',
                overlayColor: 'transparent',
                drawerActiveBackgroundColor: '#282f42',
                drawerActiveTintColor: '#282f42',
                drawerItemStyle: {
                    borderTopWidth: .8,
                    borderColor: 'grey',
                },
            }}

        >
            {draweritems.map((item, index) => (
                <Drawer.Screen
                    key={index}
                    name={item.name}
                    component={item.component}
                />
            ))}
        </Drawer.Navigator >
    );
};

export default DrawerNavigations;