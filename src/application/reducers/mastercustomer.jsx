// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_MASTER_CUSTOMER_SUCCESS,
  SET_DATA_MASTER_CUSTOMER_FAILED,
} from "../actions/mastercustomer";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const mastercustomer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_MASTER_CUSTOMER_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_MASTER_CUSTOMER_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default mastercustomer;
