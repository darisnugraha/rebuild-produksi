// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_SETOR_OUTSTAND_POTONG_SUCCESS,
  SET_DATA_SETOR_OUTSTAND_POTONG_FAILED,
} from "../actions/abutukangpotong";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const abutukangpotong = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_SETOR_OUTSTAND_POTONG_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_SETOR_OUTSTAND_POTONG_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default abutukangpotong;
