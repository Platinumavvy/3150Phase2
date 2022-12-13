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
		color: "#777777",
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
		fontFamily: "Optima",
	},
	header: {
		backgroundColor: "#77aaff",
		height: 50,
		textAlign: "center",
		textShadowRadius: 5,
		fontSize: 50,
		fontFamily: "American Typewriter",
	},
});
const Seperator = () => <View style={styles.seperator} />;
const App = () => (
	<SafeAreaView Style={styles.container}>
		<ScrollView>
			<Text style={styles.header}>My Vehicles</Text>
			<View>
				<Image style={styles.image} source={require("./img/avalanche.webp")} />
				<Text style={styles.title}>2005 Chevy Avalanche</Text>
				<Button
					style={styles.infobutton}
					title="View information"
					onPress={() =>
						Alert.alert(
							"The Avalanche was a vehicle produced by Chevrolet from 2001-2013, it had 2 generations. The main selling point of the Avalanche was its Midgate which extended the bed from a standard 5 foot box to an 8 foot long box. Its base engine was a 5.3 liter V-8 which is one of GM's longest running most reliable engines to date. It was also offered with a 6.0L V-8 and an 8.1L V-8."
						)
					}
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
					onPress={() =>
						Alert.alert(
							"The 1984 Corvette was the first model year of the 4th generation of Corvettes. It featured GM's small block 350CI 5.7 liter V-8 which pushed 205 horsepower. This was a low output for it's time, this was due to EPA regulations. To counter this GM's Corvette development team upped the handling and stability to increase road performance. However, it still was the fastest american car of that year. It was also the first generation built at the Corvette Kentucky plant."
						)
					}
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
			<Seperator />
			<Seperator />
			<View>
				<Image style={styles.image} source={require("./img/regal.jpeg")} />
				<Text style={styles.title}>2011 Buick Regal CXL</Text>
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
