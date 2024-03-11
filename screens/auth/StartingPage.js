import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StarterPageStyles } from "../../assets/styles/auth/StartPageStyles";
import { pageStyles } from "../../assets/styles/pageStyles";
import { setsecondTimeUser } from "../../components/data/localStorage";

const StartingPage = () => {
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState(0);
  const thePages = [
    {
      imagePath: require("../../assets/images/auth/StartPage1.png"),
      pageText: 'Electrify Your Eco-Friendly Journey',
      buttonText: `Buy, and Sell, E-Waste with Ease! ${'-->'}`
    },
    {
      imagePath: require("../../assets/images/auth/StartPage2.png"),
      pageText: 'Transform Waste into Wealth and innovation',
      buttonText: "START"
    },
  ];

  const nextPage = () => {
    if (currentPage >= (thePages.length - 1)) {
      setsecondTimeUser(true)
      navigation.navigate('Welcome');
    }else{
      setCurrentPage(currentPage + 1);
    }
  };

  const thePage = thePages[currentPage];

  return (
    <ImageBackground style={pageStyles.fullPage} resizeMode="cover" source={thePage.imagePath}>
      <View style={StarterPageStyles.pageData}>
        <View style={StarterPageStyles.rectangle}>
          <Text style={StarterPageStyles.Text}>
            {thePage.pageText}
          </Text>
        </View>
        <Pressable onPress={nextPage}
          style={[StarterPageStyles.buttonContainer,
            currentPage === 0 ? StarterPageStyles.page1Button : StarterPageStyles.page2Button,
          ]}
        >
          <Text style={StarterPageStyles.buttonText}>
            {thePage.buttonText}
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default StartingPage;
