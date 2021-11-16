// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_R_SUCCESS,
  SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_R_FAILED,
  SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_L_SUCCESS,
  SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_L_FAILED,
} from '../actions/laporanstockglobalproduksi';

const initialState = {
  feedback_R: [],
  feedback_L: [],
  error: null,
  isEdit: false,
};

const laporanStockGlobalProduksi = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_L_SUCCESS:
      return {
        ...state,
        feedback_L: action.payload.data,
      };
    case SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_L_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_R_SUCCESS:
      return {
        ...state,
        feedback_R: action.payload.data,
      };
    case SET_DATA_LAPORAN_STOCK_GLOBAL_PRODUKSI_R_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default laporanStockGlobalProduksi;
