export const SET_CAR = "SET_CAR";
export const SET_SEARCH = "SET_SEARCH";
export const SET_IMAGE = "SET_IMAGE";
export const SET_SELECTED_COMPANY = "SET_SELECTED_COMPANY";
export const SET_SELECTED_COLOR = "SET_SELECTED_COLOR";
export const SET_SELECTED_YEAR = "SET_SELECTED_YEAR";

import Car from "../../models/Car";
import Image from "../../models/Image";

export const setSelectedCompany = (company: string) => {
  return {
    type: SET_SELECTED_COMPANY,
    company,
  };
};
export const setSelectedColor = (color: string) => {
  return {
    type: SET_SELECTED_COLOR,
    color,
  };
};
export const setSelectedYear = (year: string) => {
  return {
    type: SET_SELECTED_YEAR,
    year,
  };
};

export const fetchCars = () => {
  try {
    return async (dispatch: Function) => {
      const response1 = await fetch(`https://myfakeapi.com/api/cars/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response1.ok) {
        throw new Error("An error occured! in carsfetch method");
      }

      const resData = await response1.json();

      const loadedCars = [];
      for (const key in resData.cars) {
        loadedCars.push(
          new Car(
            resData.cars[key].id,
            resData.cars[key].car,
            resData.cars[key].car_model,
            resData.cars[key].car_color,
            resData.cars[key].car_model_year,
            resData.cars[key].car_vin,
            resData.cars[key].price,
            resData.cars[key].availability
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

//This is search method

export const searchCarByName = (title: string) => {
  try {
    return async (dispatch: Function) => {
      const response = await fetch(
        `https://myfakeapi.com/api/Cars/model/${title}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("somthing went wrong");
      }

      const resData = await response.json();
      console.log("datatatatata MMMMMMMmmmmm", resData.Cars);
      if (resData.lenght === 0) {
        throw new Error("not found!");
      }

      const loadedCarByName = [];

      for (const key in resData.Cars) {
        loadedCarByName.push(
          new Car(
            resData.Cars[key].id,
            resData.Cars[key].car,
            resData.Cars[key].car_model,
            resData.Cars[key].car_color,
            resData.Cars[key].car_model_year,
            resData.Cars[key].car_vin,
            resData.Cars[key].price,
            resData.Cars[key].availability
          )
        );
      }
      console.log("LLLLLLLLLLLLL,", loadedCarByName);
      dispatch({
        type: SET_SEARCH,
        searchCar: loadedCarByName,
      });
    };
  } catch (error) {
    throw error;
  }
};

// //This method for filter by Car Model
export const filterByModel = (model: any) => {
  try {
    return async (dispatch: Function) => {
      const response = await fetch(
        `https://myfakeapi.com/api/cars/name/${model}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("somthing went wrong");
      }

      const resData = await response.json();
      if (resData.lenght === 0) {
        throw new Error("not found!");
      }

      const loadedCarByModel = [];

      for (const key in resData) {
        loadedCarByModel.push(
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
        type: SET_SEARCH,
        searchedCars: loadedCarByModel,
      });
    };
  } catch (error) {
    throw error;
  }
};

// //This method is for filter by color
// export const filterByColor = (color: any) => {
//   try {
//     return async (dispatch: Function) => {
//       const response = await fetch(
//         `https://myfakeapi.com/api/cars/color/${color}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error("somthing went wrong");
//       }

//       const resData = await response.json();
//       if (resData.lenght === 0) {
//         throw new Error("not found!");
//       }

//       const loadedCarByColor = [];

//       for (const key in resData) {
//         loadedCarByColor.push(
//           new Car(
//             resData[key].id,
//             resData[key].car,
//             resData[key].car_model,
//             resData[key].car_color,
//             resData[key].car_model_year,
//             resData[key].car_vin,
//             resData[key].price,
//             resData[key].availability
//           )
//         );
//       }
//       dispatch({
//         type: SET_SEARCH,
//         filterColor: loadedCarByColor,
//       });
//     };
//   } catch (error) {
//     throw error;
//   }
// };
// //This method is for filter car by Year
// export const filterByYear = (year: any) => {
//   try {
//     return async (dispatch: Function) => {
//       const response = await fetch(
//         `https://myfakeapi.com/api/cars/year/${year}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error("somthing went wrong");
//       }

//       const resData = await response.json();
//       if (resData.lenght === 0) {
//         throw new Error("not found!");
//       }

//       const loadedCarByYear = [];

//       for (const key in resData) {
//         loadedCarByYear.push(
//           new Car(
//             resData[key].id,
//             resData[key].car,
//             resData[key].car_model,
//             resData[key].car_color,
//             resData[key].car_model_year,
//             resData[key].car_vin,
//             resData[key].price,
//             resData[key].availability
//           )
//         );
//       }
//       dispatch({
//         type: SET_SEARCH,
//         filterColor: loadedCarByYear,
//       });
//     };
//   } catch (error) {
//     throw error;
//   }
// };
