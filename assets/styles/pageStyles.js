import { StyleSheet } from "react-native";
import { Color, Padding } from "../../GlobalStyles";

export const pageStyles = StyleSheet.create({
    pageContent: {
        alignItems: "center",
        //backgroundColor: 'blue'
    },
    auth:{
        width:"100%", height:"100%" ,
    },
    welcome:{
        width:"100%", height:"100%", marginTop:100,
        height: 500,
    },
    fullPage: {
        flex: 1,
        width: "100%",
        width:"100%", height:"100%" ,
        alignItems: "center",
        overflow: "hidden",
    },
});

