import React from "react";
import { View } from "react-native"; // Added Pressable
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";
import NavSeller from "../../components/nav/NavSeller";

const SellerPageTemplate = ({children, page_name}) => {
  const userType = "seller"
  const TheFooter = ()=>{
    if(page_name){
      if(page_name !=='menu'){
        return(
          <NavSeller page_name={page_name==='Loading'?page_name='SellerHome':page_name} userType={userType}/>
        )
      }else{return false}
    }else{return false}
  }
  return (
    <FullPageTemplate status_bar={true} green_back={false} TheFooter={TheFooter} page_name={page_name} > 
      <View style={pageStyles.pageContent}>
        {children}
      </View>
    </FullPageTemplate>
  );
};

export default SellerPageTemplate;