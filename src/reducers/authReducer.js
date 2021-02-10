import {
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD,
} from "../actions/types";

const initialState = {
  newPassword: "",
  masterPassword: "",
  loading: false,
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_PASSWORD_SUCCESS:
    case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
