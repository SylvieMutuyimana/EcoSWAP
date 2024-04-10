import React from "react";
import { View } from "react-native"; // Added Pressable
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";

const ItemPageTemplate = ({children, page_name}) => {
  return (
    <FullPageTemplate status_bar={true} green_back={false} page_name={page_name}> 
      <View style={pageStyles.pageContent}>
        {children}
      </View>
    </FullPageTemplate>
  );
};

export default ItemPageTemplate;
