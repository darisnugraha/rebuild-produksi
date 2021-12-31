// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_TAMBAH_AMBIL_SALDO_BATU_SUCCESS,
  SET_DATA_TAMBAH_AMBIL_SALDO_BATU_FAILED,
} from "../actions/laporantambahambilsaldobatu";
const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const laporantambahambilsaldobatu = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_TAMBAH_AMBIL_SALDO_BATU_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_TAMBAH_AMBIL_SALDO_BATU_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default laporantambahambilsaldobatu;
