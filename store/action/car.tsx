export const SET_CAR = "SET_CAR";
export const SET_SEARCH = "SET_SEARCH";

import Car from "../../models/Car";

export const fetchCars = () => {
  try {
    return async (dispatch: Function) => {
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

//This is search method
export const searchCarByName = (title: any) => {
  try {
    return async (dispatch: Function) => {
      const response = await fetch(
        `https://myfakeapi.com/api/cars/name/${title}`,
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
      if (resData.lenght === 0) {
        throw new Error("not found!");
      }

      const loadedCarByName = [];

      for (const key in resData) {
        loadedCarByName.push(
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
        searchMovie: loadedCarByName,
      });
    };
  } catch (error) {
    throw error;
  }
};
// //This method for filter by Car Model
// export const filterByModel = (model: any) => {
//   try {
//     return async (dispatch: Function) => {
//       const response = await fetch(
//         `https://myfakeapi.com/api/cars/model/${model}`,
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

//       const loadedCarByModel = [];

//       for (const key in resData) {
//         loadedCarByModel.push(
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
//         filterModel: loadedCarByModel,
//       });
//     };
//   } catch (error) {
//     throw error;
//   }
// };

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
