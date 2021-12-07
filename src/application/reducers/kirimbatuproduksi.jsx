// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_DETAIL_JO_SUCCESS,
  SET_DATA_DETAIL_JO_FAILED,
  SET_BERAT_BATU_SUCCESS,
  SET_COUNT_BERAT_KIRIM_BATU_PRODUKSI,
  COUNT_BERAT_KIRIM_BATU_PRODUKSI,
} from "../actions/kirimbatuproduksi";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  dataBatu: [],
  jumlahKirim: 0,
  beratKirim: 0,
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
    default:
      return state;
  }
};

export default kirimbatuproduksi;
