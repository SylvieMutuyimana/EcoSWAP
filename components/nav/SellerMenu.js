import React from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { menuPages } from "../../page_links";
import SellerPageTemplate from "../../screens/seller/Template";
import { LogOut } from "./navigate";
import { Menustyles } from "./Menustyles";
const SellerMenu =  ({ onClose }) => {
  const navigation = useNavigation();
  const userType = 'seller'
  const changePage = (name,link)=>{
    if(link){navigation.navigate(link)}
    if(name === 'LOGOUT'){
      LogOut()
      onClose()
      navigation.navigate('Welcome')
    }
  }
  return (
    <SellerPageTemplate page_name ='menu'>
      <View style={Menustyles.details}>
        <View style={Menustyles.cancelboldParent}>
          <Pressable onPress={onClose}>
            <Image style={Menustyles.cancelboldIcon} contentFit="cover"
              source={require("../../assets/images/icons/cancelbold.png")}
            />
          </Pressable>
          <Image style={Menustyles.rectangleIcon} contentFit="cover"
            source={require("../../assets/images/samples/profile_circle.png")}
          />
        </View>
        <View style={Menustyles.frameParent}>
          {
            menuPages[userType].map((item_, index)=>(
              <Pressable key={index} style={Menustyles.parentFlexBox} onPress={()=>changePage(item_.name,item_.link)}>
                <Text style={Menustyles.home}>{item_.name}</Text>
                <Image style={Menustyles.vectorIcon} contentFit="cover"
                  source={require("../../assets/images/icons/icon_right.png")}
                />
              </Pressable>
            ))
          }
        </View>
      </View>
    </SellerPageTemplate>
  );
};


export default SellerMenu;