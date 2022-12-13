import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Button,
	SafeAreaView,
	Alert,
	Image,
	ScrollView,
} from "react-native";
const styles = StyleSheet.create({
	seperator: {
		marginVertical: 8,
		borderBottomColor: "silver",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		textAlign: "center",
		marginVertical: 10,
		color: "blue",
		fontFamily: "Futura",
	},
	fixToText: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	image: {
		justifyContent: "space-between",
		resizeMode: "contain",
		height: 300,
		width: 430,
	},
	infobutton: {
		fontFamily: "Futura",
	},
});
const Seperator = () => <View style={styles.seperator} />;

const App = () => (
	<SafeAreaView Style={styles.container}>
		<ScrollView>
			<View>
				<Image style={styles.image} source={require("./img/avalanche.webp")} />
				<Text style={styles.title}>2005 Chevy Avalanche</Text>
				<Button
					style={styles.infobutton}
					title="View information"
					onPress={() => Alert.alert("button pressed")}
				/>
			</View>
			<Seperator />
			<Seperator />
			<View>
				<Image
					style={styles.image}
					source={require("./img/1984corvette.jpeg")}
				/>
				<Text style={styles.title}>1984 Chevy Corvette</Text>
				<Button
					style={styles.infobutton}
					title="View information"
					onPress={() => Alert.alert("button pressed")}
				/>
			</View>
			<Seperator />
			<Seperator />
			<View>
				<Image style={styles.image} source={require("./img/Aura.jpeg")} />
				<Text style={styles.title}>2008 Saturn Aura</Text>
				<Button
					style={styles.infobutton}
					title="View information"
					onPress={() => Alert.alert("button pressed")}
				/>
			</View>
			<Seperator />
			<Seperator />
			<View>
				<Image style={styles.image} source={require("./img/yukon.webp")} />
				<Text style={styles.title}>2006 GMC Yukon XL Denali</Text>
				<Button
					style={styles.infobutton}
					title="View information"
					onPress={() => Alert.alert("button pressed")}
				/>
			</View>
		</ScrollView>
	</SafeAreaView>
);

export default App;
