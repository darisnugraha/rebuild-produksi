// Type your data here, it can be string, or any type of data, just write your variable
import {
SET_DATA_SALDO_BAHAN_SUCCESS,
SET_DATA_SALDO_BAHAN_FAILED,
} from "../actions/saldobahan";
const initialState = {
feedback: [],
error: null,
isEdit: false,
};

const saldobahan = (state = initialState, action) => {
  switch (action.type) {
	case SET_DATA_SALDO_BAHAN_SUCCESS :
	  return {
		...state,
		feedback : action.payload.data
	  }
	case SET_DATA_SALDO_BAHAN_FAILED :
	  return {
		...state,
		error : action.payload.data
	  }
	default:
	  return state;
  }
};

export default saldobahan;