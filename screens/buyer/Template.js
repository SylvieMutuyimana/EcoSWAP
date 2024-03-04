import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native"; // Added Pressable
import { useNavigation } from "@react-navigation/native";
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";
import NavBuyer from "../../components/nav/buyer/NavBuyer";

const BuyerPageTemplate = ({authMessage, userType,children, page_name, specificFooter}) => {
  const navigation = useNavigation();
  const TheFooter = ()=>{
    if(specificFooter){
      return(
        <>{specificFooter()}</>
      )
    }else{
      return(
        <NavBuyer page_name={page_name}/>
      )
    }
  }
  return (
    <FullPageTemplate status_bar={true} green_back={false} TheFooter={TheFooter}>
      <View style={pageStyles.pageContent}>
        {children}
      </View>
    </FullPageTemplate>
  );
};

export default BuyerPageTemplate;

const BuyerPageStyles = StyleSheet.create({

})
