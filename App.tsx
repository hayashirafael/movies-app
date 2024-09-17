import { SignIn } from '@screens/SignIn';
import theme from './src/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { AuthContextProvider } from '@contexts/AuthContext';
import { Routes } from '@routes/index';

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }} >
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor="transparent"
        />
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
