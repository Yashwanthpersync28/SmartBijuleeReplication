import React, { useState } from 'react'
import { View,Text, SafeAreaView } from 'react-native'
import { heightValue, styles, widthValue,flex, radius, marginPosition } from '../../../../../../styles/Styles'
import BackButton from '../../CommonComp/BackButton'
import SettingsHeader from '../../CommonComp/SettingsHeader'
import FeedbackCard from './FeedbackCard'
import { useSelector } from 'react-redux'
const SendFeedback = () => {
  const darkMode = useSelector((state)=>state.system.darkMode)
  return (
    <SafeAreaView>
    <View style={[darkMode?styles.bglightWhite:styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
         <View style={[{width:widthValue(1.2),height:heightValue(1.6)}]}>
                 <BackButton/>
                 <SettingsHeader name={'Speak Your'} heading={'Mind'} details={'Please provide your feedback, it will help us to serve you better'}/>
                 <FeedbackCard/>
                 
        </View> 
       
    </View>
    </SafeAreaView>
  )
}

export default SendFeedback
