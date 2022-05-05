import { AntDesign, Fontisto } from "@expo/vector-icons";
import { FlatList, StyleSheet } from "react-native";

import { View, Text } from "react-native";
import IconContainer from "../components/IconContainer";
import Colors from "../constants/Colors";
import { RootTabScreenProps } from "../types";

export default function MainScreen() {
  const brands = [
    <IconContainer isSelected>
      <Fontisto name="tesla" size={42} color="white" />
    </IconContainer>,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  return (
    <View style={styles.container}>
      <IconContainer>
        <Fontisto name="tesla" size={42} color="white" />
      </IconContainer>
      <Text style={styles.title}>Brands</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ height: 120, flexGrow: 0 }}
        horizontal={true}
        data={brands}
        keyExtractor={(it, ind) => ind}
        renderItem={({ item, index }) =>
          index === 0 ? item : <IconContainer text={item}></IconContainer>
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
        <AntDesign name="filter" size={34} color="grey" />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.background,
    padding: "10%",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginVertical: "5%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
