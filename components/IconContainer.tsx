import { setStatusBarHidden } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import {
  fetchCars,
  filterByColor,
  filterByModel,
  filterByYear,
} from "../store/action/car";

const { width, height } = Layout.window;

function IconContainer({ text, company, color, isFirst = false }: any) {
  const selectedColor = useSelector((state) => state.cars.selectedColor);
  const selectedCompany = useSelector((state) => state.cars.selectedCompany);
  const selectedYear = useSelector((state) => state.cars.selectedYear);
  const [isSelected, setIsSelected] = useState(isFirst);

  const dispatch = useDispatch();

  useEffect(() => {
    if (text && text === selectedYear) {
      setIsSelected(true);
    } else if (
      company &&
      (company.name === selectedCompany || company === selectedCompany)
    ) {
      setIsSelected(true);
    } else if (
      color &&
      (color.name === selectedColor || color === selectedColor)
    ) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedColor, selectedYear, selectedCompany]);

  return (
    <Pressable
      onPress={() => {
        if (text) {
          isFirst ? dispatch(fetchCars()) : dispatch(filterByYear(text));
        } else if (company) {
          isFirst
            ? dispatch(fetchCars())
            : dispatch(filterByModel(company.name));
        } else {
          isFirst ? dispatch(fetchCars()) : dispatch(filterByColor(color.name));
        }
      }}
      style={{
        ...styles.container,
        backgroundColor:
          color && !isFirst
            ? color.hexCode
            : isSelected
            ? isFirst
              ? "#e4e3e3"
              : Colors.primary
            : "white",
        borderWidth: isSelected && color && !isFirst ? 5 : 0,
        borderColor: Colors.primary,
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
          resizeMode="contain"
          source={isSelected ? company.white : company.black}
          style={styles.image}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.195,
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
    width: "80%",
    height: "80%",
  },
});

export default IconContainer;
