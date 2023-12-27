import React from 'react'
import { View,Text} from 'react-native'
import { heightValue,widthValue,styles,fontSize,marginPosition ,setcolum, setdisplay, lineHeight} from '../../../../styles/Styles'
import { useSelector } from 'react-redux'
const Header = ({heading,continueprop,details,columnwise}) => {
  const darkMode = useSelector((state)=>state.system.darkMode)
  
  return (
   
    <>   
        <View style={[{ height: heightValue(13), width: widthValue(1.1) }, styles.selfStart, marginPosition(0,0,10,20)]} >
           <View style={[setcolum(columnwise)]}>
               <Text style={[ fontSize(20), darkMode?styles.black:styles.white]}>{heading}</Text>
                <Text style={[fontSize(20), {marginLeft: columnwise ? 0 : 8, color:"#64ad64"}]}>{continueprop}</Text>
           </View>
          <Text style={[fontSize(13), darkMode?styles.black:styles.white,marginPosition(5,0,0),lineHeight(25)]}>{details}</Text>
        </View>
   </> 

  )
}

export default Header
