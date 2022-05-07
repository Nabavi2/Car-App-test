import { AntDesign, Feather, Fontisto } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Button,
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
  const [showInput, setShowInput] = useState(false);

  const cars: [] = useSelector((state) => state.cars.availableCars);
  const images: [] = useSelector((state) => state.cars.images);
  const imageUrl = images.map((item) => item.url);
  // console.log("image URL", imageUrl);
  const dispatch = useDispatch();
  const carsHandler = async () => {
    try {
      await dispatch(carsActions.fetchCars());
      await dispatch(carsActions.fetchImages());
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    carsHandler();
  }, []);
  const [selectedOption, setSelectedOption] = useState("By company");
  const years = [
    "all",
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
      name: "Land-Rover",
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
  // console.log("datatatata >>>>", cars);

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, { flexDirection: "row" }]}>
        <AntDesign
          name="search1"
          size={22}
          color="black"
          onPress={() => {
            console.log("aafdsadsfa");
          }}
        />
        <TextInput
          placeholder="Choose a car"
          placeholderTextColor={Colors.text}
          style={styles.input}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={{ flexDirection: "row", marginTop: 49 }}>
        <Text style={[styles.title, { fontWeight: "700" }]}> Choose</Text>
        <Text style={styles.title}> a Car</Text>
      </View> */}

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
        data={cars}
        renderItem={({ item }) => {
          return (
            <Cart
              image={data[0].image}
              year={item.car_model_year}
              rentalDaily={item.price}
              companyName={item.car_model}
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
    backgroundColor: Colors.background,
    paddingBottom: 10,
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
  inputContainer: {
    height: height * 0.06,
    width: "100%",
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  input: {
    height: height * 0.05,
    width: width * 0.65,
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
