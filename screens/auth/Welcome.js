import React, { useState } from "react";
import { View, Text, Pressable, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WelcomeStyles } from "../../assets/styles/auth/welcomeStyles";
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";
import { setUserType } from "./navigate";
import About from "../../components/auth/About";

const Welcome = ({ userType }) => {
  const navigation = useNavigation();
  const [readMore, setMore] = useState(false);

  const openReadMore = () => {
    setMore(true);
  };

  const closeReadMore = () => {
    setMore(false);
  };

  const handleSubmit = (type) => {
    console.log('usertype on welcome: ', type);
    setUserType(type);
    navigation.navigate("Login", { userType: type });
  };
  
  console.log('usertype: ', userType);

  return (
    <FullPageTemplate status_bar={true} green_back={true} footer={false}>
      <View style={[pageStyles.pageContent, pageStyles.welcome]}>
        <View style={WelcomeStyles.title}>
          <Image
            style={WelcomeStyles.electronicRecycling1Icon}
            contentFit="cover"
            source={require("../../assets/images/auth/electronicrecycling-1.png")}
          />
          <Text style={WelcomeStyles.eWasteManagement}>
            E WASTE MANAGEMENT RE-IMAGINED
          </Text>
        </View>
        <View style={[WelcomeStyles.about, WelcomeStyles.aboutSpaceBlock]}>
          <Image
            style={WelcomeStyles.aboutChild}
            contentFit="cover"
            source={require("../../assets/images/auth/logoabout.png")}
          />
          <Pressable style={WelcomeStyles.readMore} onPress={openReadMore}>
            <Text style={WelcomeStyles.readMore1}>Read More</Text>
          </Pressable>
        </View>
        <View style={[WelcomeStyles.userNav, WelcomeStyles.aboutSpaceBlock]}>
          <Pressable onPress={() => handleSubmit('seller')} style={WelcomeStyles.button}>
            <Text style={WelcomeStyles.buttonText}>SELL E-WASTE</Text>
          </Pressable>
          <Pressable onPress={() => handleSubmit('buyer')} style={WelcomeStyles.button}>
            <Text style={WelcomeStyles.buttonText}>BUY E-WASTE</Text>
          </Pressable>
        </View>
      </View>
      <Modal visible={readMore} onRequestClose={closeReadMore}>
        <About closeReadMore={closeReadMore} />
      </Modal>
    </FullPageTemplate>
  );
};

export default Welcome;
