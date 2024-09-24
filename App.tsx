import '@libs/dayjs';
import theme from './src/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { AuthContextProvider } from '@contexts/AuthContext';
import { Routes } from '@routes/index';
import { Nunito_400Regular, Nunito_500Medium, Nunito_700Bold, useFonts } from '@expo-google-fonts/nunito';
import { Loading } from '@components/Loading';
import { MovieContextProvider } from '@contexts/MovieContext';
import { NetInfo } from '@components/NetInfo';
import { useNetInfo } from "@react-native-community/netinfo";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_500Medium, Nunito_700Bold });
  const { isConnected } = useNetInfo();
  if (!fontsLoaded) return <Loading />

  return (
    <SafeAreaProvider style={{ flex: 1 }} >
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor={theme.COLORS.GREY700}
        />
        {
          !isConnected && <NetInfo />
        }
        <AuthContextProvider>
          <MovieContextProvider>
            <Routes />
          </MovieContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
