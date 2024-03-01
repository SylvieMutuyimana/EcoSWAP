import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ItemDetailsContainer from "../../components/ItemDetailsContainer";
import SimilarItemsContainer from "../../components/SimilarItemsContainer";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";

const Item1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.item1}>
      <View style={[styles.thepage, styles.thepageLayout]}>
        <View style={[styles.pagecontent, styles.thepageLayout]}>
          <View style={styles.theitem}>
            <ItemDetailsContainer
              onPressablePress={() => navigation.goBack()}
              onVectorPress={() => navigation.navigate("Item")}
            />
            <View style={styles.moredetails}>
              <View style={styles.seller}>
                <Text
                  style={[styles.sellerMuhiziMai, styles.sellerMuhiziMaiTypo]}
                >
                  Seller: Muhizi Mai
                </Text>
              </View>
              <View style={[styles.location, styles.descrSpaceBlock]}>
                <Text
                  style={[styles.sellerMuhiziMai, styles.sellerMuhiziMaiTypo]}
                >
                  Location: Kigali, Gasabo, Remera, Rukiri 2
                </Text>
              </View>
              <View style={styles.descrSpaceBlock}>
                <Text
                  style={[
                    styles.locationDescription,
                    styles.sellerMuhiziMaiTypo,
                  ]}
                >{`Location Description: `}</Text>
                <Text
                  style={[styles.ruyenziBuildingKu, styles.sellerMuhiziMaiTypo]}
                >
                  Ruyenzi building ku gisimenti. the third floor, room 203.
                </Text>
              </View>
            </View>
          </View>
          <SimilarItemsContainer />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thepageLayout: {
    width: 360,
    overflow: "hidden",
  },
  sellerMuhiziMaiTypo: {
    textAlign: "left",
    color: Color.colorsDefault,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: FontSize.size_3xs,
  },
  descrSpaceBlock: {
    marginTop: 10,
    flexDirection: "row",
    width: 304,
    overflow: "hidden",
  },
  sellerMuhiziMai: {
    width: 227,
    height: 13,
  },
  seller: {
    height: 11,
    flexDirection: "row",
    width: 304,
    alignItems: "center",
    overflow: "hidden",
  },
  location: {
    alignItems: "center",
  },
  locationDescription: {
    width: 105,
    height: 16,
  },
  ruyenziBuildingKu: {
    width: 195,
    height: 25,
    marginLeft: 5,
  },
  moredetails: {
    width: 332,
    justifyContent: "center",
    marginTop: 15,
    overflow: "hidden",
  },
  theitem: {
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    overflow: "hidden",
  },
  pagecontent: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 676,
    alignItems: "center",
  },
  thepage: {
    height: 696,
  },
  item1: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Item1;
