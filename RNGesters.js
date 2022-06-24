import React , {useRef} from 'react'
import { View, Text, Animated, StyleSheet, useWindowDimensions } from 'react-native'


const CURSOR_SIDE_SIZE = 20;
const CURSOR_HALF_SIZE = CURSOR_SIDE_SIZE / 2;

export default function RNGesters() {
    const touch = 
    useRef(new Animated.ValueXY({x : 0, y : 0})).current;

    const dimensions = useWindowDimensions();
   
    return (
        <View style={[Styles.main]}
        onStartShouldSetResponder = {() => true}
        onResponderMove={(event) => {
            touch.setValue({
                x : event.nativeEvent.locationX,
                y : event.nativeEvent.locationY
            })
        }}
        onResponderRelease = {() => {
            try {
                Animated.spring(touch, {
                    toValue : {
                        x : dimensions.width / 2 + CURSOR_HALF_SIZE,
                        y : dimensions.height / 2 + CURSOR_HALF_SIZE
                    },
                    useNativeDriver : true
                }).start()
            } catch (error) {
                console.log(error);
            }
      
        }}
        >

           <Animated.View style={{
               left : Animated.subtract(
                   touch.x,
                   CURSOR_HALF_SIZE
               ),
               top : Animated.subtract(
                   touch.y,
                   CURSOR_HALF_SIZE
               ),
               width : CURSOR_SIDE_SIZE,
               height : CURSOR_SIDE_SIZE,
               borderRadius : CURSOR_HALF_SIZE,
               backgroundColor : '#FFFFFF'
           }}
           ></Animated.View>
        </View>
    )
}

const Styles = StyleSheet.create({
    main : {
        flex : 1,
        backgroundColor : '#000000'
    }
})
