import React from "react";
import { View } from "react-native"; // Added Pressable
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";

const ItemPageTemplate = ({children, SecondHeader}) => {
  return (
    <FullPageTemplate green_back={false} SecondHeader={SecondHeader}> 
      <View style={pageStyles.pageContent}>
        {children}
      </View>
    </FullPageTemplate>
  );
};

export default ItemPageTemplate;