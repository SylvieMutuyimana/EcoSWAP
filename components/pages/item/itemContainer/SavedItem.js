import React from "react";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import { savedItemStyles } from "../../../../assets/styles/pages/shared/savedItemStyles";

const SavedItem = (item) => {
  return (
    <View style={savedItemStyles.container}>
      <View style={savedItemStyles.leftSide}>
        <Image style={savedItemStyles.img} resizeMode="cover" source={item.image}/>
      </View>
      <View style={savedItemStyles.rightSide}>
        <Text style={savedItemStyles.description} numberOfLines={1} ellipsizeMode="tail">
          {item.description}
        </Text>
        <Text style={savedItemStyles.price}>{item.price} Rwf</Text>
        <View style={savedItemStyles.options}>
          <Pressable>
            <Text style={savedItemStyles.optionText}>Check out</Text>
          </Pressable>
          <Pressable style={savedItemStyles.wish}>
            <Text style={savedItemStyles.optionText}>Remove</Text>
            <Image style={savedItemStyles.icon} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default SavedItem;
