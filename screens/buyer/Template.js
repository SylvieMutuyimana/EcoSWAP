import React from "react";
import { View, StyleSheet, Text } from "react-native"; // Added Pressable
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";
import NavBuyer from "../../components/nav/NavBuyer";

const BuyerPageTemplate = ({children, page_name, the_page}) => {
  const userType = "buyer"
  const TheFooter = ()=>{
    if(page_name){
      if(the_page !=='menu'){
        return(
          <NavBuyer page_name={page_name==='Loading'?page_name='BuyerHome':page_name} userType={userType}/>
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
