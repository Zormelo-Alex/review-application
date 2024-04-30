import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  titleText: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  form: {
    minHeight: "70%",
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    marginVertical: 10,
    padding: 5,
    paddingVertical: 10,
    borderRadius: 5,
    color: "black",
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "coral",
    borderRadius: 5,
    alignSelf: "center",
    paddingHorizontal: 25,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
    // objectFit: "cover",
  },
});
