import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import PrimaryButtons from "../components/ui/PrimaryButtons";
import Title from "../components/ui/Title";
import Color from "../Constants/Color";
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          syle={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summeryText}>
        Your Phone neede <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        round to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}.</Text>
      </Text>
      <PrimaryButtons onPress={onStartNewGame}>Start New Game</PrimaryButtons>
    </View>
  );
}

export default GameOverScreen;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Color.primary700,
    overflow: "hidden",
    margin: 36,
    resizeMode: "cover",
  },
  image: {
    widht: "100%",
    height: "100%",
  },
  summeryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Color.primary700,
  },
});
