import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Padding, fontWeight } from "../../GlobalStyles";

export const pageStyles = StyleSheet.create({
    pageContent: {
        alignItems: "center",
        fontWeight: fontWeight.fontDefault,
        fontSize: FontSize.size_default,
        fontFamily: FontFamily.font
    },
    auth:{
        width:"100%", height:"100%" ,
    },
    welcome:{
        width:"100%",
        marginTop:100,
        height: 500,
    },
    fullPage: {
        flex: 1,
        width: "100%",height:"100%" ,
        alignItems: "center",
        overflow: "hidden",
    },
});

export const homeStyles = StyleSheet.create({
    container: {
        paddingHorizontal:20,
        overflow: "hidden",
        width:'100%'
    },
    seller:{
        paddingTop: Padding.p_xl,
    }
});

export const otherPagesStyles = StyleSheet.create({
    container: {
        paddingHorizontal:20,
        overflow: "hidden",
        width:'100%'
    },
    top:{
        paddingTop: Padding.p_xl,
    }
});


export const cartStyles = StyleSheet.create({
    header:{
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.footerBackground,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        marginBottom:10,
    },
    headerText:{
        color:Color.green,
        fontWeight:fontWeight.headings.h2,
        fontSize:FontSize.headings.h2
    },
    footer:{
        height:'100%',
        width:'100%',
        backgroundColor: Color.grey,
        flexDirection: "row",
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        alignItems:"center",
        justifyContent:"center",
        border: 1,
        borderColor: Color.green,
        borderStyle: 'solid',
    },
    footerLeft:{
        width:'60%',
        flexDirection: "row",
        paddingLeft:15
    },
    footerRight:{
        width:'40%',
        backgroundColor: Color.green,
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
    },
    footerbuttonText:{
        color: "white",
        fontWeight:"bold",
        fontSize:15, 
    },
    footerText:{
        fontWeight:fontWeight.headings.h2,
        fontSize:FontSize.headings.h2,
        textAlign: 'left',
    },
    footerTextPrice:{
        color:Color.green,
        fontWeight:fontWeight.headings.h2,
        fontSize:FontSize.headings.h2,
        textAlign: 'left',
        paddingLeft:5
    },
    container: {
        overflow: "hidden",
        width:'100%',
        alignItems: "center",
        height: 'calc(100% - 40px)',
        position:"relative",
    },
});
