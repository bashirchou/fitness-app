import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Jersey10",
    fontSize: 28,
    marginBottom: 16,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  button: {
    backgroundColor: "#ffffffc9",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Jersey10",
  },
});
