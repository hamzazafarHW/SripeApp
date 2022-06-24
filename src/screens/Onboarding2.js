import React from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, ScrollView } from 'react-native'
import AppStyles from '../assets/styles/AppStyles'
import { width, height, COLORS } from '../Config'
import Header from '../components/Header'
import Custom_Button from '../components/Custom_Button'
import { DATA } from '../Data/Dummies/DummyData'
import { RFPercentage } from 'react-native-responsive-fontsize'

const Onboarding2 = (props) => {

    const RenderHeader = () => {
        return (
            <View style={[Styles.listHeader]}>
                <Text style={[Styles.txtHeader, { fontWeight: "bold" }]}>Accept Your Phone Numbers</Text>
                <Text style={[Styles.txtHeader]}>To begin recieving calls please accept the phone numbers you have been assigned.</Text>
            </View>
        )
    }

    const RenderItem = (item) => {
        return (
            <View style={[Styles.ItemContainer]}>
                <View style={[{ width: "70%", justifyContent: "space-evenly", paddingHorizontal: "3%" }]}>
                    <Text style={[AppStyles.txt_type1]}>{item.phone}</Text>
                    <Text style={[AppStyles.txt_type1, { color: "#919191" }]}>{item.text}</Text>
                </View>
                <View>
                    <Custom_Button placeholder={item.is_Accepted ? "Accepted" : "Accept"} backgroundColor={item.is_Accepted ? COLORS.green : COLORS.blue} />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={[AppStyles.mainContainer, { alignItems: 'center' }]}>

            <Header onpress={() => props.navigation.goBack()} title="WELCOME" />

            <View style={{ height: height * 0.82,  }}>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={RenderHeader}
                    renderItem={({ item }) => RenderItem(item)}
                />
            </View>
            
            <View style={{}}>
                <Custom_Button placeholder="Next" isIcon={true} onpress={() => alert("THANK YOU!")} />
            </View>


        </SafeAreaView>
    )
}




const Styles = StyleSheet.create({
    listHeader: {
        paddingHorizontal: "8%",
        width: width * 0.92,
        paddingVertical: height * 0.02,
        borderBottomWidth: 2,
        borderColor: "#3D3D3F",
    },
    txtHeader: {
        color: COLORS.white,
        fontWeight: "400",
        width: "85%",
        fontSize: RFPercentage(2.4)
    },
    ItemContainer: {
        borderBottomWidth: 2,
        width: width * 0.92,
        borderColor: "#3D3D3F",
        flexDirection: "row",

    }
})

export default Onboarding2
