import { StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign, Ionicons } from '@expo/vector-icons'

const MyButton = ({children, type, onpress, color,sx}) => {
    const style = StyleSheet.create({
        backBtn: {
			marginBottom: "3%",
            backgroundColor: "blue",
            flexDirection: "row"
		},
        rounded: {
			justifyContent: "center",
			alignContent: "center",
			alignItems: "center",
			width: wp("50%"),
			height: hp("6.9%"),
			// backgroundColor: "blue",
			borderRadius: 7,
            borderWidth: 1,
            borderColor: "blue"
		},
        default: {
			justifyContent: "center",
			alignContent: "center",
			alignItems: "center",
			width: wp("90%"),
			height: hp("6.9%"),
			borderRadius: 50,
		},

    })

    switch(type){
        case "forward":
            return(
                <TouchableOpacity onPress={onpress}>
                    <AntDesign
                     name="right"
                     size={hp(2.5)}
                     color={color}
                    />
                </TouchableOpacity>
            )
        case "back":
            return (
                <TouchableOpacity onPress={onpress}>
                    <AntDesign
                        name="arrowleft"
                        style={{ ...style.backBtn, ...sx }}
                        size={hp(2.5)}
                        color={color}
                    />
                </TouchableOpacity>
            );
        case "close":
            return (
                <TouchableOpacity onPress={onpress}>
                    <Ionicons
                        name="ios-close-outline"
                        style={{ ...style.closeBtn, ...sx }}
                        size={hp(3.5)}
                        color={color}
                    />
                </TouchableOpacity>
            );
        case "rounded":
            return (
                <TouchableOpacity
                    onPress={onpress}
                    style={{ ...style.rounded, ...sx }}
                >
                    {children}
                </TouchableOpacity>
            );
        default:
            return (
                <TouchableOpacity
                    onPress={onpress}
                    style={{ ...style.default, ...sx }}
                >
                    {children}
                </TouchableOpacity>
            );
    }
}

export default MyButton
