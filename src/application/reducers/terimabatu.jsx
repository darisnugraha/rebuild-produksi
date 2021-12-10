// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_NO_KIRIM_BATU_BY_TANGGAL_SUCCESS,
  SET_DATA_NO_KIRIM_BATU_BY_TANGGAL_FAILED,
  SET_DATA_DETAIL_KIRIM_BATU_SUCCESS,
  SET_DATA_DETAIL_KIRIM_BATU_FAILED,
} from "../actions/terimabatu";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  noKirim: [],
  detailKirim: [],
};

const terimabatu = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_NO_KIRIM_BATU_BY_TANGGAL_SUCCESS:
      return {
        ...state,
        noKirim: action.payload.data,
      };
    case SET_DATA_NO_KIRIM_BATU_BY_TANGGAL_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_DETAIL_KIRIM_BATU_SUCCESS:
      return {
        ...state,
        detailKirim: action.payload.data,
      };
    case SET_DATA_DETAIL_KIRIM_BATU_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default terimabatu;
