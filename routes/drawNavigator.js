import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";


const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "coral",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Roboto-Light",
        },
      }}>
        <Drawer.Screen name="Home" component={HomeStack} options={{ headerTitle: "DOM Services" }}/>
        <Drawer.Screen name="About" component={AboutStack} options={{ headerTitle: "About DOM Services" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;