import React from "react";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import { cartItemStyles } from "../../../../assets/styles/pages/shared/cartItemStyles";

const CartItem = (item) => {
  console.log(item)
  return (
    <View style={cartItemStyles.container}>
      <View style={cartItemStyles.leftSide}>
        <Image style={cartItemStyles.img} resizeMode="cover" source={item.image}/>
      </View>
      <View style={cartItemStyles.rightSide}>
        <Text style={cartItemStyles.description} numberOfLines={1} ellipsizeMode="tail">
          {item.description}
        </Text>
        <Text style={cartItemStyles.price}>{item.price} Rwf</Text>
        <View style={cartItemStyles.options}>
          <Pressable>
            <Text style={cartItemStyles.optionText}>Check out</Text>
          </Pressable>
          <Pressable style={cartItemStyles.wish}>
            <Text style={cartItemStyles.optionText}>Remove</Text>
            <Image style={cartItemStyles.icon} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default CartItem;
