import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { all_page_links, page_links, startingPages } from "./page_links";
import { theFonts } from "./components/accessories/fonts";
import { checksecondTimeUser, getLoggerUserTypeFromLocalStorage, getUserFromLocalStorage } from "./components/data/localStorage";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);
  const [fontsLoaded] = useFonts(theFonts);
  const [userData, setUserData] = useState(null);
  const [userType, setUserType] = useState(getLoggerUserTypeFromLocalStorage())
  console.log('userType: ', userType)
  
  useEffect(() => {
    const user_type = getLoggerUserTypeFromLocalStorage()
    if(!userType){
      setUserType(user_type?user_type:null)
      console.log('!usertype')
      console.log('the links: ', page_links(user_type))
    }else if(user_type!==userType){
      setUserType(user_type?user_type:null)
      console.log('user_type !== usertype')
      console.log('the links: ', page_links(user_type))
    }
  }, [userType]);

  useEffect(() => {
    const fetchData = async () => {
      const user_data = await getUserFromLocalStorage();
      if (user_data) {
        setUserData(user_data);
      }
      setHideSplashScreen(false);
    };

    fetchData();
  }, []);

  const returnPages = (pages) => {
    const secondTimeUser = checksecondTimeUser()
    const the_pages = secondTimeUser? pages:[...startingPages, ...pages]
    return the_pages
  }

  if (!fontsLoaded || hideSplashScreen) {
    return null; // Show loading screen or splash screen until fonts are loaded and user data is fetched
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        { 
          userType?
          returnPages(page_links(userType)).map((page, index) => (
            <Stack.Screen
              key={index}
              name={page.name}
              component={page.component}
              options={page.options}
              userData={userData}
              setUserData={setUserData}
              userType={userType}
            />
          )):returnPages(all_page_links).map((page, index) => (
            <Stack.Screen
              key={index}
              name={page.name}
              component={page.component}
              options={page.options}
            />
          ))
        }

      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
};

export default App;
