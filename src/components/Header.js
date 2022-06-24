import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import AppStyles from '../assets/styles/AppStyles'
import { width, height, COLORS } from '../Config'

const Header = (props) => {
    return (
        <View style={[AppStyles.header]}>
            <TouchableOpacity style={{ position: "absolute", left: "5%" }}
                onPress={() => props.onpress()}
            >
                <Text style={[AppStyles.txt_type2]}>
                    Cancel
                </Text>
            </TouchableOpacity>

            {props.title ?
                <Text style={[AppStyles.txt_type2, { color: COLORS.white, }]}>
                    {props.title}
                </Text>
                : null
            }




        </View>
    )
}

Header.defaultProps = {
    width: 80,
    height: 35,
    onpress: () => console.log("No Props"),

};


export default Header
