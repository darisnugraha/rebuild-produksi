// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_ABU_TUKANG_SUCCESS,
  SET_DATA_ABU_TUKANG_FAILED,
} from "../actions/abutukang";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const abutukang = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_ABU_TUKANG_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_ABU_TUKANG_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default abutukang;
