import { Text, StyleSheet, Platform } from "react-native";
function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "#ddb52f",
    textAlign: "center",
    //borderWidth: Platform.OS === "android" ? 0 : 2,
    borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderColor: "#ddb52f",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
