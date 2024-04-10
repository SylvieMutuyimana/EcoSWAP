import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const SimilarItemsContainer = () => {
  return (
    <View style={[styles.similarItems, styles.itemsFlexBox]}>
      <Text style={styles.heading}>SIMILAR ITEMS</Text>
      <View style={[styles.items, styles.itemsFlexBox]}>
        <View style={styles.itemLayout}>
          <Image style={[styles.wish_blackIcon, styles.biheartIconPosition]}
            contentFit="cover" source={require("../assets/images/icons/wish_black.png")}
          />
          <Image style={[styles.nokia1Icon, styles.iconPosition]}
            contentFit="cover" source={require("../assets/images/samples/nokia.png")}
          />
          <Text style={styles.description}>
            <Text style={styles.nokiaPhoneCantStart20000}>
              <Text style={styles.nokiaPhoneCant}>
                Nokia phone can’t start
              </Text>
              <Text style={styles.rwf}>
                20,000 rwf
              </Text>
              <Text style={styles.nokiaPhoneCant}> </Text>
            </Text>
            <Text style={styles.checkItem}>Check item Bid wish</Text>
          </Text>
        </View>
        {(
        [[...Array(8)].map((_,index)=>(
          <View style={[styles.item3, styles.itemLayout]} key={index}>
              <Text style={styles.description}>
                <Text style={styles.nokiaPhoneCantStart20000}>
                  <Text style={styles.nokiaPhoneCant}>
                    Smashed screen iphone 4 ...
                  </Text>
                  <Text style={styles.rwf}> 20,000 rwf </Text>
                  <Text style={styles.nokiaPhoneCant}> </Text>
                </Text>
                <Text style={styles.checkItem}>Check item Bid wish</Text>
              </Text>
              <Image style={[styles.istockphotoIcon, styles.iconPosition]}
                contentFit="cover" source={require("../assets/images/samples/cracked_screen.png")}
              />
              <Image style={[styles.wish_blackIcon1, styles.biheartIconPosition]}
                contentFit="cover" source={require("../assets/images/icons/wish_black.png")}
              />
            </View>
          ))]
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemsFlexBox: {
    alignItems: "center",
    marginTop: 10,
    overflow: "hidden",
  },
  biheartIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  iconPosition: {
    width: 100,
    left: 15,
    position: "absolute",
  },
  itemLayout: {
    height: 65,
    width: 325,
    backgroundColor: Color.primaryPureWhite,
    borderRadius: Border.item_br,
    overflow: "hidden",
  },
  heading: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    width: 332,
    height: 12,
    color: Color.colorsDefault,
  },
  wish_blackIcon: {
    top: 41,
    left: 295,
    width: 10,
    position: "absolute",
    height: 12,
  },
  nokia1Icon: {
    top: 5,
    height: 54,
  },
  nokiaPhoneCant: {
    fontFamily: FontFamily.interRegular,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  nokiaPhoneCantStart20000: {
    fontSize: FontSize.size_4xs,
    color: Color.colorsDefault,
  },
  checkItem: {
    fontSize: FontSize.size_5xs,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    color: Color.colorMediumblue_100,
  },
  description: {
    height: "76.92%",
    width: "58.46%",
    top: "12.31%",
    left: "40%",
    textAlign: "left",
    position: "absolute",
  },
  istockphotoIcon: {
    top: 7,
    height: 50,
  },
  wish_blackIcon1: {
    height: "18.46%",
    width: "3.08%",
    top: "63.08%",
    right: "6.15%",
    bottom: "18.46%",
    left: "90.77%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  item3: {
    marginTop: 10,
  },
  items: {
    backgroundColor: Color.colorMediumblue_300,
    marginTop: 10,
  },
  similarItems: {
    paddingHorizontal: Padding.p_10xs,
    paddingVertical: 0,
    marginTop: 10,
  },
});

export default SimilarItemsContainer;
