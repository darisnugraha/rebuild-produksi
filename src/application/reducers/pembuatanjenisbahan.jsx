// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_SALDO_BAHAN_STOCK_SUCCESS,
  SET_DATA_SALDO_BAHAN_STOCK_FAILED,
  ADD_DATA_DETAIL_JENIS_BAHAN_SUCCESS,
  ADD_DATA_DETAIL_JENIS_BAHAN_FAILED,
  ADD_DATA_DETAIL_BAHAN_SUCCESS,
} from "../actions/pembuatanjenisbahan";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  detailJenisBahan: [],
  detailBahan: [],
};

const pembuatanjenisbahan = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_SALDO_BAHAN_STOCK_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_SALDO_BAHAN_STOCK_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case ADD_DATA_DETAIL_JENIS_BAHAN_SUCCESS:
      return {
        ...state,
        detailJenisBahan: action.payload.data,
      };
    case ADD_DATA_DETAIL_JENIS_BAHAN_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case ADD_DATA_DETAIL_BAHAN_SUCCESS:
      return {
        ...state,
        detailBahan: action.payload.data,
      };
    default:
      return state;
  }
};

export default pembuatanjenisbahan;
