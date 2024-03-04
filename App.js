import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { page_links } from "./page_links";
import { theFonts } from "./components/accessories/fonts";
import { getUserFromLocalStorage } from "./components/data/localStorage";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);
  const [fontsLoaded, error] = useFonts(theFonts);
  const [userData, setUserData] = useState(null);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user_data = await getUserFromLocalStorage();
      if (user_data) {
        setUserData(user_data);
        setUserType(user_data.type);
      }
      setHideSplashScreen(false);
    };

    fetchData();
  }, []);

  if (!fontsLoaded || hideSplashScreen) {
    return null; // Show loading screen or splash screen until fonts are loaded and user data is fetched
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {page_links(userType).map((page, index) => (
          <Stack.Screen
            key={index}
            name={page.name}
            component={page.component}
            options={page.options}
            userData={userData}
            setUserData={setUserData}
            userType={userType}
            setUserType={setUserType}
          />
        ))}
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
};

export default App;
