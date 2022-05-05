import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const { width, height } = Layout.window;

function IconContainer({ children, text }: any) {
  const [isSelected, setIsSelected] = useState(false);

  const data = [
    {
      id: 1,
      companyName: "Tesla Modal X",
      year: "2018",
      price: 200,
      image: require("../assets/images/car1.jpg"),
    },
    {
      id: 2,
      companyName: "BMW X",
      year: "2018",
      price: 260,
      image: require("../assets/images/car2.jpg"),
    },
    {
      id: 3,
      companyName: "Tesla Modal X",
      year: "2018",
      price: 200,
      image: require("../assets/images/car3.jpg"),
    },
    {
      id: 4,
      companyName: "Tesla Modal X",
      year: "2018",
      price: 200,
      image: require("../assets/images/car1.jpg"),
    },
    {
      id: 5,
      companyName: "Tesla Modal X",
      year: "2018",
      price: 200,
      image: require("../assets/images/car1.jpg"),
    },
    {
      id: 6,
      companyName: "Tesla Modal X",
      year: "2018",
      price: 200,
      image: require("../assets/images/car1.jpg"),
    },
  ];

  return (
    <Pressable
      onPress={() => setIsSelected(!isSelected)}
      style={{
        ...styles.container,
        backgroundColor: isSelected ? Colors.primary : null,
      }}
    >
      {children}
      {text && (
        <Text style={{ ...styles.text, color: isSelected ? "white" : "black" }}>
          {text}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.17,
    height: height * 0.09,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: width / 25,
    marginHorizontal: 5,
    elevation: 2,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default IconContainer;
