import React  from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

const getTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};

const StatusBar1 = () => {
    return (
      <View style={[styles.statusBar, styles.timeFlexBox]}>
        <View style={styles.timeFlexBox}>
          <Text style={styles.time1}>{getTime()}</Text>
        </View>
        <View style={[styles.theiconbar, styles.timeFlexBox]}>
          <Image
            style={styles.combinedShapeIcon}
            contentFit="cover"
            source={require("../../assets/images/other/network.png")}
          />
          <Image style={styles.wiFiIcon} contentFit="cover" source={require("../../assets/images/other/wifi.png")} />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../../assets/images/other/battery.png")}
          />
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  time1: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.blueShadow,
    textAlign: "center",
    width: 54,
  },
  combinedShapeIcon: {
    width: 17,
    height: 11,
  },
  wiFiIcon: {
    width: 15,
    marginLeft: 5,
    height: 11,
  },
  batteryIcon: {
    width: 25,
    height: 12,
    marginLeft: 5,
  },
  theiconbar: {
    marginLeft: 220,
  },
  statusBar: {
    backgroundColor: Color.primaryPureWhite,
    borderStyle: "solid",
    borderColor: Color.grey,
    borderBottomWidth: 1,
    width: "100%",
    height: 40,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_xs,
  },
});

export default StatusBar1;
