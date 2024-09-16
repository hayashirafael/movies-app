import { SignIn } from '@screens/SignIn';
import theme from './src/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider style={{ flex: 1 }} >
        <StatusBar
          translucent
          backgroundColor="transparent"
        />
        <SignIn />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
