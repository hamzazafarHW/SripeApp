import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import AppStyles from '../assets/styles/AppStyles'

const Splash = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.replace("Login")
        }, 2000)
    }, [])

    return (
        <SafeAreaView style={[AppStyles.mainContainer, AppStyles.center]}>

            <Image source={require("../assets/images/Branding.png")}
                style={AppStyles.Brand} />

        </SafeAreaView>
    )
}

export default Splash
