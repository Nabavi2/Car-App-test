import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../constants/Colors";
import * as carActions from "../store/action/car";

function SearchScreen() {
  const searchedCars: [] = useSelector(
    (state) => state.movies.searchedMovieByName
  );

  const [search, setSearch] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [notFoundMessage, setNotfoundMessage] = useState(null);

  const dispatch = useDispatch();
  const searchHandler = async (title: any) => {
    try {
      setIsLoading(true);
      await dispatch(movieActions.searchMovieByName(title));

      setIsLoading(false);
      if (searchedCars.length === 0) {
        setNotfoundMessage("No match found!");
      }
    } catch (err: any) {
      alert(err.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  const searchNotfoundHandler = (text: string) => {
    setSearch(text);
    if (text.length === 0) {
      setNotfoundMessage(null);
    }
  };

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search..."
          onChangeText={(text: string) => searchNotfoundHandler(text)}
          value={search}
          style={styles.searchInput}
        />
        <Button
          title="Search"
          onPress={() => searchHandler(search)}
          disabledStyle={{ backgroundColor: Colors.secondary }}
          buttonStyle={{ backgroundColor: Colors.primary }}
          disabled={search.length === 0}
        />
      </View>
      {searchedCars.length === 0 || search.length === 0 ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ color: "#FFF", fontSize: 25 }}>{notFoundMessage}</Text>
        </View>
      ) : (
        <FlatList
          data={searchedCars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => {
                  setNotfoundMessage(null);
                }}
                style={{
                  flexDirection: "row",
                  width: "90%",
                  marginTop: 20,
                  height: 80,
                }}
              ></Pressable>
            );
          }}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    marginLeft: Dimensions.get("screen").width * 0.012,
    marginBottom: 10,
    width: 120,
    height: 70,
    borderRadius: 5,
    borderColor: "#c75a5f",
    resizeMode: "cover",
  },
  searchInput: {
    width: "70%",
    marginRight: 10,
    height: 37,
    borderColor: Colors.secondary,
    borderWidth: 1,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    borderRadius: 5,
  },
});
export default SearchScreen;
