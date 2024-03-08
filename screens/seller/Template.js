import React from "react";
import { View } from "react-native"; // Added Pressable
import { useNavigation } from "@react-navigation/native";
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";
import NavSeller from "../../components/nav/seller/NavSeller";

const SellerPageTemplate = ({authMessage,children, page_name,the_page, specificFooter}) => {
  const userType = "seller"
  const TheFooter = ()=>{
    if(page_name){
      if(the_page !=='menu'){
        return(
          <NavSeller page_name={page_name} userType={userType}/>
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

export default SellerPageTemplate;