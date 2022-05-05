import { AntDesign, Feather, Fontisto } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { View, Text } from "react-native";
import { Input } from "react-native-elements";
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
  const years = [
    "temp",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
  ];
  const brands = ["temp", "A", "B", "C", "D", "E", "F"];
  const colors = [
    "temp",
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
      <View style={{ flexDirection: "row", marginVertical: "10%" }}>
        <Text style={[styles.title, { fontWeight: "700" }]}> Choose</Text>
        <Text style={styles.title}> a Car</Text>
      </View>
      <Text style={{ ...styles.title, paddingLeft: "3%", marginBottom: "1%" }}>
        {selectedOption === "By company"
          ? "Brands"
          : selectedOption === "By color"
          ? "Available Colors"
          : "Year"}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{
          height: 130,
          flexGrow: 0,
          marginBottom: "7%",
          width: "100%",
        }}
        contentContainerStyle={{ paddingHorizontal: "2%" }}
        horizontal={true}
        data={
          selectedOption === "By company"
            ? brands
            : selectedOption === "By year"
            ? years
            : colors
        }
        keyExtractor={(it, ind) => ind}
        renderItem={({ item, index }) =>
          selectedOption === "By company" || selectedOption === "By year" ? (
            <IconContainer isFirst={index === 0 ? true : false} text={item} />
          ) : (
            <IconContainer isFirst={index === 0 ? true : false} color={item} />
          )
        }
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "3%",
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
                fontSize: 16,
                fontWeight: "700",
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
    // alignItems: "center",
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
  inputRow: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "2%",
    marginTop: "-2%",
    marginBottom: "2%",
  },
  filterButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: width / 24,
    height: "80%",
    width: "27%",
  },
  filterText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
