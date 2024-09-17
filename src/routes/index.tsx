import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from '@hooks/useAuth';

import { useTheme } from "styled-components/native";
import { View } from "react-native";

export function Routes() {
  const theme = useTheme();
  const { isLogged, signIn } = useAuth();

  // const navigationTheme = DefaultTheme;
  // navigationTheme.colors.background = 

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer >
        {isLogged ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  )
}