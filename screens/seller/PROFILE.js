import React from "react";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { ProfilePageStyles } from "../../assets/styles/profileStyles";
import ProfileTemplate from "../../components/pages/shared/ProfileTemplate";

const SellerProfile = () => {
  const userType='seller'
  return (
    <ProfileTemplate userType={userType}>
      <View style={[ProfilePageStyles.image, ProfilePageStyles.imageSpaceBlock]}>
        <Image style={ProfilePageStyles.imageChild} contentFit="cover"
          source={require("../../assets/images/samples/user_image.png")}
        />
      </View>
      <View style={[ProfilePageStyles.details, ProfilePageStyles.imageSpaceBlock]}>
        <Text style={ProfilePageStyles.dataContainer}>
          <Text style={ProfilePageStyles.name}>Name: </Text>
          <Text style={ProfilePageStyles.text}>Muneza Lionel</Text>
        </Text>
        <Text style={ProfilePageStyles.dataContainer}>
          <Text style={ProfilePageStyles.name}>Account type: </Text>
          <Text style={ProfilePageStyles.text}>{userType}</Text>
        </Text>
        <Text style={ProfilePageStyles.dataContainer}>
          <Text style={ProfilePageStyles.name}>Username:</Text>
          <Text style={ProfilePageStyles.text}>l_muneza</Text>
        </Text>
      </View>
    </ProfileTemplate>
  );
};


export default SellerProfile;