import React , {useEffect, useState, useRef}from 'react'
import { View, Text, Animated, 
    ScrollView , StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export default function AnimatedScroll() {
    const [headerShown, setHeaderShown] = useState(false)

    // const translation = useRef(new Animated.Value(-100)).current;
    const scrolling = useRef(new Animated.Value(0)).current
    const translation = scrolling.interpolate({
        inputRange : [100, 130], 
        outputRange : [-100, 0],
        extrapolate : 'clamp'
    })

    // useEffect(() => {
    //     Animated.timing(translation, {
    //         toValue : headerShown ? 0 : -100,
    //         duration : 300,
    //         useNativeDriver : true
    //     }).start()
    // }, [headerShown])

    return (
        <View style={Styles.main}>

       {/* HEADER */}
       <Animated.View style={[Styles.header, {
           transform : [{
               translateY : translation
           }]
       }]}>
       </Animated.View>

       <Animated.ScrollView 
    //    onScroll = {(event) => {
    //        const scrolling = event.nativeEvent.contentOffset.y;
    //        if(scrolling > 100){
    //            setHeaderShown(true)
    //        } else {
    //            setHeaderShown(false)
    //        }
    //    }}
    onScroll = {Animated.event(
        [{nativeEvent : {contentOffset :{
            y : scrolling,
             },
         },
        },
        ], {useNativeDriver : true})}
        //    onScroll event will be invoked after every 16ms
        scollEventThrottle = {16}
        style={{flex : 1}}
       >
           <View style={{height : 1000}}></View>
       </Animated.ScrollView>

        </View>
    )
}

const Styles = StyleSheet.create({
    main :{
        flex : 1
    },
    header :{
        position : 'absolute',
        top : 0,
        bottom : 0,
        left :0,
        right : 0 ,
        height : 80,
        backgroundColor  : '#FF0000'
    }
})
