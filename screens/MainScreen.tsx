import { AntDesign, Feather, Fontisto } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { View, Text } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/Cart";
import IconContainer from "../components/IconContainer";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { RootTabScreenProps } from "../types";
import * as carsActions from "../store/action/car";

const { width, height } = Layout.window;
export default function MainScreen() {
  const cars: [] = useSelector((state) => state.cars.availableCars);

  const dispatch = useDispatch();
  const carsHandler = async () => {
    try {
      await dispatch(carsActions.fetchCars());
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    carsHandler();
  }, []);
  const [selectedOption, setSelectedOption] = useState("By company");
  const brands = [
    <IconContainer
      icon={(color) => {
        console.log(color);

        return <Fontisto name="tesla" size={42} color={color} />;
      }}
      isSelected
    />,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const colors = [
    "yellow",
    "lightgrey",
    "lightgreen",
    "black",
    "purple",
    "dodgerblue",
    "tomato",
    "lightblue",
    "orange",
  ];
  const data = [
    {
      id: 1,
      companyName: "Tesla Modal X",
      year: "2018",
      price: 200,
      image: require("../assets/images/car1.jpeg"),
    },
    {
      id: 2,
      companyName: "BMW X",
      year: "2018",
      price: 260,
      image: require("../assets/images/car2.png"),
    },
    {
      id: 3,
      companyName: "Tesla Modal X",
      year: "2018",
      price: 200,
      image: require("../assets/images/car2.png"),
    },
    {
      id: 4,
      companyName: "Tesla Modal X",
      year: "2018",
      price: 200,
      image: require("../assets/images/car1.jpeg"),
    },
    {
      id: 5,
      companyName: "Tesla Modal X",
      year: "2018",
      price: 200,
      image: require("../assets/images/car2.png"),
    },
    {
      id: 6,
      companyName: "Tesla Modal X",
      year: "2018",
      price: 200,
      image: require("../assets/images/car1.jpeg"),
    },
  ];
  console.log(selectedOption);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 49 }}>
        <Text style={[styles.title, { fontWeight: "700" }]}> Choose</Text>
        <Text style={styles.title}> a Car</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ height: 120, flexGrow: 0 }}
        horizontal={true}
        data={selectedOption === "By company" ? brands : colors}
        keyExtractor={(it, ind) => ind}
        renderItem={({ item, index }) =>
          selectedOption === "By company" ? (
            index === 0 ? (
              item
            ) : (
              <IconContainer text={item} />
            )
          ) : (
            <IconContainer color={item} />
          )
        }
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Available Cars</Text>
        <Menu onSelect={(value) => setSelectedOption(value)}>
          <MenuTrigger>
            <AntDesign name="filter" size={34} color="grey" />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionText: {
                fontSize: 13,
                color: Colors.primary,
              },
              optionsContainer: {
                borderRadius: width / 65,
                padding: "5%",
              },
            }}
          >
            <MenuOption text="By company" value={"By company"} />
            <MenuOption text="By color" value={"By color"} />
            <MenuOption text="By year" value={"By year"} />
          </MenuOptions>
        </Menu>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => {
          return (
            <Cart
              image={item.image}
              year={item.year}
              rentalDaily={item.price}
              companyName={item.companyName}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "2%",
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 20,
  },

  filterIcon: {
    marginRight: 20,
    marginBottom: 20,
  },
});
