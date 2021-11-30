// Type your data here, it can be string, or any type of data, just write your variable
import {
SET_DATA_DASHBOARD_SUCCESS,
SET_DATA_DASHBOARD_FAILED,
SET_DATA_ABU_CASTING_OUTSTAND_SUCCESS,
SET_DATA_ABU_CASTING_OUTSTAND_FAILED,
SET_DATA_ABU_POTONG_OUTSTAND_SUCCESS,
SET_DATA_ABU_POTONG_OUTSTAND_FAILED,
SET_DATA_ABU_TUKANG_OUTSTAND_SUCCESS,
SET_DATA_ABU_TUKANG_OUTSTAND_FAILED,
SET_DATA_CASTING_OUTSTAND_SUCCESS,
SET_DATA_CASTING_OUTSTAND_FAILED,
SET_DATA_BAHAN_OUTSTAND_SUCCESS,
SET_DATA_BAHAN_OUTSTAND_FAILED
} from "../actions/dashboard";

const initialState = {
feedback: [],
feedbackOutstandJO: [],
feedbackOutstandAbuCasting: [],
feedbackOutstandAbuPotong: [],
feedbackOutstandAbuTukang: [],
feedbackOutstandCasting: [],
feedbackOutstandBahan: [],
error: null,
errorOutstandAbuCasting: null,
errorOutstandAbuPotong: null,
errorOutstandAbuTukang: null,
errorOutstandCasting: null,
errorOutstandBahan: null,
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
	case SET_DATA_ABU_CASTING_OUTSTAND_SUCCESS :
	  return {
		...state,
		feedbackOutstandAbuCasting : action.payload.data
	  }
	case SET_DATA_ABU_CASTING_OUTSTAND_FAILED :
	  return {
		...state,
		errorOutstandAbuCasting : action.payload.data
	  }
	case SET_DATA_ABU_POTONG_OUTSTAND_SUCCESS :
	  return {
		...state,
		feedbackOutstandAbuPotong : action.payload.data
	  }
	case SET_DATA_ABU_POTONG_OUTSTAND_FAILED :
	  return {
		...state,
		errorOutstandAbuPotong : action.payload.data
	  }
	case SET_DATA_ABU_TUKANG_OUTSTAND_SUCCESS :
	  return {
		...state,
		feedbackOutstandAbuTukang : action.payload.data
	  }
	case SET_DATA_ABU_TUKANG_OUTSTAND_FAILED :
	  return {
		...state,
		errorOutstandAbuTukang : action.payload.data
	  }
	case SET_DATA_CASTING_OUTSTAND_SUCCESS :
	  return {
		...state,
		feedbackOutstandCasting : action.payload.data
	  }
	case SET_DATA_CASTING_OUTSTAND_FAILED :
	  return {
		...state,
		errorOutstandCasting : action.payload.data
	  }
	case SET_DATA_BAHAN_OUTSTAND_SUCCESS :
	  return {
		...state,
		feedbackOutstandBahan : action.payload.data
	  }
	case SET_DATA_BAHAN_OUTSTAND_FAILED :
	  return {
		...state,
		errorOutstandBahan : action.payload.data
	  }
	default:
	  return state;
  }
};

export default dashboard;