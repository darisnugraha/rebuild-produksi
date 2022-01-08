// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_LAPORAN_KIRIM_LEBUR_FAILED,
  SET_DATA_LAPORAN_KIRIM_LEBUR_SUCCESS,
  SET_DATA_LAPORAN_TERIMA_LEBUR_FAILED,
  SET_DATA_LAPORAN_TERIMA_LEBUR_SUCCESS,
} from "../actions/laporanlebur";
const initialState = {
  feedback: [],
  feedbackTerima: [],
  error: null,
  errorTerima: null,
  isEdit: false,
};

const laporanlebur = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_LAPORAN_KIRIM_LEBUR_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_LAPORAN_KIRIM_LEBUR_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_LAPORAN_TERIMA_LEBUR_SUCCESS:
      return {
        ...state,
        feedbackTerima: action.payload.data,
      };
    case SET_DATA_LAPORAN_TERIMA_LEBUR_FAILED:
      return {
        ...state,
        errorTerima: action.payload.data,
      };
    default:
      return state;
  }
};

export default laporanlebur;
