import React from "react";
import { ScrollView, Image, Text, Pressable, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { CategoryNavStyles } from "../../../../assets/styles/pages/shared/CategoryNavStyles";
import { Color } from "../../../../GlobalStyles";
import { sampleCategories } from "../../../data/sampleData";

const HomeCategoryNav = ({page_name}) => {
  const theCategories_ = sampleCategories
  const navigation = useNavigation()
  const setCat = (name) =>{
    navigation.navigate("Categories", {chosenCat: name})
  }
  return (
    <ScrollView horizontal contentContainerStyle={[CategoryNavStyles.catContainer, CategoryNavStyles.homeCat, LoadingStyles.homeCat]} showsHorizontalScrollIndicator={false}>
      {
        page_name==='Loading'?(
          [[...Array(8)].map((_,index)=>(
            <View style={CategoryNavStyles.catItem} key={index}>
              <View style={[CategoryNavStyles.circle, LoadingStyles.circle]}/>
              <View style={[CategoryNavStyles.text, LoadingStyles.text]}/>
            </View>        
          ))]
        ):theCategories_?.map((cat,index)=>(
          <Pressable style={CategoryNavStyles.catItem} onPress={() => setCat(cat.name)} key={index}>
            <Image style={CategoryNavStyles.circle} contentFit="cover" 
              source={require("../../../../assets/images/samples/home_items.png")}
            />
            <Text style={CategoryNavStyles.text}>
              {cat.name}
            </Text>
          </Pressable>        
        ))
      }
    </ScrollView>
  );
}

const LoadingStyles = StyleSheet.create({
  circle: {
    backgroundColor: Color.silver
  },
  text: {
    backgroundColor:Color.lightGrey,
    height:8,
    width: 50,
    marginTop: 5
  },
});



export default HomeCategoryNav;
