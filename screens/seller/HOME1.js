import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ContainerSlideshow from "../../components/ContainerSlideshow";
import ItemContainer from "../../components/ItemContainer";
import { Padding, Color, FontSize, FontFamily, Border } from "../../GlobalStyles";

const HOME1 = () => {
  const navigation = useNavigation();

  return (

          <View style={styles.homepageitems}>
            <ContainerSlideshow
              dimensionsCode={require("../../assets/mask-group4.png")}
              productDimensionsCode={require("../../assets/group-353.png")}
              productDimensionsCode2={require("../../assets/mask-group5.png")}
              productDimensions={require("../../assets/group-353.png")}
            />
            <View style={[styles.newItems, styles.newSpaceBlock]}>
              <Text style={[styles.requests, styles.requestsLayout]}>
                REQUESTS
              </Text>
              <ItemContainer
                onItem1Press={() => navigation.navigate("Item")}
                onItem2Press={() => navigation.navigate("Item")}
                onItem3Press={() => navigation.navigate("Item")}
                onItem4Press={() => navigation.navigate("Item")}
                onItem5Press={() => navigation.navigate("Item")}
                onItem6Press={() => navigation.navigate("Item")}
                onItem11Press={() => navigation.navigate("Item")}
                onItem12Press={() => navigation.navigate("Item")}
              />
            </View>
            <View style={[styles.newItems1, styles.newSpaceBlock]}>
              <Text
                style={[styles.soldItems, styles.requestsLayout]}
              >{`SOLD ITEMS -->`}</Text>
              <View style={[styles.newItemsInner, styles.parentFlexBox]}>
                <View style={[styles.parent, styles.parentFlexBox]}>
                  <View style={styles.viewFlexBox}>
                    <Image
                      style={styles.istockphoto583851138612x612Icon}
                      contentFit="cover"
                      source={require("../../assets/istockphoto583851138612x612-2.png")}
                    />
                    <Text style={styles.rwf}>20,000 rwf</Text>
                  </View>
                  <View style={[styles.view1, styles.viewFlexBox]}>
                    <Image
                      style={styles.istockphoto583851138612x612Icon}
                      contentFit="cover"
                      source={require("../../assets/istockphoto583851138612x612-2.png")}
                    />
                    <Text style={styles.rwf}>20,000 rwf</Text>
                  </View>
                  <View style={[styles.view1, styles.viewFlexBox]}>
                    <Image
                      style={styles.istockphoto583851138612x612Icon}
                      contentFit="cover"
                      source={require("../../assets/istockphoto583851138612x612-2.png")}
                    />
                    <Text style={styles.rwf}>20,000 rwf</Text>
                  </View>
                  <View style={[styles.view1, styles.viewFlexBox]}>
                    <Image
                      style={styles.istockphoto583851138612x612Icon}
                      contentFit="cover"
                      source={require("../../assets/istockphoto583851138612x612-2.png")}
                    />
                    <Text style={styles.rwf}>20,000 rwf</Text>
                  </View>
                  <View style={[styles.view1, styles.viewFlexBox]}>
                    <Image
                      style={styles.istockphoto583851138612x612Icon}
                      contentFit="cover"
                      source={require("../../assets/istockphoto583851138612x612-2.png")}
                    />
                    <Text style={styles.rwf}>20,000 rwf</Text>
                  </View>
                  <View style={[styles.view1, styles.viewFlexBox]}>
                    <Image
                      style={styles.istockphoto583851138612x612Icon}
                      contentFit="cover"
                      source={require("../../assets/istockphoto583851138612x612-2.png")}
                    />
                    <Text style={styles.rwf}>20,000 rwf</Text>
                  </View>
                  <View style={[styles.view1, styles.viewFlexBox]}>
                    <Image
                      style={styles.istockphoto583851138612x612Icon}
                      contentFit="cover"
                      source={require("../../assets/istockphoto583851138612x612-2.png")}
                    />
                    <Text style={styles.rwf}>20,000 rwf</Text>
                  </View>
                  <View style={[styles.view1, styles.viewFlexBox]}>
                    <Image
                      style={styles.istockphoto583851138612x612Icon}
                      contentFit="cover"
                      source={require("../../assets/istockphoto583851138612x612-2.png")}
                    />
                    <Text style={styles.rwf}>20,000 rwf</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  newSpaceBlock: {
    marginTop: 11,
    paddingTop: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  requestsLayout: {
    height: 13,
    width: 303,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  parentFlexBox: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  requests: {
    fontSize: FontSize.size_4xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  newItems: {
    paddingHorizontal: Padding.p_12xs,
  },
  soldItems: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  istockphoto583851138612x612Icon: {
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
  parent: {
    backgroundColor: Color.primaryPureWhite,
    width: 336,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_12xs,
  },
  newItemsInner: {
    marginTop: 5,
  },
  newItems1: {
    paddingHorizontal: Padding.p_xs,
  },
  homepageitems: {
    paddingTop: Padding.p_xl,
    overflow: "hidden",
  },

});

export default HOME1;
