import { useTheme } from "styled-components/native";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";

type AppRoutes = {
  exercise: { exerciseId: string };
  history: undefined;
  home: undefined;
  profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        // tabBarActiveTintColor: theme.colors["green-500"],
        // tabBarInactiveTintColor: theme.colors["gray-200"],
        // tabBarStyle: {
        //   backgroundColor: theme.colors["gray-600"],
        //   borderTopWidth: 0,
        //   // height: Platform.OS === 'android' ? 100 : 96,
        //   // paddingBottom: 10,
        //   // paddingTop: 6,
        // }
      }}
      initialRouteName="home"
    >
      <Screen
        name="home"
        component={Home}
      // options={{ tabBarIcon: ({ color, size }) => <HomeSvg fill={color} height={size} width={size} /> }}
      />

    </Navigator>
  )
}