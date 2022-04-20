import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    width: 347,
    minHeight: 241,
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 0.8,
    elevation: 1,
    paddingHorizontal: 10,
    paddingTop: 17,
  },
  flexBox: {
    display: "flex",
    flexDirection: "row",
  },
  profile_img: {
    width: 75,
    height: 60,
    borderRadius: 16,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    color: Colors.veryDarkBlue,
    fontFamily: "ComfortaaLight",
  },
  date: {
    fontFamily: "ComfortaaMedium",
    fontSize: 12,
    color: Colors.darkBlue,
  },
  statusBox: {
    width: 325,
    height: 103,
    borderRadius: 20,
    backgroundColor: "#E4ECFF",
    marginTop: 45,
    paddingLeft: 26,
  },
  title: {
    fontFamily: "ComfortaaLight",
    marginTop: 30,
    fontSize: 12,
  },
  progressBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: -10,
    marginRight: 9,
    alignItems: "center",
  },
  perzent_container: {
    width: 36,
    height: 13,
    borderRadius: 6.5,
    backgroundColor: "#C4D1E6",
    marginTop: 27,
    marginLeft: 6,
  },
  perzent: {
    width: "72%",
    height: 13,
    borderRadius: 6.5,
    backgroundColor: Colors.primaryBlue,
  },
  time: {
    marginTop: 28,
    marginLeft: 12,
    fontSize: 12,
    fontFamily: "ComfortaaLight",
    color: "#716565",
  },
  btn_box: {
    position: "absolute",
    top: -20,
    justifyContent: "center",
  },
  status: {
    position: "absolute",
    right: -11,
    top: 52,
    width: 80,
    textAlign: "center",
    fontFamily: "ComfortaaLight",
    marginTop: 30,
    fontSize: 12,
  },
  support_btn: {
    width: 312,
    height: 26,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: Colors.primaryBlue,
    marginTop: 20,
  },
  support_btn_text: {
    color: Colors.primaryBlue,
    fontFamily: "ComfortaaLight",
    fontSize: 12,
  },
});
