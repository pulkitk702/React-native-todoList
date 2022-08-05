import { View, Text, StyleSheet } from "react-native";
import Color from "../../Constants/Color";
function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={style.listItem}>
      <Text style={style.itemText}>#{roundNumber}</Text>
      <Text style={style.itemText}>Opponent's Guess:{guess}</Text>
    </View>
  );
}

export default GuessLogItem;
const style = StyleSheet.create({
  listItem: {
    borderColor: Color.primary500,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Color.primary600,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
