import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const { width, height } = Layout.window;

function IconContainer({ children, text, icon, color }: any) {
  const [isSelected, setIsSelected] = useState(false);
  console.log(color);

  return (
    <Pressable
      onPress={() => setIsSelected(!isSelected)}
      style={{
        ...styles.container,
        backgroundColor: color ? color : isSelected ? Colors.primary : null,
      }}
    >
      {text && (
        <Text style={{ ...styles.text, color: isSelected ? "white" : "black" }}>
          {text}
        </Text>
      )}
      {icon ? icon(isSelected ? "white" : "black") : null}
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
