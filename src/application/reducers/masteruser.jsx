// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_MASTER_USER_SUCCESS,
  SET_DATA_MASTER_USER_FAILED,
  SET_EDIT_FORM_ON,
  SET_EDIT_FORM_OFF,
  SET_DATA_MASTER_USER_EDIT,
  SET_USER,
} from "../actions/masteruser";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  isVisible: false,
  dataEdit: [],
  userID: "",
};

const masteruser = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_MASTER_USER_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_MASTER_USER_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_EDIT_FORM_ON:
    case SET_EDIT_FORM_OFF:
      return {
        ...state,
        dataEdit: [],
        isEdit: action.payload,
        isVisible: action.payload,
      };
    case SET_DATA_MASTER_USER_EDIT:
      return {
        ...state,
        dataEdit: action.payload.data,
      };
    case SET_USER:
      return {
        ...state,
        userID: action.payload.data,
      };
    default:
      return state;
  }
};

export default masteruser;
