// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_DETAIL_JO_SUCCESS,
  SET_DATA_DETAIL_JO_FAILED,
  SET_BERAT_BATU_SUCCESS,
  SET_COUNT_BERAT_KIRIM_BATU_PRODUKSI,
  COUNT_BERAT_KIRIM_BATU_PRODUKSI,
  SET_DATA_KIRIM_BATU_SUCCESS,
  SET_DATA_KIRIM_BATU_FAILED,
  SET_DATA_HISTORY_KIRIM_BATU_SUCCESS,
  SET_DATA_HISTORY_KIRIM_BATU_FAILED,
} from "../actions/kirimbatuproduksi";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  dataBatu: [],
  jumlahKirim: 0,
  beratKirim: 0,
  dataKirim: [],
  errorKirim: false,
  dataHistory: [],
};

const kirimbatuproduksi = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_DETAIL_JO_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_DETAIL_JO_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_BERAT_BATU_SUCCESS:
      return {
        ...state,
        dataBatu: action.payload.data,
      };
    case SET_COUNT_BERAT_KIRIM_BATU_PRODUKSI:
      return {
        ...state,
        beratKirim: action.payload.data,
      };
    case COUNT_BERAT_KIRIM_BATU_PRODUKSI:
      return {
        ...state,
        jumlahKirim: action.payload,
      };
    case SET_DATA_KIRIM_BATU_SUCCESS:
      return {
        ...state,
        dataKirim: action.payload.data,
      };
    case SET_DATA_KIRIM_BATU_FAILED:
      return {
        ...state,
        errorKirim: action.payload.data,
      };
    case SET_DATA_HISTORY_KIRIM_BATU_SUCCESS:
      return {
        ...state,
        dataHistory: action.payload.data,
      };
    case SET_DATA_HISTORY_KIRIM_BATU_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimbatuproduksi;
