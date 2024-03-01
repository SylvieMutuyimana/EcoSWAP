const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import CATEGORIES from "./screens/CATEGORIES";
import SelluploadItems from "./screens/SelluploadItems";
import HOME from "./screens/HOME";
import SELL from "./screens/SELL";
import CATEGORIES2 from "./screens/CATEGORIES2";
import Pin from "./screens/Pin";
import Page from "./screens/Page";
import Pag from "./screens/Pag";
import HOMES from "./screens/HOMES";
import Pin1 from "./screens/Pin1";
import Item from "./screens/Item";
import Item1 from "./screens/Item1";
import SELL1 from "./screens/SELL1";
import HOME1 from "./screens/HOME1";
import PROFILES from "./screens/PROFILES";
import MYITEMS from "./screens/MYITEMS";
import Login from "./screens/Login";
import Menu from "./components/Menu";
import Item2 from "./screens/Item";
import Item11 from "./screens/Item1";
import CATEGORIES1 from "./screens/CATEGORIES1";
import PROFILE from "./screens/PROFILE";
import CART from "./screens/CART";
import About from "./components/About";
import Login1 from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";
import Menu1 from "./components/Menu";
import Search from "./screens/Search";
import NavUPLOAD from "./components/NavUPLOAD";
import StatusBar1 from "./components/StatusBar1";
import HOME2 from "./components/HOME2";
import CATEGORYChosen from "./components/CATEGORYChosen";
import CATEGORY from "./components/CATEGORY";
import PROFILEChosen from "./components/PROFILEChosen";
import CARTChosen from "./components/CARTChosen";
import ButtonPrimaryInactiveBig from "./components/ButtonPrimaryInactiveBig";
import ButtonPrimaryInactiveSmall from "./components/ButtonPrimaryInactiveSmall";
import HOMEChosen from "./components/HOMEChosen";
import NavUploadS from "./components/NavUploadS";
import UPLOADSChosen from "./components/UPLOADSChosen";
import SOLDS from "./components/SOLDS";
import PROFILES1 from "./components/PROFILES1";
import NavHomeS from "./components/NavHomeS";
import UPLOADS from "./components/UPLOADS";
import NavProfileS from "./components/NavProfileS";
import PROFILESChosen from "./components/PROFILESChosen";
import NavSoldS from "./components/NavSoldS";
import HOMES1 from "./components/HOMES1";
import MyitemsSChosen from "./components/MyitemsSChosen";
import HomeAppliances from "./components/HomeAppliances";
import NavCategories from "./components/NavCategories";
import TITLEPAGE from "./components/TITLEPAGE";
import NavPROFILE from "./components/NavPROFILE";
import NavCart from "./components/NavCart";
import Property1Title from "./components/Property1Title";
import NavHome from "./components/NavHome";
import ProfileContainer1 from "./components/ProfileContainer1";
import ContainerForm from "./components/ContainerForm";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "DMSans-MediumItalic": require("./assets/fonts/DMSans-MediumItalic.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Aclonica-Regular": require("./assets/fonts/Aclonica-Regular.ttf"),
    "AlfaSlabOne-Regular": require("./assets/fonts/AlfaSlabOne-Regular.ttf"),
    "Actor-Regular": require("./assets/fonts/Actor-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CATEGORIES"
              component={CATEGORIES}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelluploadItems"
              component={SelluploadItems}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HOME"
              component={HOME}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SELL"
              component={SELL}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CATEGORIES2"
              component={CATEGORIES2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pin"
              component={Pin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page"
              component={Page}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pag"
              component={Pag}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HOMES"
              component={HOMES}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pin1"
              component={Pin1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item"
              component={Item}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item1"
              component={Item1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SELL1"
              component={SELL1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HOME1"
              component={HOME1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PROFILES"
              component={PROFILES}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MYITEMS"
              component={MYITEMS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item2"
              component={Item2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item11"
              component={Item11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CATEGORIES1"
              component={CATEGORIES1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PROFILE"
              component={PROFILE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CART"
              component={CART}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="About"
              component={About}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu1"
              component={Menu1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
