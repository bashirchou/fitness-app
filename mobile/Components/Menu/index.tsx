import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function Menu({ navigation }: any) {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Fitness App</Text>

      <View style={styles.menuContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Logs")}
        >
          <Text style={styles.buttonText}>Logs</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
}