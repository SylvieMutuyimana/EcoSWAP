import { StyleSheet } from "react-native";

export const contStyles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: 'indigo',
  },
});

export const returnListStyles = StyleSheet.create({
  theItem: {
    height:80,
    flexDirection: "row",
    width: '93%',
    alignItems: "center",
    marginTop: 10,
    borderBottomColor: 'rgba(2, 1, 2, 0.5)', // Adjust alpha value as needed
    borderBottomWidth: 1,
  },
  firstItem: {
    marginTop: 0
  },
  leftside: {
    height:'90%',
    width:'30%'
  },
  img: {
    height:'100%',
    width:'100%'
  },
  rightside: {
    height:'90%',
    width:'60%',
    backgroundColor:'purple'
  },
  description: {
    width: "100%",
    height: 50,
    backgroundColor: 'orange',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    numberOfLines: 2,
  },
});

export const suggestionListStyles = StyleSheet.create({

});
