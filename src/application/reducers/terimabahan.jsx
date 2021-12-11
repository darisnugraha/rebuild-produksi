// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_SALDO_BAHAN_TUKANG_SUCCESS,
  SET_DATA_SALDO_BAHAN_TUKANG_FAILED,
  SET_DATA_SALDO_KIRIM_BAHAN_OPEN_SUCCESS,
  SET_DATA_SALDO_KIRIM_BAHAN_OPEN_FAILED,
  SET_KODE_STAFF,
  SET_BAHAN,
} from "../actions/terimabahan";

const initialState = {
  feedback: [],
  dataSaldoBahan: [],
  beratBahan: [],
  error: null,
  errorBerat: null,
  isEdit: false,
  kodeStaff: null,
  noTransaksi: null,
};

const terimabahan = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_SALDO_BAHAN_TUKANG_SUCCESS:
      return {
        ...state,
        dataSaldoBahan: action.payload.data,
      };
    case SET_DATA_SALDO_BAHAN_TUKANG_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_SALDO_KIRIM_BAHAN_OPEN_SUCCESS:
      return {
        ...state,
        beratBahan: action.payload.data,
      };
    case SET_DATA_SALDO_KIRIM_BAHAN_OPEN_FAILED:
      return {
        ...state,
        errorBerat: action.payload.data,
      };
    case SET_KODE_STAFF:
      return {
        ...state,
        kodeStaff: action.payload.data,
      };
    case SET_BAHAN:
      return {
        ...state,
        noTransaksi: action.payload.data,
      };
    default:
      return state;
  }
};

export default terimabahan;
