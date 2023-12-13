import React, { useState, useEffect } from 'react'
import Splash from '../splashscreen/Splash';
import { View } from 'react-native'
import { Swiperr } from '../../Onboarding-screens/SwiperOnboarding/Swiperr';


function MainAppp({navigation}) {
    let [showcomponent,setshowcomponent] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setshowcomponent(false)
        }, 3000)
    }, [])
    return (
       
        <View  style={{flex:1}}>
            {
                showcomponent ? <Splash navigation={navigation}/> :
                    <View style={{flex:1}}>
                        <Swiperr navigation={navigation}/>
                    </View>
            }
        </View>
    )
}

export default MainAppp
