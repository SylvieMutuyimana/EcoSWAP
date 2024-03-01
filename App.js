import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { page_links } from "./page_links";
import { theFonts } from "./components/accessories/fonts";
import { getLocalRecentPage, getPropsFromLocalStorage, getUserFromLocalStorage,} from "./components/data/localStorage";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);
  const [fontsLoaded, error] = useFonts(theFonts);
  const [userData, setUserData] = useState(getUserFromLocalStorage());
  const [userType, setUserType] = useState('buyer');
  const [authMessage, setAuthMessage] =useState(null)
  const handleUserTypeChange = (type) => {
    setUserType(type);
  };
  useEffect(()=>{
    const user_type = getPropsFromLocalStorage('userType')
    if(user_type){
      handleUserTypeChange(user_type)
    }
  },[userType])

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {page_links(userType).map((page, index) =>(
              <Stack.Screen
                key={index} name={page.name}
                component={page.component} options={page.options}
                userData={userData} setUserData={setUserData}
                userType={userType} setUserType={handleUserTypeChange}
                authMessage={authMessage} setAuthMessage={setAuthMessage}
              />)
            )}
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};

export default App;
