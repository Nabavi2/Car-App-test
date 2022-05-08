import {
  IS_LOADING,
  SET_CAR,
  SET_FILTER,
  SET_IMAGE,
  SET_SEARCH,
  SET_SELECTED_COLOR,
  SET_SELECTED_COMPANY,
  SET_SELECTED_YEAR,
} from "../action/car";
const initialState = {
  availableCars: [],
  searchCarByName: [],
  images: [],
  selectedCompany: "all",
  selectedColor: "all",
  selectedYear: "all",
  isLoading: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CAR:
      return {
        ...state,
        availableCars: [...action.cars],
      };
    case SET_IMAGE:
      return {
        ...state,
        images: [...state.images, ...action.images],
      };
    case SET_SEARCH:
      return {
        ...state,
        searchCarByName: [...action.searchCar],
      };
    case SET_SELECTED_COLOR:
      return {
        ...state,
        selectedColor: action.color,
      };
    case SET_SELECTED_COMPANY:
      return {
        ...state,
        selectedCompany: action.company,
      };
    case SET_SELECTED_YEAR:
      return {
        ...state,
        selectedYear: action.year,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };
    case SET_FILTER:
      return {
        ...state,
        availableCars: [...action.filteredCars],
      };
    default:
      return state;
  }
};
