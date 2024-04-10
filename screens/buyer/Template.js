import React from "react";
import { View } from "react-native"; // Added Pressable
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";
import NavBuyer from "../../components/nav/NavBuyer";

const BuyerPageTemplate = ({children, page_name, SecondFooter, SecondHeader}) => {
  const userType = "buyer"
  const TheFooter = ()=>{
    if(page_name){
      if(page_name !=='menu'){
        return(
          <NavBuyer page_name={page_name==='Loading'?page_name='BuyerHome':page_name} userType={userType}/>
        )
      }else{return false}
    }else{return false}
  }
  return (
    <FullPageTemplate status_bar={true} green_back={false} TheFooter={TheFooter} 
      page_name={page_name} SecondFooter={SecondFooter} SecondHeader={SecondHeader}
    > 
      <View style={pageStyles.pageContent}>
        {children}
      </View>
    </FullPageTemplate>
  );
};

export default BuyerPageTemplate;
