import React from "react";
import { ScrollView, Image, Text, Pressable } from "react-native";
import { CategoryNavStyles } from "../../../../assets/styles/pages/shared/CategoryNavStyles";
import { sampleCategories } from "../../../data/sampleData";

const CategoryNav = ({ changeCat, selectedCat}) => {
  const theCategories_ = sampleCategories
  return (
    <ScrollView horizontal contentContainerStyle={[CategoryNavStyles.catContainer, CategoryNavStyles.catCat]} showsHorizontalScrollIndicator={false}>
      {theCategories_?.map((cat, index) => (
        <Pressable style={[CategoryNavStyles.catCatItem, cat.name === selectedCat? CategoryNavStyles.chosenItem:null]} onPress={() => changeCat(cat.name)} key={index}>
          <Image style={CategoryNavStyles.circle} contentFit="cover" source={require("../../../../assets/images/samples/home_items.png")} />
          <Text style={[CategoryNavStyles.text, cat.name === selectedCat? CategoryNavStyles.chosentext:null]}>{cat.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default CategoryNav;
