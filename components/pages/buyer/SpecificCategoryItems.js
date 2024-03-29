import React, { useMemo, memo } from "react";
import {StyleSheet, View } from "react-native";
import HomeAppliances from "../../HomeAppliances";
import { Padding } from "../../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SpecificCategoryItems = memo(
  ({ propOverflow, propMarginTop, propPosition, propTop, propLeft
  }) => {
    const cATEGORIESStyle = useMemo(() => {
      return {
        ...getStyleValue("overflow", propOverflow),
        ...getStyleValue("marginTop", propMarginTop),
        ...getStyleValue("position", propPosition),
        ...getStyleValue("top", propTop),
        ...getStyleValue("left", propLeft),
      };
    }, [propOverflow, propMarginTop, propPosition, propTop, propLeft]);
    const navigation = useNavigation();

    return (
      <View style={[styles.categories, cATEGORIESStyle]}>
        <HomeAppliances
          homeAppliancesYoullLoveAn={require("../../../assets/images/samples/cat1.png")}
          homeApplicances="Home Applicances"
          homeAppliancesPosition="unset"
          homeAppliancesBackgroundColor="unset"
          homeAppliancesWidth={80}
          homeAppliancesHeight={76}
          frameViewBorderStyle="unset"
          frameViewBorderColor="unset"
          homeApplicancesFontSize={8}
          homeApplicancesFontFamily="Inter-Regular"
          homeApplicancesFontWeight="unset"
          onHomeAppliancesPress={() => navigation.navigate("CATEGORIES1")}
        />
        <HomeAppliances
          homeAppliancesYoullLoveAn={require("../../../assets/images/samples/cat1.png")}
          homeApplicances="Phones/Tablets"
          homeAppliancesPosition="unset"
          homeAppliancesBackgroundColor="unset"
          homeAppliancesWidth={80}
          homeAppliancesHeight={76}
          frameViewBorderStyle="unset"
          frameViewBorderColor="unset"
          homeApplicancesFontSize={8}
          homeApplicancesFontFamily="Inter-Regular"
          homeApplicancesFontWeight="unset"
        />
        <HomeAppliances
          homeAppliancesYoullLoveAn={require("../../../assets/images/samples/cat1.png")}
          homeApplicances="Phones/Tablets"
          homeAppliancesPosition="unset"
          homeAppliancesBackgroundColor="unset"
          homeAppliancesWidth={80}
          homeAppliancesHeight={76}
          frameViewBorderStyle="unset"
          frameViewBorderColor="unset"
          homeApplicancesFontSize={8}
          homeApplicancesFontFamily="Inter-Regular"
          homeApplicancesFontWeight="unset"
        />
        <HomeAppliances
          homeAppliancesYoullLoveAn={require("../../../assets/images/samples/cat1.png")}
          homeApplicances="Phones/Tablets"
          homeAppliancesPosition="unset"
          homeAppliancesBackgroundColor="unset"
          homeAppliancesWidth={80}
          homeAppliancesHeight={76}
          frameViewBorderStyle="unset"
          frameViewBorderColor="unset"
          homeApplicancesFontSize={8}
          homeApplicancesFontFamily="Inter-Regular"
          homeApplicancesFontWeight="unset"
        />
        <HomeAppliances
          homeAppliancesYoullLoveAn={require("../../../assets/images/samples/cat1.png")}
          homeApplicances="Phones/Tablets"
          homeAppliancesPosition="unset"
          homeAppliancesBackgroundColor="unset"
          homeAppliancesWidth={80}
          homeAppliancesHeight={76}
          frameViewBorderStyle="unset"
          frameViewBorderColor="unset"
          homeApplicancesFontSize={8}
          homeApplicancesFontFamily="Inter-Regular"
          homeApplicancesFontWeight="unset"
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  categories: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: Padding.p_base_5,
    marginTop: 5,
  },
});

export default SpecificCategoryItems;
