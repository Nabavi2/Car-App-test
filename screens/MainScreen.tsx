import { AntDesign } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from "react-native";

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
  const random = Math.floor(Math.random() * 10);
  const [showInput, setShowInput] = useState(false);
  const isLoading = useSelector((state) => state.cars.isLoading);

  const cars: [] = useSelector((state) => state.cars.availableCars);
  const searchedCar: [] = useSelector((state) => state.cars.searchCarByName);
  console.log(searchedCar, "searched Car");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const carsHandler = useCallback(async () => {
    try {
      await dispatch(carsActions.fetchCars());
    } catch (err: any) {
      console.log("ad");
    }
  }, [dispatch]);

  useEffect(() => {
    carsHandler();
  }, []);
  const [selectedOption, setSelectedOption] = useState("By company");
  const years = [
    "all",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
    "2003",
    "2002",
    "2001",
    "2000",
    "1999",
    "1998",
    "1997",
    "1996",
    "1995",
    "1994",
  ];
  const brands = [
    "all",
    {
      name: "Audi",
      black: require("../assets/images/audi.png"),
      white: require("../assets/images/audi_white.png"),
    },
    {
      name: "Chevrolet",
      black: require("../assets/images/chevrolet.png"),
      white: require("../assets/images/chevorlet_white.png"),
    },
    {
      name: "Ford",
      black: require("../assets/images/ford.png"),
      white: require("../assets/images/ford_white.png"),
    },
    {
      name: "GMC",
      black: require("../assets/images/gmc.png"),
      white: require("../assets/images/gmc_white.png"),
    },
    {
      name: "Lamborghini",
      black: require("../assets/images/lamborghini.png"),
      white: require("../assets/images/lamborghini_white.png"),
    },
    {
      name: "Land Rover",
      black: require("../assets/images/land_rover.png"),
      white: require("../assets/images/land_rover_white.png"),
    },
    {
      name: "BMW",
      black: require("../assets/images/bmw.png"),
      white: require("../assets/images/bmw_white.png"),
    },
    {
      name: "Mazda",
      black: require("../assets/images/mazda.png"),
      white: require("../assets/images/mazda_white.png"),
    },
    {
      name: "Mercedes-Benz",
      black: require("../assets/images/mercedes.png"),
      white: require("../assets/images/mecedes_white.png"),
    },
    {
      name: "Mitsubishi",
      black: require("../assets/images/mitsubishi.png"),
      white: require("../assets/images/mitsubishi_white.png"),
    },
    {
      name: "Suzuki",
      black: require("../assets/images/suzuki.png"),
      white: require("../assets/images/suzuki_white.png"),
    },
    {
      name: "Toyota",
      black: require("../assets/images/toyota.png"),
      white: require("../assets/images/toyota_white.png"),
    },
    {
      name: "Volkswagen",
      black: require("../assets/images/volkswagen.png"),
      white: require("../assets/images/volkswagen_white.png"),
    },
    {
      name: "Volvo",
      black: require("../assets/images/volvo.png"),
      white: require("../assets/images/volvo_white.png"),
    },
  ];
  const colors = [
    "all",
    { name: "Yellow", hexCode: "#FFFF00" },
    { name: "Maroon", hexCode: "#800000" },
    { name: "Red", hexCode: "#FF0000" },
    { name: "Violet", hexCode: "#8F00FF" },
    { name: "Purple", hexCode: "#BF40BF" },
    { name: "Indigo", hexCode: "#4B0082" },
    { name: "Teal", hexCode: "#008080" },
    { name: "Pink", hexCode: "#FFC0CB" },
    { name: "Aquamarine", hexCode: "#7FFFD4" },
    { name: "Green", hexCode: "#00f700" },
    { name: "Mauv", hexCode: "#E0B0FF" },
    { name: "Turquoise", hexCode: "#30D5C8" },
  ];

  const searchHandler = async (title: string) => {
    try {
      await dispatch(carsActions.searchCarByName(title));
    } catch (err: any) {
      alert(err.message);
    }
  };
  const searchNotfoundHandler = (text: string) => {
    setSearch(text);
    if (text.length === 0) {
      console.log("if");
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, { flexDirection: "row" }]}>
        <AntDesign name="search1" size={22} color="black" />
        <TextInput
          placeholder="Choose a car"
          placeholderTextColor={Colors.text}
          style={styles.input}
          onChangeText={(text: string) => searchNotfoundHandler(text)}
          value={search}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPressIn={() => searchHandler(search)}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ ...styles.title, marginLeft: "2%", marginBottom: "1%" }}>
        {selectedOption === "By company"
          ? "Brands"
          : selectedOption === "By color"
          ? "Colors"
          : "Years"}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{
          height: height * 0.2,
          flexGrow: 0,
          width: "100%",
          paddingBottom: -height * 0.15,
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
          selectedOption === "By year" ? (
            <IconContainer isFirst={index === 0 ? true : false} text={item} />
          ) : selectedOption === "By company" ? (
            <IconContainer
              isFirst={index === 0 ? true : false}
              company={item}
            />
          ) : (
            <IconContainer isFirst={index === 0 ? true : false} color={item} />
          )
        }
      />

      <View style={styles.menuContainer}>
        <Text style={styles.title}>Available Cars</Text>
        <Menu
          onSelect={(value) => {
            dispatch(carsActions.fetchCars());
            setSelectedOption(value);
          }}
        >
          <MenuTrigger>
            <AntDesign name="filter" size={34} color="black" />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionText: {
                fontSize: 16,
                fontWeight: "700",
                color: Colors.primary,
              },
              optionsContainer: {
                borderRadius: width / 45,
                padding: "5%",
                width: width * 0.25,
              },
            }}
          >
            <MenuOption text="Company" value={"By company"} />
            <MenuOption text="Color" value={"By color"} />
            <MenuOption text="Year" value={"By year"} />
          </MenuOptions>
        </Menu>
      </View>

      {isLoading ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "59.6%",
          }}
        >
          <ActivityIndicator size={60} color={Colors.primary} />
        </View>
      ) : search ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={searchedCar}
          renderItem={({ item }) => {
            return (
              <Cart
                image={item.image}
                year={item.car_model_year}
                rentalDaily={item.price}
                companyName={item.car_model}
              />
            );
          }}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cars}
          renderItem={({ item }) => {
            return (
              <Cart
                image={item.image}
                year={item.car_model_year}
                rentalDaily={item.price}
                companyName={item.car_model}
              />
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "2%",
    backgroundColor: Colors.background,
    paddingBottom: 10,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "3%",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    marginTop: 10,
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
  inputContainer: {
    height: height * 0.06,
    width: "100%",
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: "10%",
  },
  input: {
    height: height * 0.05,
    width: width * 0.62,
    backgroundColor: Colors.background,
  },
  searchButton: {
    height: height * 0.04,
    width: width * 0.23,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
  },
});
