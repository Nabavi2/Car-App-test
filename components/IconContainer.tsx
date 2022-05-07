import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { fetchCars, filterByModel } from "../store/action/car";

const { width, height } = Layout.window;

function IconContainer({ text, company, color, isFirst = false }: any) {
  const [isSelected, setIsSelected] = useState(isFirst);
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => {
        isFirst ? dispatch(fetchCars()) : dispatch(filterByModel(company.name));
      }}
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
      {company && !isFirst && (
        <Image
          source={isSelected ? company.white : company.black}
          style={styles.image}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.19,
    height: height * 0.1,
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
  image: {
    width: width * 0.15,
    height: height * 0.085,
  },
});

export default IconContainer;
