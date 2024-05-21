import { StyleSheet, View } from "react-native";
import GuessingGame from "./MyGuessGame";

export default function App() {
  return (
    <View style={styles.container}>
      <GuessingGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7E7E3",
    alignItems: "center",
    justifyContent: "center",
  },
});
