// Type your data here, it can be string, or any type of data, just write your variable
import {
SET_DATA_DASHBOARD_SUCCESS,
SET_DATA_DASHBOARD_FAILED,
} from "../actions/dashboard";
const initialState = {
feedback: [],
feedbackOutstandJO: [],
error: null,
isEdit: false,
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
	case SET_DATA_DASHBOARD_SUCCESS :
	  return {
		...state,
		feedbackOutstandJO : action.payload.data
	  }
	case SET_DATA_DASHBOARD_FAILED :
	  return {
		...state,
		error : action.payload.data
	  }
	default:
	  return state;
  }
};

export default dashboard;