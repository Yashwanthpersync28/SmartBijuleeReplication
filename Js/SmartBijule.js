import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {stackarray} from './screens/StackNavigation/Stackdata/Stackdatas';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, { persistor } from './Redux/store';
// import store, {persistor} from './Redux/store';

const Stack = createStackNavigator();

function SmartBijule() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              {/* {getting every components from stackarray} */}
              {stackarray.map((arr, index) => {
                return (
                  <Stack.Screen
                    key={index}
                    name={arr.name}
                    component={arr.componentname}
                    options={{
                      header: () => null,
                    }}
                  />
                );
              })}
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}

// codePush
export default SmartBijule;
