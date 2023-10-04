// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_ALL_CABANG,
  SET_SALDO_KIRIM_BAHAN_CABANG,
  SET_DETAIL_KIRIM_BAHAN_CABANG,
} from "../actions/terimabahancabang";

const initialState = {
  cabang: [],
  listSaldo: [],
  detailKirim: undefined,
};

const terimabahancabang = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_CABANG:
      return {
        ...state,
        cabang: action.payload.data,
      };
    case SET_SALDO_KIRIM_BAHAN_CABANG:
      return {
        ...state,
        listSaldo: action.payload.data,
      };
    case SET_DETAIL_KIRIM_BAHAN_CABANG:
      return {
        ...state,
        detailKirim: action.payload.data,
      };
    default:
      return state;
  }
};

export default terimabahancabang;
