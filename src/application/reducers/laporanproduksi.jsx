// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_TERIMA_PRODUKSI_SUCCESS,
  SET_DATA_TERIMA_PRODUKSI_FAILED,
} from "../actions/laporanproduksi";

const initialState = {
  feedback: [],
  feedbackTerima: [],
  error: null,
  errorTerima: null,
  isEdit: false,
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
    default:
      return state;
  }
};

export default laporanproduksi;
