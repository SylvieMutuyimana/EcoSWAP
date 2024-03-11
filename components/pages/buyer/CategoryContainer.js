import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SpecificCategoryItems from "./SpecificCategoryItems";
import { FontSize, FontFamily, Color, Padding } from "../../../GlobalStyles";

const CategoryContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.newItems}>
      <View style={[styles.newItemsInner, styles.newItemsInnerFlexBox]}>
        <View style={[styles.categoriesParent, styles.newItemsInnerFlexBox]}>
          <Text style={styles.categories}>CATEGORIES</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
      </View>
      <SpecificCategoryItems
        dimensionId={require("../../../assets/images/samples/cat1.png")}
        dimensionCode={require("../../../assets/images/samples/cat1.png")}
        dimensionIdentifier={require("../../../assets/images/samples/cat1.png")}
        dimensionCodeText={require("../../../assets/images/samples/cat1.png")}
        dimensionCodeValue={require("../../../assets/images/samples/cat1.png")}
        onHomeAppliancesPress={() => navigation.navigate("CATEGORIES1")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  newItemsInnerFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  categories: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorsDefault,
    textAlign: "left",
  },
  seeAll: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    color: Color.blue,
    width: 39,
    height: 12,
    marginLeft: 230,
    textAlign: "left",
  },
  categoriesParent: {
    width: 343,
    flexDirection: "row",
  },
  newItemsInner: {
    height: 18,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
  },
  newItems: {
    overflow: "hidden",
    paddingHorizontal: Padding.p_12xs,
    paddingTop: Padding.p_8xs,
    marginTop: 10,
    justifyContent: "center",
  },
});

export default CategoryContainer;
