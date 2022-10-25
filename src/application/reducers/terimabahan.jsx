// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_SALDO_BAHAN_TUKANG_SUCCESS,
  SET_DATA_SALDO_BAHAN_TUKANG_FAILED,
  SET_DATA_SALDO_KIRIM_BAHAN_OPEN_SUCCESS,
  SET_DATA_SALDO_KIRIM_BAHAN_OPEN_FAILED,
  SET_KODE_STAFF,
  SET_BAHAN,
  SET_DATA_BAHAN_SUCCESS,
  SET_DATA_BAHAN_FAILED,
  SET_BERAT,
  SET_DIVISI,
  SET_TUKANG_DIVISI_SUCCESS,
  SET_TUKANG_DIVISI_FAILED,
  SET_DETAIL_BAHAN_SUCCESS,
  SET_DETAIL_BAHAN_FAILED,
  SET_TUKANG_DIVISI_PUSAT_SUCCESS,
  SET_TUKANG_DIVISI_PUSAT_FAILED,
  SET_DIVISI_ALL,
  SET_TUKANG_ASAL_BY_DIVISI,
  GET_TUKANG_ASAL_BY_DIVISI,
} from "../actions/terimabahan";

const initialState = {
  feedback: [],
  dataSaldoBahan: [],
  beratBahan: [],
  error: null,
  errorBerat: null,
  isEdit: false,
  kodeStaff: null,
  namaBahan: null,
  berat: 0,
  divisi: "",
  feedbackTukang: [],
  feedbackTukangByTukang: [],
  dataDivisi: [],
  tukangAsal: [],
  divisiAsal: undefined,
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
        namaBahan: action.payload.data,
      };
    case SET_BERAT:
      return {
        ...state,
        berat: action.payload.data,
      };
    case SET_DATA_BAHAN_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_BAHAN_FAILED:
      return {
        ...state,
        feedback: [],
      };
    case SET_DIVISI:
      return {
        ...state,
        divisi: action.payload.data,
      };
    case SET_TUKANG_DIVISI_SUCCESS:
      return {
        ...state,
        feedbackTukang: action.payload.data,
      };
    case SET_TUKANG_DIVISI_FAILED:
      return {
        ...state,
        feedbackTukang: [],
      };
    case SET_TUKANG_DIVISI_PUSAT_SUCCESS:
      return {
        ...state,
        feedbackTukangByTukang: action.payload.data,
      };
    case SET_TUKANG_DIVISI_PUSAT_FAILED:
      return {
        ...state,
        feedbackTukangByTukang: [],
      };
    case SET_DETAIL_BAHAN_SUCCESS:
      return {
        ...state,
        detailBahan: action.payload.data,
      };
    case SET_DETAIL_BAHAN_FAILED:
      return {
        ...state,
        detailBahan: undefined,
      };
    case SET_DIVISI_ALL:
      return {
        ...state,
        dataDivisi: action.payload.data,
      };
    case SET_TUKANG_ASAL_BY_DIVISI:
      return {
        ...state,
        tukangAsal: action.payload.data,
      };
    case GET_TUKANG_ASAL_BY_DIVISI:
      return {
        ...state,
        divisiAsal: action.payload.data,
      };
    default:
      return state;
  }
};

export default terimabahan;
