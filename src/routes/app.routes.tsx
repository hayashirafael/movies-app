import { Header } from "@components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import { AppTabsRoutes } from "./app.tabs.routes";
import { MovieDetails } from "@screens/MovieDetails";
import { MovieDTO } from "@dtos/movie";

export type AppRoutes = {
  home: undefined;
  movieDetails: { movie: MovieDTO };
}

const Stack = createStackNavigator<AppRoutes>();

export function AppRoutes() {
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