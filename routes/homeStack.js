import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Review from "../screens/Review";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{ headerTitle: "Review Detail" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
