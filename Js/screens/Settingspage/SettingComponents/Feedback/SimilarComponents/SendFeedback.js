import React, { useState } from 'react'
import { View,Text } from 'react-native'
import { heightValue, styles, widthValue,flex, radius, marginPosition } from '../../../../../../styles/Styles'
import BackButton from '../../CommonComp/BackButton'
import SettingsHeader from '../../CommonComp/SettingsHeader'
import FeedbackCard from './FeedbackCard'
const SendFeedback = () => {

  return (
    <View style={[styles.bglightblack,{height:heightValue(1),width:widthValue(1)},styles.centerHorizontal]}>
         <View style={[{width:widthValue(1.2),height:heightValue(1.6)}]}>
                 <BackButton/>
                 <SettingsHeader name={'Speak Your'} heading={'Mind'} details={'Please provide your feedback, it will help us to serve you better'}/>
                 <FeedbackCard/>
                 
        </View> 
       
    </View>
  )
}

export default SendFeedback
