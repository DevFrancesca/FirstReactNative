import { StyleSheet,Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const MyTypography =({type, children, sx, fontfamily})=>{

    const styles = StyleSheet.create({
        text24: {
			fontSize: hp("3%"),
		},

		text20: {
			fontSize: hp("2.2%"),
		},

		text16: {
			fontSize: hp("1.8%"),
		},

		text14: {
			fontSize: hp("1.5%"),
		},

		text12: {
			fontSize: hp("1.4%"),
		},
	
    })

    switch(type){
        case "text24":
            return <Text style={{...styles.text24, ...sx, ...fontfamily}}>{children}</Text>;
        case "text20":
            return <Text style={{...styles.text20, ...sx, ...fontfamily}}>{children}</Text>
        case "text16":
            return <Text style={{ ...styles.text16, ...sx, ...fontfamily}}>{children}</Text>;
        case "text14":
            return <Text style={{ ...styles.text14, ...sx , ...fontfamily}}>{children}</Text>;
        case "text12":
            return <Text style={{ ...styles.text12, ...sx , ...fontfamily}}>{children}</Text>;
        default:
            return <></>;
    }
}

export default MyTypography
