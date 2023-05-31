// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_DETAIL_JO_SUCCESS,
  SET_DATA_DETAIL_JO_FAILED,
  SET_COUNT_BERAT_KIRIM_JO,
  COUNT_BERAT_KIRIM_JO,
  SET_JUMLAH_KIRIM_JO,
  SAVE_BERAT_BATU_TAK_TERPAKAI,
  SET_NO_INDUK_JOB_ORDER,
  SET_DATA_BY_NO_INDUK_JOB_ORDER,
  GET_DATA_BY_NO_INDUK_JOB_ORDER,
  EDIT_JOB_ORDER,
  SET_DATA_EDIT_JOB_ORDER,
  SET_IS_EDIT_JOB_ORDER,
  EDIT_BATU,
  SET_IS_EDIT_BATU,
  SET_DATA_EDIT_BATU,
  EDIT_TAMBAHAN,
  SET_IS_EDIT_TAMBAHAN,
  SET_DATA_EDIT_TAMBAHAN,
  SET_TUKANG_BY_DIVISI,
  GET_TUKANG_BY_DIVISI,
  SET_ALL_NO_JOB_ORDER,
  COUNT_BERAT_BALIK_JO,
  SET_BAHAN_KEMBALI_KIRIM,
  SET_TUKANG_TUJUAN,
} from "../actions/kirimjo";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  dataDetailJO: [],
  jumlahKirim: 0,
  beratBalik: 0,
  beratKirim: 0,
  beratSusut: 0,
  beratBatuTakTerpakai: 0,
  dataNoInduk: [],
  detailJO: [],
  NoIndukJO: undefined,
  isEditJO: false,
  dataEditJO: undefined,
  isEditBatu: false,
  dataEditBatu: undefined,
  isEditTambahan: false,
  dataEditTambahan: undefined,
  dataTukang: [],
  divisiTujuan: undefined,
  bahan_kembali: undefined,
  tukangTujuan: undefined,
};

const kirimjo = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_DETAIL_JO_SUCCESS:
      return {
        ...state,
        dataDetailJO: action.payload.data,
      };
    case SET_DATA_DETAIL_JO_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_COUNT_BERAT_KIRIM_JO:
      return {
        ...state,
        beratSusut: action.payload.data,
      };
    case SET_BAHAN_KEMBALI_KIRIM:
      return {
        ...state,
        bahan_kembali: action.payload.data,
      };
    case COUNT_BERAT_BALIK_JO:
      return {
        ...state,
        beratBalik: parseFloat(action.payload),
      };
    case COUNT_BERAT_KIRIM_JO:
      return {
        ...state,
        beratKirim: action.payload,
      };
    case SET_JUMLAH_KIRIM_JO:
      return {
        ...state,
        jumlahKirim: action.payload.data,
      };
    case SET_TUKANG_TUJUAN:
      return {
        ...state,
        tukangTujuan: action.payload.data,
      };
    case SAVE_BERAT_BATU_TAK_TERPAKAI:
      return {
        ...state,
        beratBatuTakTerpakai: action.payload.data,
      };
    case SET_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        dataNoInduk: action.payload.data,
      };
    case SET_DATA_BY_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        detailJO: action.payload.data,
      };
    case SET_ALL_NO_JOB_ORDER:
      return {
        ...state,
        detailJO: action.payload.data,
      };
    case GET_DATA_BY_NO_INDUK_JOB_ORDER:
      return {
        ...state,
        NoIndukJO: action.payload.data,
      };
    case EDIT_JOB_ORDER:
      return {
        ...state,
        isEditJO: true,
      };
    case SET_IS_EDIT_JOB_ORDER:
      return {
        ...state,
        isEditJO: action.payload.data,
      };
    case SET_DATA_EDIT_JOB_ORDER:
      return {
        ...state,
        dataEditJO: action.payload.data,
      };
    case EDIT_BATU:
      return {
        ...state,
        isEditBatu: true,
      };
    case SET_IS_EDIT_BATU:
      return {
        ...state,
        isEditBatu: action.payload.data,
      };
    case SET_DATA_EDIT_BATU:
      return {
        ...state,
        dataEditBatu: action.payload.data,
      };
    case EDIT_TAMBAHAN:
      return {
        ...state,
        isEditTambahan: true,
      };
    case SET_IS_EDIT_TAMBAHAN:
      return {
        ...state,
        isEditTambahan: action.payload.data,
      };
    case SET_DATA_EDIT_TAMBAHAN:
      return {
        ...state,
        dataEditTambahan: action.payload.data,
      };
    case SET_TUKANG_BY_DIVISI:
      return {
        ...state,
        dataTukang: action.payload.data,
      };
    case GET_TUKANG_BY_DIVISI:
      return {
        ...state,
        divisiTujuan: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimjo;
