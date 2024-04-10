import React from "react";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { ProfilePageStyles } from "../../assets/styles/profileStyles";
import ProfileTemplate from "../../components/pages/shared/ProfileTemplate";

const BuyerProfile = () => {
  const userType='buyer'
  const user = {
    email: "WilliamAlice@gmail.com",
    firstName: "Alice",lastName: "William",
    phoneNumber: "0785868485",
    username: "Alice342",
  }
  return (
    <ProfileTemplate userType={userType}>
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
          <Text style={ProfilePageStyles.name}>Account Type: </Text>
          <Text style={ProfilePageStyles.text}>{userType}</Text>
        </View>
        <View style={ProfilePageStyles.dataContainer}>
          <Text style={ProfilePageStyles.name}>Username:</Text>
          <Text style={ProfilePageStyles.text}>{user.username}</Text>
        </View>
        <View style={ProfilePageStyles.dataContainer}>
          <Text style={ProfilePageStyles.name}>Phone Number:</Text>
          <Text style={ProfilePageStyles.text}>{user.phoneNumber}</Text>
        </View>
      </View>
    </ProfileTemplate>
  );
};


export default BuyerProfile;