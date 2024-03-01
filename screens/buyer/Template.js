import React, { useState } from "react";
import { View } from "react-native"; // Added Pressable
import { useNavigation } from "@react-navigation/native";
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";

const BuyerPageTemplate = ({authMessage, userType}) => {
  const navigation = useNavigation();

  return (
    <FullPageTemplate status_bar={true} green_back={false} footer = {true}>
      <View style={[pageStyles.pageContent, pageStyles.auth]}>
        {children}
      </View>
    </FullPageTemplate>
  );
};

export default BuyerPageTemplate;

const BuyerPageStyles = StyleSheet.create({

})
