import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import AppStyles from '../assets/styles/AppStyles'
import { width, height, COLORS } from '../Config'
import InputField from '../components/InputField'
import Custom_Button from '../components/Custom_Button'

const Login = (props) => {
    return (
        <SafeAreaView style={[AppStyles.mainContainer, {}]}>

            <View style={[Styles.BrandContainer]}>
                <Image source={require("../assets/images/Branding.png")}
                    style={[AppStyles.Brand]} />
            </View>

            <View style={[Styles.FieldsContainer]}>

                <InputField placeholder="Email" />
                <InputField placeholder="Email" title="Forgot Password" />

                <Custom_Button placeholder="Login" isIcon={true} onpress={() => props.navigation.navigate("Onboarding1")} />

            </View>

        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    BrandContainer: {
        // borderWidth:5, 
        height: height * 0.23,
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: "5%"
    },
    FieldsContainer: {
        height: height * 0.4,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    fieldContainer: {
        width: "90%",
        height: height * 0.1,
        justifyContent: "space-between"
    },
    inputfield: {
        width: "100%",
        height: "65%",
        borderWidth: 2,
        backgroundColor: COLORS.field,
        borderRadius: 10
    }
})

export default Login
