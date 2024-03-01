import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StarterPageStyles } from "../../assets/styles/auth/StartPageStyles";

const StartingPage1 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={StarterPageStyles.thePage} resizeMode="cover"
      source={require("../../assets/images/auth/StartPage1.png")}
    >
      <View style={StarterPageStyles.pageData}>
        <View style={StarterPageStyles.rectangle}>
          <Text style={StarterPageStyles.Text}>
            Electrify Your Eco-Friendly Journey
          </Text>
        </View>
        <Pressable style={[StarterPageStyles.buttonContainer, StarterPageStyles.page1Button]} onPress={() => navigation.navigate("StartingPage2")}>
          <Text style={StarterPageStyles.buttonText}>Buy, and Sell, E-Waste with Ease! {'-->'}</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default StartingPage1;
