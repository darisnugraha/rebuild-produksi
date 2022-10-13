// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_ABU_TUKANG_SUCCESS,
  SET_DATA_ABU_TUKANG_FAILED,
  SET_DATA_TUKANG_SUCCESS,
  SET_BERAT_SUSUT_BRUTO,
  SET_BAHAN_KEMBALI,
  GET_KADAR,
  SET_24K,
} from "../actions/abutukang";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  total_abu: 0,
  total_24k: 0,
  berat_bruto: 0,
  berat_kotor: 0,
  bahan_kembali: 0,
  kadar: 0,
  k24: 0,
  k_susut24: 0,
};

const abutukang = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_ABU_TUKANG_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_ABU_TUKANG_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_TUKANG_SUCCESS:
      return {
        ...state,
        total_abu: action.payload.data.totalAbu,
        total_24k: action.payload.data.total24K,
      };
    case SET_BERAT_SUSUT_BRUTO:
      return {
        ...state,
        berat_bruto: action.payload.data.beratBruto,
        berat_kotor: action.payload.data.beratKotor,
      };
    case SET_BAHAN_KEMBALI:
      return {
        ...state,
        bahan_kembali: action.payload.data,
      };
    case GET_KADAR:
      return {
        ...state,
        kadar: action.payload.data,
      };
    case SET_24K:
      return {
        ...state,
        k24: action.payload.data.k_24,
        k_susut24: action.payload.data.susut_k,
      };
    default:
      return state;
  }
};

export default abutukang;
