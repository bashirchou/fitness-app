import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logs from './Logs';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness App</Text>
      <StatusBar style="auto" />
      <Logs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold' },
});
