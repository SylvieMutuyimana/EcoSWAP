import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";
import { authStyles } from "../../assets/styles/auth/authStyles";

const SplashScreen = () => {
  const [dotIndex, setDotIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDotIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 500); // Adjust the duration of each dot's appearance

    return () => clearInterval(timer);
  }, []);

  const renderDots = () => {
    const dots = [];

    for (let i = 0; i < 3; i++) {
      dots.push(
        <Text key={i} style={[styles.dot, i === dotIndex && styles.activeDot]}>
          .
        </Text>
      );
    }

    return dots;
  };

  return (
    <FullPageTemplate status_bar={true} green_back={true} footer={false}>
      <View style={[pageStyles.pageContent, pageStyles.auth]}>
        <View style={authStyles.authHeader}></View>
        <View style={[authStyles.details, authStyles.detailsFlexBox]}>
          <View style={authStyles.detailsFlexBox}>
            <Text style={[authStyles.ecoSwap, authStyles.signInLayout]}>
              ECO-SWAP
            </Text>
          </View>
          <View style={[authStyles.form, authStyles.formFlexBox]}>
            <View style={authStyles.formfields}>
              <Text style={authStyles.message}>Loading</Text>
              <Text style={authStyles.message}>{renderDots()}</Text>
            </View>
          </View>
        </View>
      </View>
    </FullPageTemplate>
  );
};

const styles = StyleSheet.create({
  dot: {
    fontSize: 24,
    color: "#000",
    marginRight: 5,
  },
  activeDot: {
    color: "#00f", // Change color of active dot
  },
});

export default SplashScreen;
