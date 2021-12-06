// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_MASTER_MARKETING_SUCCESS,
  SET_DATA_MASTER_MARKETING_FAILED,
  SET_EDIT_FORM_ON,
  SET_EDIT_FORM_OFF,
  SET_DATA_MASTER_MARKETING_EDIT,
} from "../actions/mastermarketing";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  isVisible: false,
  dataEdit: [],
};

const mastermarketing = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_MASTER_MARKETING_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_MASTER_MARKETING_FAILED:
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
    case SET_DATA_MASTER_MARKETING_EDIT:
      return {
        ...state,
        dataEdit: action.payload.data,
      };
    default:
      return state;
  }
};

export default mastermarketing;
