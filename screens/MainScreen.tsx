import { AntDesign, Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { View, Text } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import IconContainer from "../components/IconContainer";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { RootTabScreenProps } from "../types";

export default function MainScreen() {
  const { width, height } = Layout.window;
  const [selectedOption, setSelectedOption] = useState("By company");
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
  const colors = [
    "dodgerblue, lightgrey, lightgreen, black, lightpurple, tomato, lightblue, orange, yellow",
  ];
  return (
    <View style={styles.container}>
      <IconContainer
        icon={(color) => <Fontisto name="tesla" size={42} color={color} />}
      />
      <Text style={styles.title}>Brands</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ height: 120, flexGrow: 0 }}
        horizontal={true}
        data={selectedOption === "By company" ? brands : colors}
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
