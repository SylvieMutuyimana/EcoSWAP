import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native"; // Added Pressable
import { useNavigation } from "@react-navigation/native";
import FullPageTemplate from "../FullPageTemplate";
import { pageStyles } from "../../assets/styles/pageStyles";
import { authStyles } from "../../assets/styles/auth/authStyles";

const Pin = ({setAuthMessage, route}) => {
  const navigation = useNavigation();
  const [thePin, setPin] = useState(null);
  const [pinError, setError] = useState(null);

  const handleSubmit = () => {
    if (!thePin) {
      setError(`Missing Pin`);
    } else {
      setAuthMessage('Account successfully created')
      navigation.navigate("Login");
    }
  };

  const cancelDetails= ()=>{
    navigation.navigate("Login");
  }
  
  return (
    <FullPageTemplate status_bar={true} green_back={true} footer = {false}>
      <View style={[pageStyles.pageContent, pageStyles.auth]}>
        <View style={authStyles.authHeader}>
          <Pressable style={authStyles.back} onPress={()=>navigation.goBack()}>
            <Pressable style={authStyles.pressable} onPress={() => navigation.goBack()}>
              <Text style={authStyles.text}>{`<--`}</Text>
            </Pressable>
          </Pressable>
          <Pressable style={authStyles.cancel} onPress={() => cancelDetails()}>
            <Text style={authStyles.cancel1}>Cancel</Text>
          </Pressable>
        </View>
        <View style={[authStyles.details, authStyles.detailsFlexBox]}>
          <View style={authStyles.detailsFlexBox}>
            <Text style={[authStyles.signIn, authStyles.signInLayout]}>ENTER THE PIN SENT TO YOUR PHONE</Text>
          </View>
          <View style={[authStyles.form, authStyles.formFlexBox]}>
            <View style={authStyles.formfields}>
              {pinError&&(<Text style={authStyles.error}>{pinError}</Text>)}
              <TextInput style={authStyles.input}
                placeholder={field.placeholder}
                onChangeText={(text) => setPin(text)}
              />
            </View>
            <View style={[authStyles.down, authStyles.downFlexBox]}>
              <Pressable
                style={[authStyles.login, authStyles.downFlexBox]}
                onPress={handleSubmit} // Corrected handleSubmit invocation
              >
                <Text style={[authStyles.login1, authStyles.login1Typo]}>
                  SUBMIT
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </FullPageTemplate>
  );
};

export default Pin;
