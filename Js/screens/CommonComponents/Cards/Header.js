import React from 'react'
import { View,Text} from 'react-native'
import { heightValue,widthValue,styles,fontSize,marginPosition ,setcolum, setdisplay} from '../../../../styles/Styles'
const Header = ({heading,continueprop,details,columnwise,display}) => {
  
  return (
   
    <>   
        <View style={[{ height: heightValue(12), width: widthValue(1.1) }, styles.selfStart, marginPosition('0%',0,0,'5%')]} >
           <View style={[setcolum(columnwise)]}>
               <Text style={[ fontSize(20), styles.white]}>{heading}</Text>
                <Text style={[fontSize(20), styles.lightgreen, {marginLeft: columnwise ? '0%' : '3%'}]}>{continueprop}</Text>
           </View>
          <Text style={[fontSize(14), styles.white,marginPosition('0%',0,'3%')]}>{details}</Text>
        </View>
   </> 

  )
}

export default Header
