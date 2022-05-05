import { SET_CAR } from "../action/car";
const initialState = {
  availableCars: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CAR:
      return {
        ...state,
        availableCars: [...state.availableCars, ...action.cars],
      };
  }
};
