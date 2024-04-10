import React, { useState } from "react";
import { View, Pressable, Modal, Text } from "react-native";
import SellerMenu from "../../../components/nav/SellerMenu";
import TITLEPAGE from "../../../components/nav/TITLEPAGE";
import { ProfileStyles } from "../../../assets/styles/profileStyles";
import BuyerMenu from "../../../components/nav/BuyerMenu";
import SellerPageTemplate from "../../../screens/seller/Template";
import BuyerPageTemplate from "../../../screens/buyer/Template";

const ProfileTemplate = ({userType, children}) => {
  const [openMenu, setopenMenu] = useState(false);

  const openTheMenu =() => {
    setopenMenu(true);
  }

  const closeTheMenu = () => {
    setopenMenu(false);
  }
  const SelectedTemplate = ()=>{
    if(userType === 'seller'){
      return SellerPageTemplate
    }else{
      return BuyerPageTemplate
    }
  }
  const TheTemplate = SelectedTemplate();

  return (
    <TheTemplate  page_name ={userType === 'seller'?'SellerProfile':'BuyerProfile'}>
      <View style={ProfileStyles.titlePage} >
        <TITLEPAGE onMenuIconPress={openTheMenu}/>
      </View>
      <View style={ProfileStyles.content}>
        {children}
      </View>
      <Modal animationType="fade" transparent visible={openMenu} >
        <View style={ProfileStyles.fluentnavFilledIconOverlay}>
          <Pressable style={ProfileStyles.fluentnaviFilledIcon}
            onPress={closeTheMenu}
          />
          {
            userType === 'seller'?(
              <SellerMenu onClose={closeTheMenu} />
            ):(
              <BuyerMenu onClose={closeTheMenu} />
            )
          }
        </View>
      </Modal>
    </TheTemplate>
  );
};


export default ProfileTemplate;