import React, { useEffect } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WelcomeStyles } from "../../assets/styles/auth/welcomeStyles";
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";

const SessionTimeOut = ({setUserType, userType}) => {
  const navigation = useNavigation();

  const openReadMoreText = () => {
    // Implement your logic for opening read more text
  };
  const handleSubmit = (type) => {
    //setUserType(type)
    setUserType(null)
    navigation.navigate("Welcome");
  };
  console.log('setUserType: ', setUserType)

  console.log('usertype: ', userType)
  return (
    <FullPageTemplate status_bar={true} footer = {false}>
      <View style={[pageStyles.pageContent, pageStyles.welcome]}>
        <View style={WelcomeStyles.title}>
          <Image
            style={WelcomeStyles.electronicRecycling1Icon}
            contentFit="cover"
            source={require("../../assets/images/auth/electronicrecycling-1.png")}
          />
          <Text style={WelcomeStyles.eWasteManagement}>
            Session Time Out
          </Text>
        </View>
        <View style={[WelcomeStyles.userNav, WelcomeStyles.aboutSpaceBlock]}>
          <Pressable onPress={() => handleSubmit()} style={WelcomeStyles.button}>
            <Text style={WelcomeStyles.buttonText}>
              LOGIN
            </Text>
          </Pressable>
        </View>
      </View>
    </FullPageTemplate>
  );
};

export default SessionTimeOut;
