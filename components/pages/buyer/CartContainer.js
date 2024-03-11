import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../../../GlobalStyles";

const CartContainer = memo(() => {
  return (
    <View style={styles.items}>
      <View style={[styles.myCartWrapper, styles.item4Layout]}>
        <Text style={styles.myCart}>{`My Cart-->`}</Text>
      </View>
      <View style={[styles.item4, styles.item4Layout]}>
        <Image style={styles.img} contentFit="cover"
          source={require("../../../assets/images/samples/spoil-blender2.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.ionaBlenderWithA10000}>
            <Text style={styles.ionaBlenderWith}>{`Iona blender with a ...`}</Text>
            <Text style={styles.rwf}>{`10,000 rwf`}</Text>
            <Text style={styles.ionaBlenderWith}> </Text>
          </Text>
          <Text style={[styles.buy, styles.buyTypo]}>Buy Bid Remove(x)</Text>
        </Text>
      </View>
      <View style={[styles.item4, styles.item4Layout]}>
        <Image
          style={styles.img}
          contentFit="cover"
          source={require("../../../assets/images/samples/spoil-blender2.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.ionaBlenderWithA10000}>
            <Text style={styles.ionaBlenderWith}>{`Iona blender with a ...`}</Text>
            <Text style={styles.rwf}>{`10,000 rwf`}</Text>
            <Text style={styles.ionaBlenderWith}> </Text>
          </Text>
          <Text style={[styles.buy, styles.buyTypo]}>Buy Bid Remove(x)</Text>
        </Text>
      </View>
      <View style={[styles.item4, styles.item4Layout]}>
        <Image
          style={styles.img}
          contentFit="cover"
          source={require("../../../assets/images/samples/spoil-blender2.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.ionaBlenderWithA10000}>
            <Text style={styles.ionaBlenderWith}>{`Iona blender with a ...`}</Text>
            <Text style={styles.rwf}>{`10,000 rwf`}</Text>
            <Text style={styles.ionaBlenderWith}> </Text>
          </Text>
          <Text style={[styles.buy, styles.buyTypo]}>Buy Bid Remove(x)</Text>
        </Text>
      </View>
      <View style={[styles.item4, styles.item4Layout]}>
        <Image
          style={styles.img}
          contentFit="cover"
          source={require("../../../assets/images/samples/spoil-blender2.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.ionaBlenderWithA10000}>
            <Text style={styles.ionaBlenderWith}>{`Iona blender with a ...`}</Text>
            <Text style={styles.rwf}>{`30,0000 rwf`}</Text>
          </Text>
          <Text style={[styles.buy3, styles.buyTypo]}>Buy Bid Remove(x)</Text>
        </Text>
      </View>
      <View style={[styles.item4, styles.item4Layout]}>
        <Image
          style={styles.img}
          contentFit="cover"
          source={require("../../../assets/images/samples/spoil-blender2.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.ionaBlenderWithA10000}>
            <Text style={styles.ionaBlenderWith}>{`Iona blender with a ...`}</Text>
            <Text style={styles.rwf}>{`30,0000 rwf`}</Text>
          </Text>
          <Text style={[styles.buy3, styles.buyTypo]}>Buy Bid Remove(x)</Text>
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  item4Layout: {
    width: 325,
    overflow: "hidden",
  },
  buyTypo: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    fontSize: FontSize.size_5xs,
  },
  myCart: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 124,
    height: 13,
    textAlign: "left",
    color: Color.colorsDefault,
  },
  myCartWrapper: {
    flexDirection: "row",
  },
  img: {
    top: 7,
    left: 15,
    width: 80,
    height: 51,
    position: "absolute",
  },
  ionaBlenderWith: {
    fontFamily: FontFamily.interRegular,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  ionaBlenderWithA10000: {
    fontSize: FontSize.size_4xs,
    color: Color.colorsDefault,
  },
  buy: {
    color: Color.colorMediumblue_200,
  },
  description: {
    height: "78.46%",
    width: "58.46%",
    top: "10.77%",
    left: "35.38%",
    position: "absolute",
    textAlign: "left",
  },
  item4: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.primaryPureWhite,
    height: 65,
    marginTop: 5,
  },
  buy3: {
    color: Color.colorMediumblue_100,
  },
  items: {
    backgroundColor: Color.colorMediumblue_300,
    alignItems: "center",
    paddingTop: Padding.p_xl,
    overflow: "hidden",
  },
});

export default CartContainer;
