import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButtons from "../components/ui/PrimaryButtons";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";
import { useWindowDimensions } from "react-native";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundaire = 1;
let maxBoundaire = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    minBoundaire = 1;
    maxBoundaire = 100;
  }, []);
  function nextGuessHandler(direction) {
    if (
      (direction == "lower" && currentGuess < userNumber) ||
      (direction == "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie ", "You know this is Wrong... ", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundaire = currentGuess;
    } else {
      minBoundaire = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundaire,
      maxBoundaire,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRound) => [...prevGuessRound, newRndNumber]);
  }
  const guessRoundsListLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <View>
        <Title>Opponents Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButtons>
          </View>
          <View>
            <PrimaryButtons onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" />
            </PrimaryButtons>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/*guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))*/}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
