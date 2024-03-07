import React, { useMemo, memo } from "react";
import {Text,StyleSheet,Pressable,View,} from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";

const TITLEPAGE = memo(({onFluentnavigation16FilledPress}) => {

    return (
      <View style={styles.headerProfile}>
        <Text style={styles.profile}>PROFILE</Text>
        <Pressable style={styles.fluentnavigation16Filled}
          onPress={onFluentnavigation16FilledPress}
        >
          <Image style={styles.icon} contentFit="cover" source={require("../../assets/fluentnavigation16filled1.png")} />
        </Pressable>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  profile: {
    fontSize: FontSize.size_base,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.colorsDefault,
    textAlign: "left",
    width: "100%",
    height: 20,
    color: "#d9d9d9"
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  fluentnavigation16Filled: {
    width: 44,
    height: 33,
    marginLeft: 110,
  },
  headerProfile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
    width:'90%',
    height:'100%'
  },
});

export default TITLEPAGE;
