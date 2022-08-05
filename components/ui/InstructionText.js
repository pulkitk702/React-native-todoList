import { Text, StyleSheet } from "react-native";
import Color from "../../Constants/Color";
function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  instructionText: {
    color: Color.primary600,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
export default InstructionText;
