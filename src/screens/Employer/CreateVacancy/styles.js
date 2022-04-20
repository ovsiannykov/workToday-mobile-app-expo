import { StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 80 : 40,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "ComfortaaBold",
    color: Colors.veryDarkBlue,
    marginBottom: 40,
    width: 328,
  },
  wrapper: {
    paddingLeft: 25,
  },
  input: {
    borderBottomColor: "#D9DFEB",
    borderBottomWidth: 2,
    paddingVertical: 10,
    fontFamily: "ComfortaaLight",
    width: 300,
  },
  label: {
    color: Colors.darkBlue,
    fontFamily: "ComfortaaLight",
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 15,
  },
  select_text: {
    fontSize: 16,
    fontFamily: "ComfortaaRegular",
    marginLeft: 16,
  },
  select_input: {
    backgroundColor: "white",
    width: 294,
    height: 44,
    borderRadius: 14,
    alignItems: "flex-start",
    justifyContent: "center",
    display: "flex",
  },
  select_box: {
    width: 294,
    // minHeight: 132,
    borderRadius: 14,
    backgroundColor: "#F5F5F5",
  },
  select_variant: {
    height: 44,
    width: 294,
    borderBottomColor: "#D9DFEB",
    borderBottomWidth: 0.5,
    borderRadius: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btn_box: {
    width: 299,
    position: "absolute",
    bottom: 130,
  },
  map_btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 102.64,
    position: "absolute",
    top: 35,
    right: -40,
  },
  selectMap_text: {
    color: Colors.primaryBlue,
    fontSize: 12,
    lineHeight: 13.38,
    textAlign: "right",
    marginRight: 6,
    fontFamily: "ComfortaaLight",
  },
  vacancy_info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 21,
  },
  image_box: {
    width: 38,
    height: 38,
    borderRadius: 12,
    marginRight: 9,
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 12,
  },
  company_name: {
    fontSize: 14,
    color: Colors.darkBlue,
    fontFamily: "ComfortaaMedium",
    marginBottom: 7,
  },
  time: {
    fontFamily: "Roboto_Regular",
    color: Colors.darkBlue,
    fontSize: 12,
    marginLeft: 3,
  },
  input_min: {
    borderBottomColor: "#D9DFEB",
    borderBottomWidth: 2,
    paddingVertical: 10,
    fontFamily: "ComfortaaLight",
    width: 111,
  },
  input_middle: {
    borderBottomColor: "#D9DFEB",
    borderBottomWidth: 2,
    paddingVertical: 10,
    fontFamily: "ComfortaaLight",
    width: 161,
  },
});
