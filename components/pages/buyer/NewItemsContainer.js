import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import PriceListContainer from "./PriceListContainer";
import { FontSize, Color, FontFamily, Padding, Border } from "../../../GlobalStyles";

const NewItemsContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.newItems}>
      <Text style={styles.newItems1}>NEW ITEMS</Text>
      <View style={[styles.item1Parent, styles.parentFlexBox]}>
        {[...Array(9)].map((_, index) => (
          <Pressable style={[styles.item1, styles.parentFlexBox]} key={index}
            onPress={() => navigation.navigate("Item2")}
          >
            <Image style={styles.image} contentFit="cover"
              source={require("../../../assets/images/pages/buyer/new_item.png")}
            />
            <View style={styles.descriptionParent}>
              <Text style={[styles.description, styles.rwfTypo]}>
                Cracked Screen Dell  ... 
              </Text>
              <View style={[styles.rwfParent, styles.parentFlexBox]}>
                <Text style={[styles.rwf, styles.rwfTypo]}>91,000 rwf</Text>
                <Image style={styles.vectorIcon} contentFit="cover"
                  source={require("../../../assets/vector.png")}
                />
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  rwfTypo: {
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  newItems1: {
    fontSize: FontSize.size_4xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 303,
    height: 13,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  image: {
    width: 60,
    height: 38,
  },
  description: {
    fontFamily: FontFamily.interRegular,
    width: 55,
    height: 20,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 52,
    height: 11,
  },
  vectorIcon: {
    width: 6,
    height: 6,
    marginLeft: 3,
  },
  descriptionParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    marginLeft: 10,
    overflow: "hidden",
  },
  item1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryPureWhite,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_2xs,
  },
  item1Parent: {
    width: 358,
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_base_5,
    paddingVertical: 0,
    marginTop: 5,
  },
  newItems: {
    paddingHorizontal: Padding.p_12xs,
    paddingTop: Padding.p_8xs,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default NewItemsContainer;
