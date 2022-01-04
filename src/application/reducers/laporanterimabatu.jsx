// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_LAPORAN_TERIMA_BATU_FAILED,
  SET_DATA_LAPORAN_TERIMA_BATU_SUCCESS,
} from "../actions/laporanterimabatu";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const laporanterimabatu = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_LAPORAN_TERIMA_BATU_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_LAPORAN_TERIMA_BATU_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default laporanterimabatu;
