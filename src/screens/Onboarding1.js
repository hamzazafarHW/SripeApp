import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import AppStyles from '../assets/styles/AppStyles'
import { width, height, COLORS } from '../Config'
import Header from '../components/Header'
import Custom_Button from '../components/Custom_Button'

const Onboarding1 = (props) => {
    return (
        <SafeAreaView style={[AppStyles.mainContainer]}>

            <Header onpress={() => props.navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={[AppStyles.center]}>
                    <View style={[AppStyles.center, { height: height * 0.135 }]}>
                        <Text style={[AppStyles.txt_type3]}>Welcome!</Text>
                    </View>


                    <View style={{ width: "95%", height: height * 0.5, marginBottom: height * 0.18 }} >
                        <Image source={require("../assets/images/Image_1.png")}
                            style={{ width: "95%", height: height * 0.5 }} />
                    </View>



                    <Custom_Button placeholder="Next" isIcon={true} onpress={() => props.navigation.navigate("Onboarding2")} />
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}




const Styles = StyleSheet.create({

})

export default Onboarding1
