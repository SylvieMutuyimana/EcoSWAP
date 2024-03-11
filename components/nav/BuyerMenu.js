import React, { memo } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../../GlobalStyles";
import { menuPages } from "../../page_links";
import BuyerPageTemplate from "../../screens/buyer/Template";
import { LogOut } from "./navigate";
const BuyerMenu =  memo(({ onClose }) => {
  const navigation = useNavigation();
  const userType = 'buyer'
  const changePage = (name,link)=>{
    if(link){navigation.navigate(link)}
    if(name === 'LOGOUT'){
      LogOut()
      onClose()
      navigation.navigate('Welcome')
    }
  }
  return (
    <BuyerPageTemplate the_page ='menu'>
      <View style={styles.details}>
        <View style={styles.cancelboldParent}>
          <Pressable onPress={onClose}>
            <Image style={styles.cancelboldIcon} contentFit="cover"
              source={require("../../assets/images/icons/cancelbold.png")}
            />
          </Pressable>
          <Image style={styles.rectangleIcon} contentFit="cover"
            source={require("../../assets/images/samples/profile_circle.png")}
          />
        </View>
        <View style={styles.frameParent}>
          {
            menuPages[userType].map((item_, index)=>(
              <Pressable key={index} style={styles.parentFlexBox} onPress={()=>changePage(item_.name,item_.link)}>
                <Text style={styles.home}>{item_.name}</Text>
                <Image style={styles.vectorIcon} contentFit="cover"
                  source={require("../../assets/images/icons/right-cursor2.png")}
                />
              </Pressable>
            ))
          }
        </View>
      </View>
    </BuyerPageTemplate>
  );
});

const styles = StyleSheet.create({
  parentFlexBox: {
    padding: Padding.p_base,
    borderRadius: Border.br_xl,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  cancelboldIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  rectangleIcon: {
    borderRadius: Border.br_31xl,
    width: 56,
    height: 56,
    marginLeft: 225,
  },
  cancelboldParent: {
    paddingHorizontal: Padding.p_12xs,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    textTransform: "uppercase",
    fontFamily: FontFamily.interRegular,
    color: Color.primaryPureWhite,
    textAlign: "left",
    width: 158,
    height: 26,
  },
  vectorIcon: {
    width: 6,
    height: 12,
    marginLeft: 130,
  },
  frameParent: {
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  details: {
    justifyContent: "center",
    alignItems: "center",
    height:'100%',
    width:'100%',
    overflow: "hidden",
    backgroundColor: Color.green,
    minHeight: 700
  },
});

export default BuyerMenu;