// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_SALDO_BAHAN_TUKANG_SUCCESS,
  SET_DATA_SALDO_BAHAN_TUKANG_FAILED,
  SET_DATA_SALDO_KIRIM_BAHAN_OPEN_SUCCESS,
  SET_DATA_SALDO_KIRIM_BAHAN_OPEN_FAILED,
  SET_KODE_STAFF,
  SET_BAHAN,
  SET_DATA_TUKANG_TERIMA_TAMBAHAN_SUCCESS,
  SET_DATA_TUKANG_TERIMA_TAMBAHAN_FAILED,
  SET_BERAT,
  SET_DATA_SALDO_TAMBAHAN,
} from "../actions/terimatambahan";

const initialState = {
  feedback: [],
  dataSaldoBahan: [],
  beratBahan: [],
  error: null,
  errorBerat: null,
  isEdit: false,
  kodeStaff: null,
  namaBahan: null,
  dataTukang: [],
  berat: 0,
  dataBahanTambahan: [],
};

const terimatambahan = (state = initialState, action) => {
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
        namaBahan: action.payload.data,
      };
    case SET_BERAT:
      return {
        ...state,
        berat: action.payload.data,
      };
    case SET_DATA_TUKANG_TERIMA_TAMBAHAN_SUCCESS:
      return {
        ...state,
        dataTukang: action.payload.data,
      };
    case SET_DATA_TUKANG_TERIMA_TAMBAHAN_FAILED:
      return {
        ...state,
        dataTukang: [],
      };
    case SET_DATA_SALDO_TAMBAHAN:
      return {
        ...state,
        dataBahanTambahan: action.payload.data,
      };
    default:
      return state;
  }
};

export default terimatambahan;
