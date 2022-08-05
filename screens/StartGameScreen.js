import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButtons from "../components/ui/PrimaryButtons";
import Color from "../Constants/Color";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
export default function StartGameScreen(props) {
  const [enterNumber, setEnterNumber] = useState("");
  const { width, height } = useWindowDimensions();
  function resetInputHandler() {
    setEnterNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enterNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "the Number Should be in between 1 and 99 ",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    props.onPickedNumber(chosenNumber);
  }
  function numberInputHandler(enteredText) {
    setEnterNumber(enteredText);
  }
  const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My title</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enterNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButtons onPress={resetInputHandler}>
                  Reset
                </PrimaryButtons>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButtons onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButtons>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
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
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
