// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_JO_KIRIM_BATU_SUCCESS,
  SET_DATA_JO_KIRIM_BATU_FAILED,
  GET_ALL_JO_KIRIM_BATU,
  SET_DATA_DETAIL_BATU_SUCCESS,
  SET_DATA_DETAIL_BATU_FAILED,
  COUNT_BERAT_BATU_KIRIM_SUCCESS,
  COUNT_BERAT_BATU_KIRIM,
  ADD_CART_BATU_KIRIM_SUCCESS,
  ADD_CART_BATU_KIRIM_FAILED,
  CHECKOUT_KIRIM_BATU_SUCCESS,
  CHECKOUT_KIRIM_BATU_FAILED,
} from "../actions/kirimbatupusat";

const initialState = {
  feedback: [],
  detailBatu: [],
  error: null,
  isEdit: false,
  no_job_order: "",
  jmlbatu: 0,
  beratbatu: 0,
  feedbackcart: [],
  feedbackcheckout: [],
};

const kirimbatupusat = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_JO_KIRIM_BATU_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_JO_KIRIM_BATU_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case GET_ALL_JO_KIRIM_BATU:
      return {
        ...state,
        no_job_order: action.payload.data,
      };
    case SET_DATA_DETAIL_BATU_SUCCESS:
      return {
        ...state,
        detailBatu: action.payload.data,
      };
    case SET_DATA_DETAIL_BATU_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case COUNT_BERAT_BATU_KIRIM_SUCCESS:
      return {
        ...state,
        beratbatu: action.payload.data,
      };
    case COUNT_BERAT_BATU_KIRIM:
      return {
        ...state,
        jmlbatu: action.payload.data,
      };
    case ADD_CART_BATU_KIRIM_SUCCESS:
      return {
        ...state,
        feedbackcart: action.payload.data,
      };
    case ADD_CART_BATU_KIRIM_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case CHECKOUT_KIRIM_BATU_SUCCESS:
      return {
        ...state,
        feedbackcheckout: action.payload.data,
      };
    case CHECKOUT_KIRIM_BATU_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimbatupusat;
