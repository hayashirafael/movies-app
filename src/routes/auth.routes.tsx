import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "@screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="signIn">
      <Screen
        name="signIn"
        component={SignIn}
      />
    </Navigator>
  )
}