// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_STAFF_SUCCESS,
  SET_DATA_STAFF_FAILED,
  SET_DATA_DETAIL_JO_SUCCESS
} from "../actions/tambahjoborder";

const initialState = {
  feedback: [],
  dataStaff: [],
  dataDetailJO: [],
  error: null,
  isEdit: false,
};

const tambahjoborder = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_STAFF_SUCCESS:
      return {
        ...state,
        dataStaff: action.payload.data,
      };
    case SET_DATA_STAFF_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_DETAIL_JO_SUCCESS:
      return {
        ...state,
        dataDetailJO: action.payload.data,
      };
    default:
      return state;
  }
};

export default tambahjoborder;
