import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const HomeContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.navHome}>
      <View style={[styles.home, styles.homeFlexBox]}>
        <View style={[styles.antDesignhomeFilled, styles.homeFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
        <Text style={styles.home1}> HOME</Text>
      </View>
      <Pressable
        style={[styles.home2, styles.homeFlexBox]}
        onPress={() => navigation.navigate("CATEGORIES1")}
      >
        <View style={[styles.antDesignhomeFilled1, styles.homeFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.home2, styles.homeFlexBox]}
        onPress={() => navigation.navigate("SELL")}
      >
        <View style={[styles.antDesignhomeFilled1, styles.homeFlexBox]}>
          <Image
            style={[styles.antDesigncloudUploadOutlinIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/antdesignclouduploadoutlined.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.home2, styles.homeFlexBox]}
        onPress={() => navigation.navigate("CART")}
      >
        <View style={[styles.antDesignhomeFilled1, styles.homeFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.home2, styles.homeFlexBox]}
        onPress={() => navigation.navigate("PROFILE")}
      >
        <View style={[styles.antDesignhomeFilled1, styles.homeFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  homeFlexBox: {
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  iconLayout: {
    height: 22,
    width: 22,
  },
  vectorIcon: {
    width: 14,
    height: 14,
  },
  antDesignhomeFilled: {
    backgroundColor: Color.colorsDefault,
    padding: Padding.p_3xs,
  },
  home1: {
    fontSize: FontSize.size_4xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorsDefault,
    textAlign: "left",
    width: 63,
    height: 11,
    marginLeft: 2,
  },
  home: {
    backgroundColor: Color.grey,
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  antDesignhomeFilled1: {
    padding: Padding.p_7xs,
  },
  home2: {
    marginLeft: 24.5,
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  antDesigncloudUploadOutlinIcon: {
    overflow: "hidden",
    height: 22,
    width: 22,
  },
  navHome: {
    position: "absolute",
    marginLeft: -180,
    bottom: 0,
    left: "50%",
    backgroundColor: Color.green,
    borderStyle: "solid",
    borderColor: Color.darkGrey,
    borderTopWidth: 2,
    paddingHorizontal: Padding.p_sm_5,
    paddingVertical: Padding.p_mini,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default HomeContainer;
