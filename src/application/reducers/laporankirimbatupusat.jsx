// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_LAPORAN_KIRIM_BATU_PUSAT_FAILED,
  SET_DATA_LAPORAN_KIRIM_BATU_PUSAT_SUCCESS,
} from "../actions/laporankirimbatupusat";
const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const laporankirimbatupusat = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_LAPORAN_KIRIM_BATU_PUSAT_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_LAPORAN_KIRIM_BATU_PUSAT_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default laporankirimbatupusat;
