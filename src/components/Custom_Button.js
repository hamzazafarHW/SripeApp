import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import AppStyles from '../assets/styles/AppStyles'
import { width, height, COLORS } from '../Config'

import AntDesign from 'react-native-vector-icons/dist/AntDesign';


const Custom_Button = (props) => {
    return (
        <TouchableOpacity style={[AppStyles.SmallButton, {
            backgroundColor: props.backgroundColor,
            borderColor: props.borderColor,
            width: props.width ,
            height: props.height,
            flexDirection:'row',
            justifyContent:"space-evenly"
        }]} 
        activeOpacity={0.7}
            onPress={props.onpress} disabled={props.isDisabled}>
            <Text style={{ fontFamily: 'WorkSans-Medium', fontSize: props?.isIcon ? RFPercentage(2.4) : RFPercentage(2.5), color: COLORS.white }}
            >{props.placeholder}</Text>
           {
            props?.isIcon ?
            <AntDesign name="arrowright" color={COLORS.white} size={RFPercentage(2.5)}/>
            : null
           }

        </TouchableOpacity>
    )
}

Custom_Button.defaultProps = {
    width: 90,
    height: 40,
    placeholder: "button",
    isDisabled: false,
    onpress: () => console.log("No Props"),
    backgroundColor : COLORS.blue,
    textColor : COLORS.white,
};

export default Custom_Button
