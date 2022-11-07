// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_TAMBAH_BATU_ON,
  SET_TAMBAH_BATU_OFF,
  SET_AMBIL_BATU_ON,
  SET_AMBIL_BATU_OFF,
  SET_DATA_TAMBAH_AMBIL_BATU,
  SET_JUMLAH_BATU,
  COUNT_BERAT_TAMBAH_AMBIL_BATU,
  SET_SALDO_BATU,
  SET_KONVERSI_BERAT,
} from "../actions/tambahambilbatu";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  isAdd: false,
  isTake: false,
  isVisible: false,
  dataBatu: [],
  beratTambahAmbilBatu: 0,
  jumlah: 0,
  berat: 0,
  konversiBerat: 0,
};

const tambahambilbatu = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAMBAH_BATU_ON:
    case SET_TAMBAH_BATU_OFF:
      return {
        ...state,
        dataBatu: [],
        isAdd: action.payload,
        isVisible: action.payload,
        beratTambahAmbilBatu: 0,
        jumlah: 0,
      };
    case SET_AMBIL_BATU_ON:
    case SET_AMBIL_BATU_OFF:
      return {
        ...state,
        dataBatu: [],
        isTake: action.payload,
        isVisible: action.payload,
        beratTambahAmbilBatu: 0,
        jumlah: 0,
      };
    case SET_DATA_TAMBAH_AMBIL_BATU:
      return {
        ...state,
        dataBatu: action.payload.data,
      };
    case SET_JUMLAH_BATU:
      return {
        ...state,
        jumlah: action.payload.data,
      };
    case COUNT_BERAT_TAMBAH_AMBIL_BATU:
      return {
        ...state,
        berat: action.payload,
      };
    case SET_SALDO_BATU:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_KONVERSI_BERAT:
      return {
        ...state,
        konversiBerat: action.payload.data,
      };
    default:
      return state;
  }
};

export default tambahambilbatu;
