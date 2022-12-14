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
				<Text style={styles.title}>2008 Saturn Aura XR</Text>
				<Button
					style={styles.infobutton}
					title="View information"
					onPress={() =>
						Alert.alert(
							"2007's North American Car of the Year Winner the Saturn Aura. A family sedan with the comfort and speed of a Cadillac and the pricepoint of a Chevrolet. The XE was the base model, it featured a 2.4 Liter Inline 4 cylinder engine which was excellent on fuel. The XE also had an optional 3.5 Liter V-6 which upped its power output. The Aura even had a Hybrid version, which was impressive for its time. They called it the GreenLine which featured an electric motor matted to the Inline 4 cylinder engine. Finally the XR trim, which had a standard 3.6 liter V-6 and paddle shifter transmission. The XR had 252 Horsepower from the factory, which made this family sedan quite a riot to drive."
						)
					}
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
					onPress={() =>
						Alert.alert(
							"Built on the same platform as the Avalanche and a few other models, the Yukon was the Chevy Suburbans counterpart. It also featured the 5.3 liter V-8 in its base model and sat up to 8 in the right configuration. The Denali name plate was the highest trim possible, It included a standard 6.0 liter V-8 and all-wheel-drive"
						)
					}
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
					onPress={() =>
						Alert.alert(
							"The Regal name has been in the Buick family since 1973, it has had many major changes in its life time. From a family sedan making only 160 pound feet of torque to a 2 door coupe that made 360 pound feet of torque, it has a story to tell. Towards the end of its years it came standard with a 2.4 liter inline 4 cylinder engine, however the long living trim level GS featured a 2.0 liter Turbo 4 cylinder making 270 horsepower and 295 pound feet of torque. Making it another one of GMs hidden treasures in the family sedan category."
						)
					}
				/>
			</View>
			<Seperator />
			<Seperator />
			<View>
				<Image style={styles.image} source={require("./img/CRV.webp")} />
				<Text style={styles.title}>2015 Honda CR-V Touring</Text>
				<Button
					style={styles.infobutton}
					title="View information"
					onPress={() =>
						Alert.alert(
							"The CR-V nameplate has been around with Honda since 1995. Its flagship came with Hondas long time reliable V-tec inline 4 cylinder 2.4 liter. It also had optional steering assist, something Honda calls LKAS (lane keep assistant). "
						)
					}
				/>
			</View>
		</ScrollView>
	</SafeAreaView>
);

export default App;
