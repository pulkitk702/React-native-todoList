import { StyleSheet, View, Dimensions } from "react-native";
import Color from "../../Constants/Color";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: deviceWidth < 380 ? 18 : 36,
    marginTop: 36,
    padding: 16,
    backgroundColor: Color.primary700,
    borderRadius: 8,
    elevation: 4, // box shadow
    // Now ios shadow color,offset,radius,opacity
    shadowColor: "black ",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
