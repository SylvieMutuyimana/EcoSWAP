import React from "react";
import { Text, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { ItemPageContainerstyles } from "../../../../../assets/styles/pages/item/ItemPageStyles";

const ItemBuyerPageContainer = ({ onPressablePress, onVectorPress }) => {
  const theHeader = ()=>{
    return(
      <View style={ItemPageContainerstyles.header}>
        <Pressable onPress={onPressablePress}>
          <Text style={ItemPageContainerstyles.text}>{`<--`}</Text>
        </Pressable>
        <Text style={ItemPageContainerstyles.description}>Phone- Iphone 4</Text>
        <Image style={ItemPageContainerstyles.headingChild} contentFit="cover"
          source={require("../../../../../assets/images/icons/menu_dots.png")}
        />
      </View>
    )
  }
  return (
    <View style={ItemPageContainerstyles.itemdetails}>
      <>{theHeader()}</>
      <View style={ItemPageContainerstyles.unextended}>
        <View style={ItemPageContainerstyles.item}>
          <View style={ItemPageContainerstyles.images}>
            <Image style={ItemPageContainerstyles.istockImage}
              contentFit="cover"
              source={require("../../../../../assets/images/samples/cracked_phone.png")}
            />
          </View>
          <View style={ItemPageContainerstyles.descriptionParent}>
            <Text style={ItemPageContainerstyles.description1}>56,000 rwf</Text>
            <Text style={ItemPageContainerstyles.description2}>
              seller: Muhizi Mai
            </Text>
            <View style={ItemPageContainerstyles.frameWrapper}>
              <View style={ItemPageContainerstyles.heading}>
                <Text style={ItemPageContainerstyles.description3}>
                  WishList
                </Text>
                <Image
                  style={ItemPageContainerstyles.vectorIcon}
                  contentFit="cover"
                  source={require("../../../../../assets/images/icons/wish.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={ItemPageContainerstyles.frameParent}>
          <View style={ItemPageContainerstyles.descriptionWrapper}>
            <Text style={ItemPageContainerstyles.description4}>
              Smashed screen iphone 4, front camera broken
            </Text>
          </View>
          <View style={ItemPageContainerstyles.frameGroup}>
            <View style={ItemPageContainerstyles.bidParent}>
              <Text style={ItemPageContainerstyles.bid}>Bid:</Text>
              <View style={ItemPageContainerstyles.email}>
                <Text style={ItemPageContainerstyles.email1}>
                  Amount rwf
                </Text>
              </View>
            </View>
            <View style={ItemPageContainerstyles.loginWrapper}>
              <View style={ItemPageContainerstyles.login}>
                <Text style={ItemPageContainerstyles.purchase}>PURCHASE</Text>
              </View>
            </View>
          </View>
          <View style={ItemPageContainerstyles.frameContainer}>
            <View style={ItemPageContainerstyles.descriptionContainer}>
              <Text style={ItemPageContainerstyles.description5}>{`About `}</Text>
              <Pressable style={ItemPageContainerstyles.vector} onPress={onVectorPress}>
                <Image style={ItemPageContainerstyles.icon}
                  contentFit="cover"
                  source={require("../../../../../assets/images/icons/icon_down.png")}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ItemBuyerPageContainer;
