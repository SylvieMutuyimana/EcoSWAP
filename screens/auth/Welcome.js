import React, { useEffect } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WelcomeStyles } from "../../components/auth/welcomeStyles";
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";

const Welcome = ({setUserType, userType}) => {
  const navigation = useNavigation();

  const openReadMoreText = () => {
    // Implement your logic for opening read more text
  };
  const handleSubmit = (type) => {
    //setUserType(type)
    navigation.navigate("Login");
  };
  console.log('setUserType: ', setUserType)

  console.log('usertype: ', userType)
  return (
    <FullPageTemplate status_bar={true} green_back={true}>
      <View style={[pageStyles.pageContent, pageStyles.welcome]}>
        <View style={WelcomeStyles.title}>
          <Image
            style={WelcomeStyles.electronicRecycling1Icon}
            contentFit="cover"
            source={require("../../assets/images/auth/electronicrecycling-1.png")}
          />
          <Text style={[WelcomeStyles.eWasteManagement, WelcomeStyles.wasteFlexBox]}>
            E WASTE MANAGEMENT RE-IMAGINED
          </Text>
        </View>
        <View style={[WelcomeStyles.about, WelcomeStyles.aboutSpaceBlock]}>
          <Image
            style={WelcomeStyles.aboutChild}
            contentFit="cover"
            source={require("../../assets/frame-187.png")}
          />
          <Pressable style={WelcomeStyles.readMore} onPress={openReadMoreText}>
            <Text style={[WelcomeStyles.readMore1, WelcomeStyles.wasteFlexBox]}>
              Read More
            </Text>
          </Pressable>
        </View>
        <View style={[WelcomeStyles.userNav, WelcomeStyles.aboutSpaceBlock]}>
          <Pressable
            style={WelcomeStyles.buyFlexBox}
            onPress={() => handleSubmit('seller')}
          >
            <Text style={[WelcomeStyles.sellEWaste, WelcomeStyles.wasteFlexBox]}>
              SELL E-WASTE
            </Text>
          </Pressable>
          <Pressable
            style={[WelcomeStyles.buy, WelcomeStyles.buyFlexBox]}
            onPress={() => handleSubmit('buyer')}
          >
            <Text style={[WelcomeStyles.sellEWaste, WelcomeStyles.wasteFlexBox]}>
              BUY E-WASTE
            </Text>
          </Pressable>
        </View>
      </View>
    </FullPageTemplate>
  );
};

export default Welcome;
