import { View } from "react-native";
import CardComponent from "../CardComponent";
import { styles } from "./styles";

export default function Menu() {
  return (
    <View style={styles.menuContainer}>
      <CardComponent text="Logs" />
      <CardComponent text="Profile" />
    </View>
  );
}