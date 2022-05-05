import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const { width, height } = Layout.window;

function IconContainer({ children, text, icon, color, isFirst = false }: any) {
  const [isSelected, setIsSelected] = useState(isFirst);
  console.log(isSelected);

  return (
    <Pressable
      onPress={() => setIsSelected(!isSelected)}
      style={{
        ...styles.container,
        backgroundColor:
          color && !isFirst
            ? color
            : isSelected
            ? isFirst
              ? "#e4e3e3"
              : Colors.primary
            : "white",
      }}
    >
      {(text || isFirst) && (
        <Text
          style={{
            ...styles.text,
            color: isSelected
              ? isFirst
                ? "#3f3f3f"
                : "white"
              : Colors.primary,
          }}
        >
          {isFirst ? "All" : text}
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
    borderRadius: width / 25,
    marginHorizontal: 5,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default IconContainer;
