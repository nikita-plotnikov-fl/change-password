import axios from "axios";
import {
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  SET_ALERT,
  CHANGE_PASSWORD,
} from "./types";

export const changePassword = ({ newPassword, masterPassword }) => async (
  dispatch
) => {
  const body = { newPassword, masterPassword };
  try {
    dispatch({
      type: CHANGE_PASSWORD,
    });
    const res = await axios.post("/api/change-password", body);

    dispatch({
      type: CHANGE_PASSWORD_SUCCESS,
    });

    dispatch({
      type: SET_ALERT,
      payload: { message: res.data.message, alertType: "success" },
    });
  } catch (err) {
    dispatch({
      type: CHANGE_PASSWORD_FAIL,
    });
    dispatch({
      type: SET_ALERT,
      payload: { message: err.response.data.err, alertType: "error" },
    });
  }
};
