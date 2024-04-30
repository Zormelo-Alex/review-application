import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "coral", // Set the background color of the header
          },
          headerTintColor: "#fff", // Set the text color of the header
          headerTitleStyle: {
            fontFamily: "Roboto-Light",
          },
        }}
      >
        <Stack.Screen
          name="AboutComp"
          component={About}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};

export default AboutStack;
