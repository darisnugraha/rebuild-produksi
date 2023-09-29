// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_DIVISI_FAILED,
  SET_DATA_DIVISI_SUCCESS,
} from "../actions/kirimbahanadmin";
import {
  SET_DATA_STOCK_BAHAN_DIVISI_SUCCESS,
  SET_DATA_STOCK_BAHAN_DIVISI_FAILED,
  SET_DATA_STAFF_STOCK_BAHAN_DIVISI_SUCCESS,
  SET_DATA_STAFF_STOCK_BAHAN_DIVISI_FAILED,
  SET_DATA_STOCK_BAHAN_BY_STAFF_SUCCESS,
  SET_DATA_STOCK_BAHAN_BY_STAFF_FAILED,
  SET_BERAT_BAHAN,
  SET_STAFF_BY_DIVISI,
  GET_STAFF_BY_DIVISI,
  SET_BAHAN_BY_TUKANG_ASAL,
  GET_ALL_STOCK_BAHAN_BY_STAFF,
  SET_STAFF_TUJUAN,
} from "../actions/kirimbahanadminpusat";

const initialState = {
  feedback: [],
  dataStaff: [],
  dataStockBahan: [],
  error: null,
  errorStaff: null,
  errorStock: null,
  isEdit: false,
  beratBahan: 0,
  dataDivisi: [],
  dataStaffDivisi: [],
  divisi: undefined,
  bahan: undefined,
  tukang: undefined,
  tukangtujuan: undefined,
};

const kirimbahanadminpusat = (state = initialState, action) => {
  switch (action.type) {
    case SET_STAFF_TUJUAN:
      return {
        ...state,
        tukangtujuan: action.payload.data,
      };
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
    case SET_BERAT_BAHAN:
      return {
        ...state,
        beratBahan: action.payload.data,
      };
    case SET_DATA_DIVISI_SUCCESS:
      return {
        ...state,
        dataDivisi: action.payload.data,
      };
    case SET_DATA_DIVISI_FAILED:
      return {
        ...state,
        dataDivisi: action.payload.data,
      };
    case SET_STAFF_BY_DIVISI:
      return {
        ...state,
        dataStaffDivisi: action.payload.data,
      };
    case GET_STAFF_BY_DIVISI:
      return {
        ...state,
        divisi: action.payload.data,
      };
    case SET_BAHAN_BY_TUKANG_ASAL:
      return {
        ...state,
        bahan: action.payload.data,
      };
    case GET_ALL_STOCK_BAHAN_BY_STAFF:
      return {
        ...state,
        tukang: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimbahanadminpusat;
