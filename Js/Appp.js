import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { stackarray } from './screens/StackNavigation/Stackdata/Stackdatas';
// import codePush from "react-native-code-push";
import DrawerNavigation from './screens/DrawerNavigation';
import { Provider } from 'react-redux';
import store, { persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import { store } from './Redux/Store/store';

const Stack= createStackNavigator();

function Appp() {

  return ( 
    <> 
    <Provider store={store}>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer>
  
         <Stack.Navigator>
      {/* {getting every components from stackarray} */}
         {stackarray.map((arr,index)=>{
              return(
                 <Stack.Screen key={index} name={arr.name} component={arr.componentname} options={{
                   header:()=>null
                  }}/> 
                 )
                })}
         </Stack.Navigator>
     
       </NavigationContainer>
       {/* </PersistGate> */}
       {/* </Provider> */}
  </Provider>
  </>
  
  )
}

// codePush
export default Appp
