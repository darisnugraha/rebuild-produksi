// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_JO_BY_NO_PROSES,
  GET_DATA_JO_BY_NO_PROSES,
} from "../actions/batalprosesjo";

const initialState = {
  feedback: [],
  noProses: undefined,
  isEdit: false,
};

const batalprosesjo = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_JO_BY_NO_PROSES:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case GET_DATA_JO_BY_NO_PROSES:
      return {
        ...state,
        noProses: action.payload.data,
      };
    default:
      return state;
  }
};

export default batalprosesjo;
