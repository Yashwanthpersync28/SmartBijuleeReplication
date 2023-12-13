import React from 'react';
import { StyleSheet, Dimensions, Platform, PixelRatio, } from 'react-native';
import { Colors } from './Colors';

// - - - - - CUSTOMISED BUTTON - - - - - - //
export const buttonColor = (darkMode) => {
    return [darkMode ? styles.bgGreen : styles.bgBlue]
}
 
export const bgColor = (darkMode) => {
    return darkMode ? styles.bglightgreyish : styles.bggreyish
}

export const textColor = (darkMode) => {
    return darkMode ? styles.white : styles.black
}
export const setheight = (h) => {
    return h ?  screenHeight(8): screenHeight(7.5)
}
export const setheightPASS = (h) => {
    return h ?  screenHeight(8.1): screenHeight(7)
}
export const heightcard = (h,v,e) => {
    return h||v||e ?  screenHeight(1.4): screenHeight(1.2)
}
export const setmargin = (h) => {
    return h ?  marginPosition(0,0,0,'0%'): marginPosition(0,0,0,'50%')
}
export const setmarginicon = (h) => {
    return h ?  marginPosition('5%',0,0,'2%'): marginPosition('2%',0,0,'2%')
}

export const setradius = (a) => {
    return a ?  radius(10): radius(20)
}

export const setspace = (a) => {
    return a ?  styles.spaceBetween: styles.spaceAroundVertical
}

export const setfontsize = (a) => {
    return a ?  fontSize(18) : fontSize(15)
}
export const setdisplay = (a) => {
    return a ?  display('none') : display('show')
}
export const setdisplaytofalse = (a) => {
    return a ?  display('show') : display('none')
}
export const setheightvalue = (a) => {
    return a ?  heightValue(1) : heightValue(2)
}
export const setwidthvalue = (a) => {
    return a ?  widthValue(10) : widthValue(30)
}
//this is for row and column based condition
export const setcolum = (a) => {
    return a ?  styles.column : styles.row
}


export const shadow = (value) => {
    return StyleSheet.create({
        shadowColor: Colors.gray,
        shadowOffset: {
            width: value/10,
            height: value
        },
        shadowOpacity: value/8,
        shadowRadius: value*2,

        elevation: 20
    })
}



// - - - - - DYNAMIC FONT SIZE - - - - - - //

const  {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

    // based on iphone 5s's scale
    //   const scale = SCREEN_WIDTH  / 360;
    const scale = SCREEN_HEIGHT / 760;

export function fontSize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return StyleSheet.create({ fontSize: Math.round(PixelRatio.roundToNearestPixel(newSize)) });
    } else {
        return StyleSheet.create({ fontSize: Math.round(PixelRatio.roundToNearestPixel(newSize)) -2 });
    }
}

// - - - - - CUSTOM SPACING AND BORDER - - - - - - //

    // - - - - - PADDING - - - - - - //
    export const padding = (padding, paddingVertical, paddingHorizontal) => {
        return StyleSheet.create({ padding, paddingVertical, paddingHorizontal })
    }
    // - - - - - PADDING POSITION- - - - - - //
    export const paddingPosition = (paddingTop, paddingRight, paddingBottom, paddingLeft) => {
        return StyleSheet.create({ paddingTop, paddingRight, paddingBottom, paddingLeft })
    }

    // - - - - - MARGIN - - - - - - //
    export const margin = (margin, marginVertical, marginHorizontal) => {
        return StyleSheet.create({ margin, marginVertical, marginHorizontal })
    }
    // - - - - - MARGIN POSITION- - - - - - //
    export const marginPosition = (marginTop, marginRight, marginBottom, marginLeft) => {
        return StyleSheet.create({ marginTop, marginRight, marginBottom, marginLeft })
    }

    // - - - - - POSITION - - - - - - //
    export const position = (top, right, bottom, left) => {
        return StyleSheet.create({ top, right, bottom, left })
    }
   


    // - - - - - Z-INDEX - - - - - - //
    export const zIndex = (value) => {
        return StyleSheet.create({ zindex: value })
    }

    // - - - - - BORDER WIDTH - - - - - - //
    export const borderWidth = (borderWidth, borderTopWidth, borderLeftWidth, borderBottomWidth, borderRightWidth) => {
        return StyleSheet.create({ borderWidth, borderTopWidth, borderLeftWidth, borderBottomWidth, borderRightWidth })
    }

    // - - - - - BORDER RADIUS - - - - - - //
    export const radius = (borderRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius, borderTopLeftRadius) => {
        return StyleSheet.create({ borderRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius, borderTopLeftRadius })
    }

    // - - - - - BORDER COLOR - - - - - - //
    export const borderColor = (borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor) => {
        return StyleSheet.create({ borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor })
    }

    // - - - - - FLEX - - - - - - //
    export const flex = (value) => {
        return StyleSheet.create({ flex: value })
    }
    //--------display none - - - - //
    export const display = (value) => {
        return StyleSheet.create({ display: value })
    }

    // - - - - - FONT STYLES - - - - - //
    export const lineHeight = (value) => {
        return StyleSheet.create({ lineHeight: value })
    }
    export const fontWeight = (value) => {
        return StyleSheet.create({ fontWeight: value })
    }
    export const opacity = (value) => {
        return StyleSheet.create({ opacity: value })
    }

    // - - - - - SCALE - - - - - //
    export const screenHeight = (value) => {
        return StyleSheet.create({ height: SCREEN_HEIGHT/value })     
    }
    export const screenWidth = (value) => {
        return StyleSheet.create({ width: SCREEN_WIDTH/value })     
    }
    export const heightValue = (value) => {
        return SCREEN_HEIGHT/value;
    }
    export const widthValue = (value) => {
        return SCREEN_WIDTH/value;
    }
    export const heightwidth = (height,width) => {
        return StyleSheet.create({ height,width})
    }
  export const fontFamily=(value)=>{
    return StyleSheet.create({
        fontFamily:value,
    })
  }
  export const fonting = (value) => {
    return StyleSheet.create({
        color:"white",
        fontSize:52,
        fontWeight:500,
        margin:'-25 0 0 50',
        fontFamily:value,

    })
}
export const styles = StyleSheet.create({
// - - - - - TEXT COLORS - - - - - //
    white: { color: Colors.white },
    black: { color: Colors.black },
    gray: {color: Colors.gray},
    lightGray: {color: Colors.lightGray},
    red: {color: Colors.red},
    blue:{color:Colors.blue},
    green:{color:Colors.green},
    fontwhite:{color:Colors.fontwhite},
    gr:{color:Colors.gr},
    lightgreen:{color:Colors.lightgreen},

// - - - - - BACKGROUND COLORS - - - - - //
    bgWhite: { backgroundColor: Colors.white },
    bgBlack: { backgroundColor: Colors.black },
    bgRed: {backgroundColor: Colors.red},
    bgLightGray: {backgroundColor: Colors.lightGray},
    bgDarkBlue: {backgroundColor: Colors.darkBlue},
    bgGray: {backgroundColor: Colors.gray},
    bglightblack:{backgroundColor:Colors.lightblack},
    bgdarkgreen:{backgroundColor:Colors.darkgreen},
    bglightgreen:{backgroundColor:Colors.lightgreen},
    bggreen:{backgroundColor:Colors.green},
    bglightblue:{backgroundColor:Colors.lightblue},
    bggreyish:{backgroundColor:Colors.greyish},
    bggreenish:{backgroundColor:Colors.greenish},
    bglightgreyish:{backgroundColor:Colors.lightgreyish},
    bgdashblue:{backgroundColor:Colors.dashblue},
    dashboardcolour:{backgroundColor:Colors.dashboardcolor},




    
// - - - - - BORDER COLORS - - - - - //
    borderWhite: { borderColor: Colors.white },
    borderBlack: { borderColor: Colors.black },
    borderGreen: { borderColor: Colors.green },
    borderBlue: { borderColor: Colors.blue },
    borderLightBlue: { borderColor: Colors.lightBlue },

// - - - - - FLEX PROPERTIES - - - - - // 
    // - - -  Flex Align - - -  // 
    allCenter: { justifyContent: 'center', alignItems: 'center' },
    centerHorizontal: { alignItems: 'center' },
    endVertical:{justifyContent:"flex-end"},
    centerVertical: { justifyContent: 'center' },//which comes center from top to bottom
    selfCenter: { alignSelf: 'center' },
    selfStart: { alignSelf: 'flex-start' },
    selfEnd: { alignSelf: 'flex-end' },
    flexEnd: { alignItems: 'flex-end' },
    spaceBetween: { justifyContent: 'space-between', alignItems: 'center' },
    spaceBetweenVertical: { justifyContent: 'space-between', },
    spaceAroundVertical: { justifyContent: 'space-around' },
    spaceEvenly: { justifyContent: "space-evenly" },
    // - Text Align - //
    textCenter: { textAlign: 'center' },
    textAlignVertical: { textAlignVertical: 'center' },
    textRight: { textAlign: 'right' },
    textLeft: { textAlign: 'left' },
    // - - -  Flex Direction - - -  // 
    row: { flexDirection: 'row' },
    column:{flexDirection:'column'},
    rowReverse: { flexDirection: 'row-reverse' },
    rowWrap: { flexDirection: 'row', flexWrap: 'wrap' },
// - - - - - OTHER CSS - - - - - // 
    overflowHide: { overflow: "hidden" },
    positionAbsolute: {position: 'absolute'},
    positionRelative: {position: 'relative'},
    
    // - - - FlatList - - - //
    flatlistContainer: [
        {flexDirection: 'row'},
        padding(0, 6, 10), borderWidth(0, 1,0,0,0), borderColor(Colors.blue), radius(0, 0, 10, 10)
    ],
    flatlistHeader: [ 
        {flexDirection: 'row', backgroundColor: Colors.blue },
        padding(0, 8, 10), radius(0,10, 0, 0, 10)    
    ]
})

// ...fonting('Rubik-VariableFont_wght')
