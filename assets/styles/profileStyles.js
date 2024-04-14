import { StyleSheet } from "react-native";
import { Color, Border } from "../../GlobalStyles";

export const ProfileStyles = StyleSheet.create({
  titlePage:{
    width:"100%",
    elevation: 4,
    backgroundColor: Color.green,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  content:{
    paddingHorizontal:20,
    overflow: "hidden",
    width:'100%',
    alignItems: "center",
  },
  fluentnavFilledIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  fluentnaviFilledIcon: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  }
});


export const ProfilePageStyles = StyleSheet.create({
  theDetails:{
    width: "100%",
    backgroundColor: Color.lightGrey,
    marginTop:20,
    paddingHorizontal:20,
    paddingBottom:15,
    paddingTop:10,
    borderBottomColor: Color.primaryPureWhite,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  topDetails:{
    width: "100%",
    flexDirection: "row",
    height: 80,
    alignItems:"center",
  },
  topDetailsLeft:{
    width: "25%",
    justifyContent:"center",
    height: "100%",
  },
  topDetailsImg: {
    width: 50,
    height: 50,
    borderRadius: "20%",
    borderWidth: 2, 
    borderColor: Color.primaryPureWhite,
    borderStyle: "solid", 
  },  
  topDetailsRight:{
    width: "75%",
    height: "100%",
    justifyContent:"center",
    alignItems:"center",
  },

  details: {
    width: "100%",
    overflow: "hidden",
    display: "grid", // Set display to grid
    gridTemplateColumns: "repeat(2, 1fr)", // Create two columns with equal width
    gap: 10, // Adjust the gap between grid items as needed
    marginTop:10
  },
  dataContainer: {
    textAlign: "left",
    color: Color.colorsDefault,
    margin: "0", // Remove margin
  },
  
  name: {
    fontWeight: "900",
    fontSize: 15
  },
  text: {
    width: "100%",
    marginTop:10,
    fontSize: 15
  },
});

export const HeadingStyles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  itemContainer: {
    width: '50%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Color.lightGrey,
    elevation: 3,
    paddingTop:5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  itemText: {
    fontSize: 15,
    color: Color.colorGray_400,
    textAlign:'center',
    paddingHorizontal:4
  },
  headingDetailsLeft:{
    borderRadius:5,
  },
  headingDetailsRight:{
    backgroundColor:Color.colorSilver,
  }
})


export const ProfileLinkTypesStyles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 60,
    backgroundColor: Color.lightGrey,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  icon: {
    marginLeft: 20,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: Color.colorsDefault
  }
});

export const DataOrderTypesStyles = StyleSheet.create({
  div:{
    width: '100%',
    marginTop: 20,
  },
  heading:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText:{
    fontSize:15,
    fontWeight: 'bold'
  },
  headingLink:{
    fontSize:15,
    color:Color.blue
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  itemContainer: {
    width: '24%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Color.lightGrey,
    elevation: 3,
    paddingTop:5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  icon: {
    marginLeft: 20,
    marginRight: 10,
  },
  itemText: {
    fontSize: 15,
    color: Color.colorGray_400,
    textAlign:'center',
    paddingHorizontal:4
  }
})