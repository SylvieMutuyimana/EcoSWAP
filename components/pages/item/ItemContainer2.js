import React, { memo } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../../../GlobalStyles";

const ItemContainer2 = memo(({ onPressablePress, onVectorPress }) => {
  return (
    <View style={styles.theitem}>
      <View style={styles.itemdetails}>
        <View style={[styles.heading, styles.frameWrapperFlexBox]}>
          <Pressable onPress={onPressablePress}>
            <Text style={styles.text}>{`<--`}</Text>
          </Pressable>
          <Text style={styles.description}>Phone- Iphone 4</Text>
          <Image style={styles.headingChild} contentFit="cover"
            source={require("../../../assets/images/icons/menu_dots.png")}
          />
        </View>
        <View style={styles.unextended}>
          <View style={styles.item}>
            <View style={styles.images}>
              <Image style={styles.istockImage}
                contentFit="cover"
                source={require("../../../assets/images/samples/cracked_phone.png")}
              />
            </View>
            <View style={[styles.descriptionParent, styles.frameWrapperFlexBox]}>
              <Text style={styles.description1}>56,000 rwf</Text>
              <Text style={[styles.description2, styles.descriptionTypo]}>
                seller: Muhizi Mai
              </Text>
              <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
                <View style={[styles.heading, styles.frameWrapperFlexBox]}>
                  <Text style={[styles.description3, styles.descriptionTypo]}>
                    WishList
                  </Text>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../../../assets/images/icons/wish.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.description4}>
                Smashed screen iphone 4, front camera broken
              </Text>
            </View>
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={[styles.bidParent, styles.loginFlexBox]}>
                <Text style={[styles.bid, styles.bidTypo]}>Bid:</Text>
                <View style={[styles.email, styles.frameWrapperFlexBox]}>
                  <Text style={[styles.email1, styles.bidTypo]}>
                    Amount rwf
                  </Text>
                </View>
              </View>
              <View style={[styles.loginWrapper, styles.frameWrapperFlexBox]}>
                <View style={[styles.login, styles.loginFlexBox]}>
                  <Text style={styles.purchase}>PURCHASE</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
              <View style={[styles.descriptionContainer, styles.frameWrapperFlexBox]}>
                <Text style={styles.description5}>{`About `}</Text>
                <Pressable style={styles.vector} onPress={onVectorPress}>
                  <Image style={styles.icon}
                    contentFit="cover"
                    source={require("../../../assets/images/icons/down_icon.png")}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  frameWrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  descriptionTypo: {
    color: Color.colorMediumblue_100,
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    fontSize: FontSize.size_3xs,
  },
  frameSpaceBlock: {
    marginTop: 10,
    justifyContent: "center",
    overflow: "hidden",
  },
  loginFlexBox: {
    paddingHorizontal: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  bidTypo: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    textAlign: "left",
    color: Color.colorsDefault,
  },
  text: {
    fontSize: FontSize.font_size,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 27,
    height: 18,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  description: {
    fontSize: FontSize.size_2xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 122,
    marginLeft: 83,
    textAlign: "center",
    color: Color.colorsDefault,
  },
  headingChild: {
    width: 4,
    height: 17,
    marginLeft: 83,
    overflow: "hidden",
  },
  heading: {
    justifyContent: "center",
    overflow: "hidden",
  },
  istockImage: {
    width: 332,
    height: 268,
  },
  images: {
    justifyContent: "center",
    alignItems: "center",
  },
  description1: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 81,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  description2: {
    width: 120,
    marginLeft: 22,
    textAlign: "center",
  },
  description3: {
    width: 49,
    height: 10,
    textAlign: "left",
  },
  vectorIcon: {
    height: 11,
    width: 10,
  },
  frameWrapper: {
    marginLeft: 22,
    justifyContent: "center",
    overflow: "hidden",
  },
  descriptionParent: {
    marginTop: 12,
    justifyContent: "center",
    overflow: "hidden",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  description4: {
    fontFamily: FontFamily.interRegular,
    width: 292,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  descriptionWrapper: {
    width: 297,
    justifyContent: "center",
    overflow: "hidden",
  },
  bid: {
    width: 22,
    height: 12,
    fontSize: FontSize.size_3xs,
  },
  email1: {
    fontSize: FontSize.size_4xs,
    width: 64,
  },
  email: {
    backgroundColor: Color.colorWhitesmoke,
    elevation: 4,
    padding: Padding.p_8xs,
    marginLeft: 4,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
  bidParent: {
    paddingVertical: Padding.p_12xs,
  },
  purchase: {
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.primaryPureWhite,
    width: 67,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
  login: {
    backgroundColor: Color.colorsDefault,
    paddingVertical: Padding.p_8xs,
    borderRadius: Border.br_8xs,
  },
  loginWrapper: {
    marginLeft: 10,
    justifyContent: "center",
    overflow: "hidden",
  },
  frameGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  description5: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 40,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  vector: {
    height: 7,
    width: 10,
  },
  descriptionContainer: {
    overflow: "hidden",
  },
  frameContainer: {
    width: 297,
  },
  frameParent: {
    marginTop: 25,
    justifyContent: "center",
    overflow: "hidden",
  },
  unextended: {
    marginTop: 20,
    overflow: "hidden",
  },
  itemdetails: {
    alignItems: "center",
    overflow: "hidden",
  },
  theitem: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
});

export default ItemContainer2;
