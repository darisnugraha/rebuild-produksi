// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_TERIMA_PRODUKSI_SUCCESS,
  SET_DATA_TERIMA_PRODUKSI_FAILED,
  SET_DATA_KIRIM_PRODUKSI_SUCCESS,
  SET_DATA_KIRIM_PRODUKSI_FAILED,
  SET_DATA_TERIMA_TAMBAHAN_PRODUKSI_SUCCESS,
  SET_DATA_TERIMA_TAMBAHAN_PRODUKSI_FAILED,
  SET_DATA_TERIMA_BATU_PRODUKSI_SUCCESS,
  SET_DATA_TERIMA_BATU_PRODUKSI_FAILED,
  SET_DATA_OUTSTAND_PRODUKSI_SUCCESS,
  SET_DATA_OUTSTAND_PRODUKSI_FAILED,
  SET_DATA_TERIMA_GUDANG_PRODUKSI_SUCCESS,
  SET_DATA_TERIMA_GUDANG_PRODUKSI_FAILED,
  SET_DIVISI_GUDANG,
  SET_DATA_SUSUT,
  GET_TUKANG_BY_DIVISI,
  SET_TUKANG_BY_DIVISI,
  SET_DIVISI,
  GET_PERIODE_BY_TUKANG,
  SET_PERIODE_BY_TUKANG,
  SET_TANGGAL,
  GET_TANGGAL,
} from "../actions/laporanproduksi";

const initialState = {
  feedback: [],
  feedbackTerima: [],
  feedbackTambahan: [],
  feedbackBatu: [],
  feedbackOutstand: [],
  feedbackGudang: [],
  feedbackSusut: [],
  error: null,
  errorTerima: null,
  errorTambahan: null,
  errorBatu: null,
  errorOutstand: null,
  errorGudang: null,
  isEdit: false,
  divisiGudang: [],
  dataDivisi: [],
  divisi: null,
  dataTukangByDivisi: [],
  tukang: null,
  dataPeriode: [],
  tanggal: [],
  periode: null,
};

const laporanproduksi = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_TERIMA_PRODUKSI_SUCCESS:
      return {
        ...state,
        feedbackTerima: action.payload.data,
      };
    case SET_DATA_TERIMA_PRODUKSI_FAILED:
      return {
        ...state,
        errorTerima: action.payload.data,
      };
    case SET_DATA_KIRIM_PRODUKSI_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_KIRIM_PRODUKSI_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_TERIMA_TAMBAHAN_PRODUKSI_SUCCESS:
      return {
        ...state,
        feedbackTambahan: action.payload.data,
      };
    case SET_DATA_TERIMA_TAMBAHAN_PRODUKSI_FAILED:
      return {
        ...state,
        errorTambahan: action.payload.data,
      };
    case SET_DATA_TERIMA_BATU_PRODUKSI_SUCCESS:
      return {
        ...state,
        feedbackBatu: action.payload.data,
      };
    case SET_DATA_TERIMA_BATU_PRODUKSI_FAILED:
      return {
        ...state,
        errorBatu: action.payload.data,
      };
    case SET_DATA_OUTSTAND_PRODUKSI_SUCCESS:
      return {
        ...state,
        feedbackOutstand: action.payload.data,
      };
    case SET_DATA_OUTSTAND_PRODUKSI_FAILED:
      return {
        ...state,
        errorOutstand: action.payload.data,
      };
    case SET_DATA_TERIMA_GUDANG_PRODUKSI_SUCCESS:
      return {
        ...state,
        feedbackGudang: action.payload.data,
      };
    case SET_DATA_SUSUT:
      return {
        ...state,
        feedbackSusut: action.payload.data,
      };
    case SET_DATA_TERIMA_GUDANG_PRODUKSI_FAILED:
      return {
        ...state,
        errorGudang: action.payload.data,
      };
    case SET_DIVISI_GUDANG:
      return {
        ...state,
        divisiGudang: action.payload.data,
      };
    case GET_TUKANG_BY_DIVISI:
      return {
        ...state,
        divisi: action.payload.data,
      };
    case SET_TUKANG_BY_DIVISI:
      return {
        ...state,
        dataTukangByDivisi: action.payload.data,
      };
    case SET_DIVISI:
      return {
        ...state,
        dataDivisi: action.payload.data,
      };
    case GET_PERIODE_BY_TUKANG:
      return {
        ...state,
        tukang: action.payload.data,
      };
    case SET_PERIODE_BY_TUKANG:
      return {
        ...state,
        dataPeriode: action.payload.data,
      };
    case SET_TANGGAL:
      return {
        ...state,
        tanggal: action.payload.data,
      };
    case GET_TANGGAL:
      return {
        ...state,
        periode: action.payload.data,
      };
    default:
      return state;
  }
};

export default laporanproduksi;
