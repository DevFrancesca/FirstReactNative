import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { SafeAreaView, StyleSheet, View } from 'react-native'

export function MainContainer({children}){

    const styles = StyleSheet.create({
        body: {
			width: wp("100%"),
			height: hp("100%"),
			alignItems: "center",
			justifyContent: "center",
		}
    })
    return(
        // <SafeAreaView style={styles.body}>{children}</SafeAreaView>
		<SafeAreaView style={styles.body}>{children}</SafeAreaView>
    )
}

export function Wrapper({ children, sx }) {
	const styles = StyleSheet.create({
		bodywrap: {
			width: "90%",
			height: "100%",
			paddingTop: "15%"
			
		}
	})
	return <View style={{ ...styles.bodywrap, ...sx }}>{children}</View>;
}