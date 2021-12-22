// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_TERIMA_TUKANG_POTONG_SUCCESS,
  SET_DATA_TERIMA_TUKANG_POTONG_FAILED,
  SET_NO_POHON,
} from "../actions/terimatukangpotong";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  noPohon: "",
};

const terimatukangpotong = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_TERIMA_TUKANG_POTONG_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_TERIMA_TUKANG_POTONG_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_NO_POHON:
      return {
        ...state,
        noPohon: action.payload.data,
      };
    default:
      return state;
  }
};

export default terimatukangpotong;
