import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, width, height } from "../../Config"

const AppStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.bgc,
    },

    center: {
        justifyContent: "center",
        alignItems: 'center'
    },

    Brand: {
        width: width * 0.7,
        height: height * 0.07
    },

    txt_type1: {
        color: COLORS.white,
        fontSize: RFPercentage(2.3),
        fontWeight: "400"
    },
    txt_type2: {
        color: COLORS.blue,
        fontSize: RFPercentage(2.3),
        fontWeight: "400"
    },

    txt_type3: {
        fontSize: RFPercentage(4.5),
        color: COLORS.white,
        fontWeight: "700"
    },

    SmallButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 8,
    },

    header: {
        width: "100%",
        height: height * 0.08,
        borderColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }


})

export default AppStyles