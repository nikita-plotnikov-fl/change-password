import { SET_ALERT, CLOSE_ALERT } from "./types";

export const setAlert = (message, alertType) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: {
      message,
      alertType,
    },
  });
};

export const closeAlert = () => (dispatch) => {
  dispatch({
    type: CLOSE_ALERT,
  });
};
