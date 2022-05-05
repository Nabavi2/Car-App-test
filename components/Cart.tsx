import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../constants/Colors";

import Layout from "../constants/Layout";

const size = Layout.window;
const Cart = ({ image, companyName, year, rentalDaily }) => {
  return (
    <View style={styles.cart}>
      <View style={styles.row}>
        <Image source={image} style={styles.image} />
        <View style={styles.column}>
          <Text style={styles.title}>{companyName}</Text>
          <Text
            style={[styles.title, { color: "#a7aab0", alignSelf: "flex-end" }]}
          >
            {year}
          </Text>
        </View>
      </View>
      <View style={styles.rentButtonRow}>
        <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            ${rentalDaily}
          </Text>
          <Text style={{ color: "#a7aab0", fontSize: 18 }}>/day</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Book now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: Colors.light.white,
    elevation: 1,
    height: size.height * 0.2,
    width: "88%",
    alignSelf: "center",
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  image: {
    height: size.height * 0.1,
    width: size.width * 0.3,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    justifyContent: "space-between",
    height: size.height * 0.1,
    padding: 10,
  },
  rentButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "50%",
    height: size.height * 0.08,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.light.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: Colors.light.white,
    fontSize: 19,
    fontWeight: "bold",
  },
});
export default Cart;
