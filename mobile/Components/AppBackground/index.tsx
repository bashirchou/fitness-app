import { View } from "react-native";
import { styles } from "./styles";

export default function AppBackground({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.screen}>
      <View style={styles.topBackground} />
      <View style={styles.content}>{children}</View>
    </View>
  );
}
