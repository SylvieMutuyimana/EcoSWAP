import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StarterPageStyles } from "../../assets/styles/auth/StartPageStyles";

const StartingPage2 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={StarterPageStyles.thePage} resizeMode="cover"
      source={require("../../assets/images/auth/StartPage2.png")}
    >
      <View style={StarterPageStyles.pageData}>
        <View style={StarterPageStyles.rectangle}>
          <Text style={StarterPageStyles.Text}>
            Transform Waste into Wealth and innovation
          </Text>
        </View>
        <Pressable style={[StarterPageStyles.buttonContainer, StarterPageStyles.page2Button]} onPress={() => navigation.navigate("Welcome")}>
          <Text style={StarterPageStyles.buttonText}>START</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default StartingPage2;
