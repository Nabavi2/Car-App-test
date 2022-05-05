import { SET_CAR, SET_SEARCH } from "../action/car";
const initialState = {
  availableCars: [],
  searchCarByName: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CAR:
      return {
        ...state,
        availableCars: [...state.availableCars, ...action.cars],
      };
    case SET_SEARCH:
      return {
        ...state,
        searchCarByName: [...state.searchCarByName, ...action.searchCar],
      };
    default:
      return state;
  }
};
