import { useTheme } from "styled-components/native";
import { Header } from "@components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import { AppTabsRoutes } from "./app.tabs.routes";
import { MovieDetails } from "@screens/MovieDetails";
import { MovieDTO } from "@dtos/movie";
import { ButtonIcon } from "@components/ButtonIcon";
import { Star } from "lucide-react-native";

export type AppRoutes = {
  home: undefined;
  movieDetails: { movie: MovieDTO };
}

const Stack = createStackNavigator<AppRoutes>();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          borderWidth: 0
        }
      }}
      initialRouteName="home"
    >
      <Stack.Screen
        name="home"
        component={AppTabsRoutes}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />

      <Stack.Screen
        name="movieDetails"
        component={MovieDetails}
      />

    </Stack.Navigator>
  )
}