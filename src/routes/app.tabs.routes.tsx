import { useTheme } from "styled-components/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AllMovies } from "@screens/AllMovies";
import { FavoriteMovies } from "@screens/FavoriteMovies";

type AppRoutes = {
  AllMovies: undefined;
  FavoriteMovies: undefined;
  exercise: { exerciseId: string };
}

const { Navigator, Screen } = createMaterialTopTabNavigator<AppRoutes>();

export function AppTabsRoutes() {
  const theme = useTheme();
  return (

    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.COLORS.GREY700
        },
        tabBarLabelStyle: { textTransform: 'none', fontSize: 16, fontWeight: '700', lineHeight: 24 },
        tabBarActiveTintColor: theme.COLORS.ORANGE,
        tabBarInactiveTintColor: theme.COLORS.GREY200,
        tabBarIndicatorStyle: { backgroundColor: theme.COLORS.ORANGE },
      }}

      initialRouteName="AllMovies"
    >
      <Screen
        name="AllMovies"
        component={AllMovies}
        options={{
          title: 'Todos os Filmes',
        }}
      />
      <Screen
        name="FavoriteMovies"
        component={FavoriteMovies}
        options={{
          title: 'Filmes Favoritos',

        }}
      />

    </Navigator>
  )
}