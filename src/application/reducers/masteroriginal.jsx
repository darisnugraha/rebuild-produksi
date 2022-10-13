// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_MASTER_ORIGINAL_SUCCESS,
  SET_DATA_MASTER_ORIGINAL_FAILED,
  SET_DATA_MASTER_ORIGINAL_BY_ID_SUCCESS,
  SET_DATA_MASTER_ORIGINAL_BY_ID_FAILED,
  SET_EDIT_FORM_ON,
  SET_EDIT_FORM_OFF,
} from "../actions/masteroriginal";

const initialState = {
  feedback: [],
  dataEdit: [],
  error: null,
  isEdit: false,
  isVisible: false,
};

const masteroriginal = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_MASTER_ORIGINAL_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_MASTER_ORIGINAL_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_MASTER_ORIGINAL_BY_ID_SUCCESS:
      return {
        ...state,
        dataEdit: action.payload.data,
      };
    case SET_DATA_MASTER_ORIGINAL_BY_ID_FAILED:
      return {
        ...state,
        dataEdit: action.payload.data,
      };
    case SET_EDIT_FORM_ON:
    case SET_EDIT_FORM_OFF:
      return {
        ...state,
        dataEdit: [],
        isEdit: action.payload,
        isVisible: action.payload,
      };
    default:
      return state;
  }
};

export default masteroriginal;
