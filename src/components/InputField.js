import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { COLORS, width, height } from '../Config'
import AppStyles from '../assets/styles/AppStyles'

const InputField = (props) => {
    return (
        <View style={{
            width: "85%",
            height: height * 0.1,
            justifyContent: "space-between"
        }}>
            <View style={{
                width: "95%",
                flexDirection: 'row',
                justifyContent: "space-between",
                alignSelf: 'center'
            }}>
                <Text style={[AppStyles.txt_type1, {}]}>{props.placeholder}</Text>

                {props.title ?
                    <TouchableOpacity onPress={() => props.onpress()} activeOpacity={0.8}>
                        <Text style={[AppStyles.txt_type1, { color: COLORS.blue, textDecorationLine: "underline" }]}>{props.title}</Text>
                    </TouchableOpacity>
                    : null
                }

            </View>

            <TextInput style={{
                width: "100%",
                height: "55%",
                backgroundColor: COLORS.field,
                borderRadius: 10
            }} />
        </View>
    )
}

InputField.defaultProps = {
    placeholder: "place",
    onchange: () => console.log("No Props"),
    onpress: () => console.log("No Props")
};

export default InputField
