import { StyleSheet, View } from "react-native";
import CardComponent from "../CardComponent";

export default function Logs() {
  return (
    <View style={styles.container}>
      <CardComponent text="Logs" />
      <CardComponent text="Profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});