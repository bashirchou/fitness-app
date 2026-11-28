import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import Menu from './Components/Menu';
import Logs from './Components/Logs';
import Profile from './Components/Profile';

const Stack = createNativeStackNavigator();

const transparentTheme = {
  dark: true,
  colors: {
    primary: '#772222',
    background: 'transparent',
    card: 'transparent',
    text: '#ffffff',
    border: 'transparent',
    notification: '#772222',
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Jersey10: require('./assets/fonts/Jersey10-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.topBackground} />

      <NavigationContainer theme={transparentTheme}>
        <Stack.Navigator
          initialRouteName="Menu"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' },
          }}
        >
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Logs" component={Logs} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#363636',
  },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: '#772222',
  },
});
