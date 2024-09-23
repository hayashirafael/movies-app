import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from '@hooks/useAuth';

import { useTheme } from "styled-components/native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Routes() {
  const { COLORS } = useTheme();
  const { isAuthenticated } = useAuth();

  const navigationTheme = DefaultTheme;
  navigationTheme.colors.background = COLORS.GREY700

  return (
    <NavigationContainer theme={navigationTheme} >
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}