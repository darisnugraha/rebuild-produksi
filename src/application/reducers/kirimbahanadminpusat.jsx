// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_STOCK_BAHAN_DIVISI_SUCCESS,
  SET_DATA_STOCK_BAHAN_DIVISI_FAILED,
  SET_DATA_STAFF_STOCK_BAHAN_DIVISI_SUCCESS,
  SET_DATA_STAFF_STOCK_BAHAN_DIVISI_FAILED,
  SET_DATA_STOCK_BAHAN_BY_STAFF_SUCCESS,
  SET_DATA_STOCK_BAHAN_BY_STAFF_FAILED,
} from "../actions/kirimbahanadminpusat";

const initialState = {
  feedback: [],
  dataStaff: [],
  dataStockBahan : [],
  error: null,
  errorStaff: null,
  errorStock: null,
  isEdit: false,
};

const kirimbahanadminpusat = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_STOCK_BAHAN_DIVISI_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_STOCK_BAHAN_DIVISI_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_STAFF_STOCK_BAHAN_DIVISI_SUCCESS:
      return {
        ...state,
        dataStaff: action.payload.data,
      };
    case SET_DATA_STAFF_STOCK_BAHAN_DIVISI_FAILED:
      return {
        ...state,
        errorStaff: action.payload.data,
      };
    case SET_DATA_STOCK_BAHAN_BY_STAFF_SUCCESS:
      return {
        ...state,
        dataStockBahan: action.payload.data,
      };
    case SET_DATA_STOCK_BAHAN_BY_STAFF_FAILED:
      return {
        ...state,
        errorStock: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimbahanadminpusat;
