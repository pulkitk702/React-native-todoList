import { View, Text, StyleSheet, Dimensions } from "react-native";
import Color from "../../Constants/Color";
function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Color.primary700,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Color.primary700,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
