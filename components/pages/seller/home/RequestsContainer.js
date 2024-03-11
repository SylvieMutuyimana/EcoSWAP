import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Color, FontSize, Padding, Border, FontFamily } from "../../../../GlobalStyles";

const RequestsContainer = ({onrequestPress}) => {
  return (
    <View style={[styles.theItems, styles.theItemsFlexBox]}>
      {[...Array(4)].map((_, index)=>(
        <React.Fragment key={index}>
          <Pressable style={styles.itemFlexBox} onPress={onrequestPress}>
            <Image style={styles.img} contentFit="cover"
              source={require("../../../../assets/images/samples/itemHomeRequest.png")}
            />
            <View style={styles.descriptionParent}>
              <Text style={[styles.description, styles.rwfTypo]}>
                `Cracked Screen Dell  ... `
              </Text>
              <View style={[styles.rwfParent, styles.theItemsFlexBox]}>
                <Text style={[styles.rwf, styles.rwfTypo]}>91,000 rwf</Text>
                <Image style={styles.vectorIcon} contentFit="cover"
                  source={require("../../../../assets/images/icons/wish.png")}
                />
              </View>
            </View>
          </Pressable>
          <Pressable style={[styles.item2, styles.itemFlexBox]} onPress={onrequestPress}>
            <Image style={styles.img} contentFit="cover"
              source={require("../../../../assets/images/samples/itemHomeRequest.png")}
            />
            <View style={styles.descriptionParent}>
              <Text style={[styles.description, styles.rwfTypo]}>
                `Cracked Screen Dell  ... `
              </Text>
              <View style={[styles.rwfParent, styles.theItemsFlexBox]}>
                <Text style={[styles.rwf, styles.rwfTypo]}>91,000 rwf</Text>
                <Image style={styles.vectorIcon} contentFit="cover"
                  source={require("../../../../assets/images/icons/wish.png")}
                />
              </View>
            </View>
          </Pressable>
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  theItemsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  rwfTypo: {
    textAlign: "left",
    color: Color.colorsDefault,
    fontSize: FontSize.size_5xs,
  },
  itemFlexBox: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: Color.primaryPureWhite,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  img: {
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
  rwfParent: {
    marginTop: 4,
  },
  descriptionParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    marginLeft: 10,
    overflow: "hidden",
  },
  item2: {
    marginLeft: 24,
  },
  theItems: {
    width: 358,
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_base_5,
    paddingVertical: 0,
    marginTop: 5,
  },
});

export default RequestsContainer;
