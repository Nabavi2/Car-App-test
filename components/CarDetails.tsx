import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

export default function CartDetails(
  image: any,
  companyName: string,
  year: string,
  rentalDaily: string
) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});