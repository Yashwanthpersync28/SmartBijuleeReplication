import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { stackarray } from './screens/StackNavigation/Stackdata/Stackdatas';

const Stack= createStackNavigator();

function Appp() {

  return ( 
    <> 
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

  </>
  
  )
}


export default codePush(Appp)
