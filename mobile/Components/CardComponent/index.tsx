import { Card } from "react-native-paper";
import { Text } from "react-native";
import { styles } from "./styles";

export default function CardComponent({ text }: { text: string }) {
  return (
    <Card style={styles.card}>
      <Text>{text}</Text>
    </Card>
  );
}