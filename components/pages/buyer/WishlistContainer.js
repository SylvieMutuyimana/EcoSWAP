import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../../../GlobalStyles";

const WishlistContainer = memo(({ actionLabel }) => {
  return (
    <View style={[styles.wishlist, styles.viewFlexBox]}>
      <Text style={styles.pendingPayment}>{actionLabel}</Text>
      <View style={[styles.myWishlist, styles.viewFlexBox]}>
        <View style={styles.viewFlexBox}>
          <Image
            style={styles.istockImage}
            contentFit="cover"
            source={require("../../../assets/images/samples/crack_phone-2.png")}
          />
          <Text style={styles.rwf}>20,000 rwf</Text>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <Image
            style={styles.istockImage}
            contentFit="cover"
            source={require("../../../assets/images/samples/crack_phone-2.png")}
          />
          <Text style={styles.rwf}>20,000 rwf</Text>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <Image
            style={styles.istockImage}
            contentFit="cover"
            source={require("../../../assets/images/samples/crack_phone-2.png")}
          />
          <Text style={styles.rwf}>20,000 rwf</Text>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <Image
            style={styles.istockImage}
            contentFit="cover"
            source={require("../../../assets/images/samples/crack_phone-2.png")}
          />
          <Text style={styles.rwf}>20,000 rwf</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  pendingPayment: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    width: 325,
    height: 21,
    color: Color.colorsDefault,
  },
  istockImage: {
    width: 70,
    height: 44,
  },
  rwf: {
    fontSize: FontSize.size_5xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    width: 49,
    height: 8,
    color: Color.colorsDefault,
  },
  view1: {
    marginLeft: 10,
  },
  myWishlist: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primaryPureWhite,
    width: 324,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_7xs,
  },
  wishlist: {
    marginTop: 10,
  },
});

export default WishlistContainer;
