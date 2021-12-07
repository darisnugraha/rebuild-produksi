// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_SALDO_MURNI_SUCCESS,
  SET_DATA_SALDO_MURNI_FAILED,
  SET_TAMBAH_SALDO_MURNI_ON,
  SET_TAMBAH_SALDO_MURNI_OFF,
  SET_AMBIL_SALDO_MURNI_ON,
  SET_AMBIL_SALDO_MURNI_OFF,
  SET_DATA_SALDO_MURNI,
} from "../actions/saldomurni";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  isAdd: false,
  isTake: false,
  isVisible: false,
  dataSaldo: [],
  beratKirim: 0,
  jumlahKirim: 0,
};

const saldomurni = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_SALDO_MURNI_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_SALDO_MURNI_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_TAMBAH_SALDO_MURNI_ON:
    case SET_TAMBAH_SALDO_MURNI_OFF:
      return {
        ...state,
        dataSaldo: [],
        isAdd: action.payload,
        isVisible: action.payload,
        beratKirim: 0,
        jumlahKirim: 0,
      };
    case SET_AMBIL_SALDO_MURNI_ON:
    case SET_AMBIL_SALDO_MURNI_OFF:
      return {
        ...state,
        dataSaldo: [],
        isTake: action.payload,
        isVisible: action.payload,
        beratKirim: 0,
        jumlahKirim: 0,
      };
    case SET_DATA_SALDO_MURNI:
      return {
        ...state,
        dataSaldo: action.payload.data,
      };
    default:
      return state;
  }
};

export default saldomurni;
