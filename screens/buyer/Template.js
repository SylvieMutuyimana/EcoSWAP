import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native"; // Added Pressable
import { useNavigation } from "@react-navigation/native";
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";
import NavBuyer from "../../components/nav/buyer/NavBuyer";

const BuyerPageTemplate = ({authMessage,children, page_name,the_page, specificFooter}) => {
  const userType = "buyer"
  const navigation = useNavigation();
  const TheFooter = ()=>{
    if(page_name){
      if(the_page !=='menu'){
        return(
          <NavBuyer page_name={page_name} userType={userType}/>
        )
      }else{return false}
    }else{return false}
  }
  return (
    <FullPageTemplate status_bar={true} green_back={false} TheFooter={TheFooter} page_name={page_name} the_page={the_page}> 
      <View style={pageStyles.pageContent}>
        {children}
      </View>
    </FullPageTemplate>
  );
};

export default BuyerPageTemplate;

const BuyerPageStyles = StyleSheet.create({

})
