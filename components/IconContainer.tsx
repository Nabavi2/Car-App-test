import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const { width, height } = Layout.window;

function IconContainer({ children, text }: any) {
  const [isSelected, setIsSelected] = useState(false);
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
