import { Feather } from "@expo/vector-icons";
import { FlatList, StyleSheet, View, Text } from "react-native";

import Cart from "../components/Cart";

export default function MainScreen() {
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
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 49 }}>
        <Text style={[styles.title, { fontWeight: "700" }]}> Choose</Text>
        <Text style={styles.title}> a Car</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.subTitle}>Available Cars</Text>
        <Feather
          name="filter"
          size={24}
          color="black"
          style={styles.filterIcon}
        />
      </View>
      <FlatList
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
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  filterIcon: {
    marginRight: 20,
    marginBottom: 20,
  },
});
