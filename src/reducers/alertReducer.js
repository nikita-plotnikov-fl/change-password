import { SET_ALERT, CLOSE_ALERT } from "../actions/types";

const initialState = {
  message: "",
  alertType: "",
  open: null,
};

export default function alertReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        message: payload.message,
        alertType: payload.alertType,
        open: true,
      };
    case CLOSE_ALERT:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}
