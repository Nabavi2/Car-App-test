export const SET_CAR = "SET_CAR";
import Car from "../../models/car";

export const fetchMovies = () => {
  try {
    return async (dispatch: Function) => {
      //   const token = await AsyncStorage.getItem("userData");
      const response = await fetch(`https://myfakeapi.com/api/cars/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("An error occured! in movies");
      }

      const resData = await response.json();
      console.log("feteched data ", resData);
      resData;
      const loadedCars = [];
      for (const key in resData) {
        loadedCars.push(
          new Car(
            resData[key].id,
            resData[key].car,
            resData[key].car_model,
            resData[key].car_color,
            resData[key].car_model_year,
            resData[key].car_vin,
            resData[key].price,
            resData[key].availability
          )
        );
      }
      dispatch({
        type: SET_CAR,
        cars: loadedCars,
      });
    };
  } catch (error) {
    throw error;
  }
};

//mthode search movies by name
