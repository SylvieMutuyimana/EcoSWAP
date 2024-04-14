import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { ProfilePageStyles, HeadingStyles, ProfileLinkTypesStyles, DataOrderTypesStyles} from "../../assets/styles/profileStyles";
import ProfileTemplate from "../../components/pages/shared/ProfileTemplate";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";

const SellerProfile = () => {
  const navigation = useNavigation()
  const userType = 'seller'
  const user = {
    email: "WilliamAlice@gmail.com",
    firstName: "Alice",
    lastName: "William",
    phoneNumber: "0785868485",
    username: "Alice342",
  }
  const orderTypes = [
    { name: 'My Item Bids', type: 'ItemBids', iconName: 'cash' }, 
    { name: 'Accepted Offers', type: 'AcceptedOffers', iconName: 'checkbox-outline' },
    { name: 'Pending Payment', type: 'PendingPayment', iconName: 'time'},
    { name: 'In Transit (Shipping)', type: 'InTransit', iconName: 'bus'}
  ];
  
  const linkTypes = [
    { name: 'My Items', link: 'MyItems', iconName: "cart" }, 
    { name: 'Orders', link: 'Orders', iconName: "book" }, 
    { name: 'Settings', link: 'Settings', iconName: 'settings'},
    { name: 'Edit Account', link: 'EditAccount', iconName: 'create'}
  ];

  const navigateToMyItems =(orderType)=>{
    navigation.navigate('MyItems', {orderType: orderType})
  }
  const ProfileorderTypesContainer = () => {
    return (
      <View style={DataOrderTypesStyles.container}>
        {
          orderTypes.map((orderType, index)=>(
            <Pressable style={DataOrderTypesStyles.itemContainer} key={index} onPress={()=>navigateToMyItems(orderType.type)}>
              <Ionicons name={orderType.iconName} size={24} color= 'black' style={DataOrderTypesStyles.icon} />
              <Text style={DataOrderTypesStyles.itemText}>{orderType.name}</Text>
            </Pressable>
          ))
        }
      </View>
    )
  }

  const chooseLink =(name)=>{
    if(name == 'My Items'){
      navigation.navigate('MyItems')
    }
  }
  const ProfileLinkTypesContainer = () => {
    return (
      <View style={ProfileLinkTypesStyles.container}>
        {
          linkTypes.map((linkType, index)=>(
            <Pressable style={ProfileLinkTypesStyles.itemContainer} key={index} >
              <TouchableOpacity onPress={()=> chooseLink(linkType.name)} style={ProfileLinkTypesStyles.icon}>
                <Ionicons name={linkType.iconName} size={24} color= 'black'/>
              </TouchableOpacity>
              <Text style={ProfileLinkTypesStyles.itemText}>{linkType.name}</Text>
            </Pressable>
          ))
        }
      </View>
    )
  }

  return (
    <ProfileTemplate userType={userType}>
      <View style={HeadingStyles.container}>
        <View style={[HeadingStyles.itemContainer, HeadingStyles.headingDetailsLeft]}>
          <Text>English</Text>
        </View>
        <View style={[HeadingStyles.itemContainer, HeadingStyles.headingDetailsRight]}>
          <Text>Kinyarwanda</Text>
        </View>
      </View>
      <View style={ProfilePageStyles.theDetails}>
        <View style={ProfilePageStyles.topDetails}>
          <View style={ProfilePageStyles.topDetailsLeft}>
            <Image style={ProfilePageStyles.topDetailsImg} contentFit="cover"
              source={require("../../assets/images/samples/user_image.png")}
            />
          </View>
          <View style={ProfilePageStyles.topDetailsRight}>
            <Text style={ProfilePageStyles.text}>{user.email}</Text>
            <Text style={ProfilePageStyles.text}>{user.firstName} {user.lastName}</Text>
          </View>
        </View>
        <View style={ProfilePageStyles.details}>
          <View style={ProfilePageStyles.dataContainer}>
            <Text style={ProfilePageStyles.name}>Phone Number:</Text>
            <Text style={ProfilePageStyles.text}>{user.phoneNumber}</Text>
          </View>
          <View style={ProfilePageStyles.dataContainer}>
            <Text style={ProfilePageStyles.name}>Username:</Text>
            <Text style={ProfilePageStyles.text}>{user.username}</Text>
          </View>
          <View style={ProfilePageStyles.dataContainer}>
            <Text style={ProfilePageStyles.name}>Account Type: </Text>
            <Text style={ProfilePageStyles.text}>{userType}</Text>
          </View>
        </View>
      </View>
      <View style={DataOrderTypesStyles.div}>
        <View style={DataOrderTypesStyles.heading}>
          <Text style={DataOrderTypesStyles.headingText}>Orders</Text>
          <Pressable onPress={()=>navigation.navigate('MyItems')}>
            <Text style={DataOrderTypesStyles.headingLink}>See All</Text>
          </Pressable>
        </View>
        <ProfileorderTypesContainer />
      </View>
      <View style={ProfileLinkTypesStyles.container}>
        <ProfileLinkTypesContainer />
      </View>
    </ProfileTemplate>
  );
};

export default SellerProfile;
