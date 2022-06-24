import React , {useEffect, useRef, useState}from 'react'
import { View, Text, StyleSheet , Animated, Dimensions, Easing} from 'react-native'

export default function TestAnimation() {
 
    // const translation = useRef(new Animated.ValueXY({x : 0, y : 0})).current;

    const firstOpcaity = useRef(new Animated.Value(0)).current;
    const secondOpacity = useRef(new Animated.Value(0)).current;
    const thirdOpacity = useRef(new Animated.Value(0)).current;

    const translation = useRef(new Animated.Value(0)).current;


// +++++++OPACITY ANIMATION++++++++
// useEffect(() => {
//    Animated.stagger(200, [
//        Animated.timing(firstOpcaity, {
//            toValue : 1,
//            useNativeDriver : true
//        }),
//        Animated.timing(secondOpacity, {
//         toValue : 1,
//         useNativeDriver : true
//     }),
//      Animated.timing(thirdOpacity, {
//         toValue : 1,
//         useNativeDriver : true
//     }),
//    ]).start()
// }, [])


// +++++++MOVEMENT ANIMATION++++++++
    // useEffect(() => {
    //     // timing replaced spring
    //     // sequence replaced by parallel
    //     Animated.parallel([
    //         Animated.spring(translation.x, {
    //             toValue : 100,
    //             useNativeDriver : true
    //         }),
    //         Animated.spring(translation.y, {
    //             toValue : -100,
    //             useNativeDriver : true
    //         })
    //     ]).start()
    //     // Animated.spring(translation.x, {
    //     //     toValue : 50,
    //     //     // delay  : 1500, 
    //     //     // duration : 1000,
    //     //     // easing : Easing.bounce,
    //     //     // easing : Easing.bounce,
    //     //     useNativeDriver : true
    //     // }).start()
        
    // }, [])

// +++++++INTERPOLATION ANIMATION++++++++
    useEffect(() => {
        console.log("HERE");
        Animated.timing(translation, {
            toValue : 100,
            duration : 2000,
            // BGC cannot be changed white NativeDriver is true
            useNativeDriver : false
        }).start()
    }, [])


    return (
        <View style={Style.main}>
{/* MOVEMENT ANIMATION */}
        {/* <Animated.View style={[Style.block, {
            transform : [
                {translateX : translation.x},
                {translateY : translation.y} ]
        }]}></Animated.View> */}

{/* Opacity Animation */}
        {/* <Animated.View style={[Style.block, {
         opacity : firstOpcaity,
         marginBottom : 10
        }]}></Animated.View>

        <Animated.View style={[Style.block, {
         opacity : secondOpacity,
         marginBottom : 10
        }]}></Animated.View>

        <Animated.View style={[Style.block, {
         opacity : thirdOpacity,
        }]}></Animated.View> */}


        {/* INTERPOLATION ANIMATION */}
        <Animated.View style={[Style.block, {
            opacity : translation.interpolate({
                inputRange : [25, 50, 100],
                outputRange : [0, 1, 0],
                // Extrapolate defines what to do outside
                // the input range
                extrapolateLeft : 'clamp',
                extrapolateRight :'clamp'
            }),
            backgroundColor : translation.interpolate({
                inputRange : [0, 100],
                outputRange : ['#FFFFFF', '#FF0000']
            }),
         transform : [
             {translateX : translation},
            {rotate : translation.interpolate({
                inputRange : [0, 100],
                outputRange : ['0deg', '360deg']
            })}]
        }]}></Animated.View>

        </View>
    )
}

const {width, height} = Dimensions.get('window')

const Style =  StyleSheet.create({
    main :{
     flex :1,
     justifyContent :'center',
     alignItems :'center',
     backgroundColor :'#000000'
    },
     block  :{
        
        width :100,
        height : 100,
        backgroundColor : '#ffffff'
     }
})