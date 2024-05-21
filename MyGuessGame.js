import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const GuessingGame = () => {
  const [wordToGuess] = useState("Micke");
  const [currentGuess, setCurrentGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 5;

  const handleGuess = () => {
    if (currentGuess.trim().toLowerCase() === wordToGuess.toLowerCase()) {
      setMessage("OH SHIT! YOU RIGHT!");
    } else {
      setAttempts((prevAttempts) => prevAttempts + 1);
      if (attempts + 1 >= maxAttempts) {
        setMessage(`GAME OVER LOSER! the word was ${wordToGuess} IDIOT!`);
      } else {
        setMessage(
          `WRONG IDIOT! you have ${maxAttempts - attempts - 1} attempts left`
        );
      }
    }
    setCurrentGuess("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { marginTop: -100 }]}>
        <Text style={styles.title}>Micke's Gissningslek!</Text>
        <Text style={styles.instructions}>Gissa MITT namn!</Text>
        <TextInput
          style={styles.input}
          value={currentGuess}
          onChangeText={setCurrentGuess}
        />
        <Button title="Guess" onPress={handleGuess} />
        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  instructions: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  input: {
    height: "40",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: "5px",
    paddingHorizontal: 10,
    marginBottom: 20,
    width: 200,
    alignSelf: "center",
  },

  message: {
    marginTop: 20,
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default GuessingGame;
