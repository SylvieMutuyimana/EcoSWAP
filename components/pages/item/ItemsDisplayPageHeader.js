import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, FontSize} from "../../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export const ItemsDisplayPageHeader = ({ heading, page_type }) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleBack} style={styles.icon}>
        <Ionicons name="arrow-back" size={25}  color="black"/>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{heading}</Text>
      {(page_type === 'itemsDisplay'|| page_type === 'MyOrders' )? (
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="filter" size={25} color="black" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="ellipsis-vertical" size={25} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: Color.green,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
    height: 50,
  },
  icon: {
    fontSize: 20,
    color:"black"
  },
  headerTitle: {
    fontSize: FontSize.headings.h2,
    fontWeight: "bold",
    width: "85%",
    textAlign: "center",
  }
});
